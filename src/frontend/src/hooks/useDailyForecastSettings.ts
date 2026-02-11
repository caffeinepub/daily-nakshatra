import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActorStable } from './useActorStable';
import { sanitizeError } from '@/lib/diagnostics/sanitizeError';

// Placeholder hook until backend implements getDailyForecastEnabled
export function useGetDailyForecastEnabled() {
  const { actor, isFetching: actorFetching } = useActorStable();

  const query = useQuery<boolean>({
    queryKey: ['dailyForecastEnabled'],
    queryFn: async () => {
      // Backend method not yet implemented
      return false;
    },
    enabled: false, // Disabled until backend is ready
    retry: false,
  });

  return {
    ...query,
    isLoading: false,
    data: false,
  };
}

// Placeholder hook until backend implements setDailyForecastEnabled
export function useSetDailyForecastEnabled() {
  const { actor } = useActorStable();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (enabled: boolean) => {
      // Backend method not yet implemented
      throw new Error('Daily forecasts feature is not yet available');
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['dailyForecastEnabled'] });
      await queryClient.refetchQueries({ queryKey: ['dailyForecastEnabled'] });
    },
    onError: (error: unknown) => {
      console.error('Failed to update daily forecast setting:', sanitizeError(error));
    },
  });
}
