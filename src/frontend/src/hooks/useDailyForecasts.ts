import { useQuery } from '@tanstack/react-query';
import { useActorStable } from './useActorStable';

// Temporary type definition until backend implements DailyForecastRecord
export interface DailyForecastRecord {
  timestamp: bigint;
  nakshatraName: string;
  forecastText: string;
}

// Placeholder hook until backend implements getCallerDailyForecasts
export function useGetCallerDailyForecasts() {
  const { actor, isFetching: actorFetching } = useActorStable();

  const query = useQuery<DailyForecastRecord[]>({
    queryKey: ['callerDailyForecasts'],
    queryFn: async () => {
      // Backend method not yet implemented
      return [];
    },
    enabled: false, // Disabled until backend is ready
    retry: false,
  });

  return {
    ...query,
    isLoading: false,
    data: [],
  };
}
