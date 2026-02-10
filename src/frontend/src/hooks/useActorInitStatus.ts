import { useQueryClient } from '@tanstack/react-query';
import { useInternetIdentity } from './useInternetIdentity';
import { buildActorQueryKey } from './actorQueryKey';

export type ActorInitStatus = 'idle' | 'loading' | 'success' | 'error';

export function useActorInitStatus() {
  const { identity } = useInternetIdentity();
  const queryClient = useQueryClient();

  // Build the stable query key that matches useActorStable
  const principalString = identity?.getPrincipal().toString();
  const actorQueryKey = buildActorQueryKey(principalString);

  // Read the actor query state without creating a new query
  const actorQueryState = queryClient.getQueryState(actorQueryKey);

  // Treat actor creation success as success, even if access-control init failed
  // The actor is still usable for guest/user operations
  const status: ActorInitStatus = actorQueryState
    ? actorQueryState.status === 'pending'
      ? 'loading'
      : actorQueryState.status === 'success'
      ? 'success'
      : actorQueryState.status === 'error'
      ? 'error'
      : 'idle'
    : 'idle';

  const error = actorQueryState?.error;

  const retryActorInitialization = () => {
    // Invalidate and refetch using the stable key
    queryClient.invalidateQueries({ queryKey: actorQueryKey });
    queryClient.refetchQueries({ queryKey: actorQueryKey });
  };

  return {
    status,
    error,
    retryActorInitialization,
    isSuccess: status === 'success',
    isError: status === 'error',
    isLoading: status === 'loading',
  };
}
