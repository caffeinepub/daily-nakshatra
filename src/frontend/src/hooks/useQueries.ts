import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useActorStable } from './useActorStable';
import { useActorInitStatus } from './useActorInitStatus';
import { logNakshatraQueryFailure, isValidLongitude, normalizeLongitude } from '@/lib/diagnostics/nakshatraDiagnostics';

export function useDetermineNakshatra(
  lunarLongitude: number | null,
  cityTimezone: string,
  cityName: string,
  selectionKey: number
) {
  const { actor, isFetching } = useActorStable();
  const actorInitStatus = useActorInitStatus();
  const queryClient = useQueryClient();

  // Normalize longitude if provided
  const normalizedLongitude = lunarLongitude !== null ? normalizeLongitude(lunarLongitude) : null;
  const isLongitudeValid = normalizedLongitude !== null && isValidLongitude(normalizedLongitude);
  const isActorReady = !!actor && !isFetching && actorInitStatus.isSuccess;
  const isQueryEligible = isActorReady && isLongitudeValid && normalizedLongitude !== null;

  const queryKey = ['nakshatra', normalizedLongitude, cityTimezone, cityName, selectionKey];

  const query = useQuery({
    queryKey,
    queryFn: async () => {
      const context = {
        lunarLongitude: normalizedLongitude!,
        cityName,
        cityTimezone,
        selectionKey,
        actorInitialized: !!actor,
      };

      if (!actor) {
        logNakshatraQueryFailure('actor-not-initialized', context);
        throw new Error('Actor not initialized');
      }

      if (!isLongitudeValid || normalizedLongitude === null) {
        logNakshatraQueryFailure('invalid-longitude', context);
        throw new Error('Invalid lunar longitude');
      }

      try {
        return await actor.determineNakshatra(normalizedLongitude);
      } catch (error) {
        logNakshatraQueryFailure('backend-error', context, error);
        throw error;
      }
    },
    enabled: isQueryEligible,
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 2,
  });

  // Custom refetch that clears error state and forces a fresh attempt
  const forceRefetch = async () => {
    // Reset the query to clear error state
    await queryClient.resetQueries({ queryKey });
    // Then refetch
    return query.refetch();
  };

  return {
    ...query,
    isActorReady,
    isLongitudeValid,
    isQueryEligible,
    actorInitStatus: actorInitStatus.status,
    actorInitError: actorInitStatus.error,
    retryActorInitialization: actorInitStatus.retryActorInitialization,
    forceRefetch,
  };
}
