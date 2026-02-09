import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import { logNakshatraQueryFailure, isValidLongitude, normalizeLongitude } from '@/lib/diagnostics/nakshatraDiagnostics';

export function useDetermineNakshatra(
  lunarLongitude: number | null,
  cityTimezone: string,
  cityName: string,
  selectionKey: number
) {
  const { actor, isFetching } = useActor();

  // Normalize longitude if provided
  const normalizedLongitude = lunarLongitude !== null ? normalizeLongitude(lunarLongitude) : null;
  const isLongitudeValid = normalizedLongitude !== null && isValidLongitude(normalizedLongitude);
  const isActorReady = !!actor && !isFetching;
  const isQueryEligible = isActorReady && isLongitudeValid && normalizedLongitude !== null;

  const query = useQuery({
    queryKey: ['nakshatra', normalizedLongitude, cityTimezone, cityName, selectionKey],
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

  return {
    ...query,
    isActorReady,
    isLongitudeValid,
    isQueryEligible,
  };
}
