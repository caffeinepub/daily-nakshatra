import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActorStable } from './useActorStable';
import type { UserProfile } from '@/backend';
import { sanitizeError } from '@/lib/diagnostics/sanitizeError';

export function useGetCallerUserProfile() {
  const { actor, isFetching: actorFetching } = useActorStable();

  const query = useQuery<UserProfile | null>({
    queryKey: ['currentUserProfile'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getCallerUserProfile();
    },
    enabled: !!actor && !actorFetching,
    retry: false,
  });

  return {
    ...query,
    isLoading: actorFetching || query.isLoading,
    isFetched: !!actor && query.isFetched,
  };
}

export function useSaveCallerUserProfile() {
  const { actor } = useActorStable();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (profile: UserProfile) => {
      if (!actor) throw new Error('Actor not available');
      return actor.saveCallerUserProfile(profile);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['currentUserProfile'] });
      await queryClient.refetchQueries({ queryKey: ['currentUserProfile'], type: 'active' });
    },
    onError: (error: unknown) => {
      console.error('Profile save failed:', sanitizeError(error));
    },
  });
}
