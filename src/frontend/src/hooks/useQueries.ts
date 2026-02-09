import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useDetermineNakshatra(
  lunarLongitude: number,
  cityTimezone: string,
  cityName: string,
  selectionKey: number
) {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ['nakshatra', lunarLongitude, cityTimezone, cityName, selectionKey],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.determineNakshatra(lunarLongitude);
    },
    enabled: !!actor && !isFetching && lunarLongitude >= 0 && lunarLongitude <= 360,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}
