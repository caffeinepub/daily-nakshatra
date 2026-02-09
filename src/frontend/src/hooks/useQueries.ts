import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import { logNakshatraQueryFailure, isValidLongitude } from '@/lib/diagnostics/nakshatraDiagnostics';

export function useDetermineNakshatra(
  lunarLongitude: number,
  cityTimezone: string,
  cityName: string,
  selectionKey: number
) {
  const { actor, isFetching } = useActor();

  const isLongitudeValid = isValidLongitude(lunarLongitude);
  const isActorReady = !!actor && !isFetching;
  const isQueryEligible = isActorReady && isLongitudeValid;

  const query = useQuery({
    queryKey: ['nakshatra', lunarLongitude, cityTimezone, cityName, selectionKey],
    queryFn: async () => {
      const context = {
        lunarLongitude,
        cityName,
        cityTimezone,
        selectionKey,
        actorInitialized: !!actor,
      };

      if (!actor) {
        logNakshatraQueryFailure('actor-not-initialized', context);
        throw new Error('Actor not initialized');
      }

      if (!isLongitudeValid) {
        logNakshatraQueryFailure('invalid-longitude', context);
        throw new Error('Invalid lunar longitude');
      }

      try {
        return await actor.determineNakshatra(lunarLongitude);
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
