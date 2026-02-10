import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useInternetIdentity } from './useInternetIdentity';

const ACTOR_QUERY_KEY = 'actor';

export type ActorInitStatus = 'idle' | 'loading' | 'success' | 'error';

export function useActorInitStatus() {
  const { identity } = useInternetIdentity();
  const queryClient = useQueryClient();

  // Read the actor query state without creating a new query
  const actorQueryState = queryClient.getQueryState([ACTOR_QUERY_KEY, identity?.getPrincipal().toString()]);

  const status: ActorInitStatus = actorQueryState
    ? actorQueryState.status === 'pending'
      ? 'loading'
      : actorQueryState.status === 'error'
      ? 'error'
      : actorQueryState.status === 'success'
      ? 'success'
      : 'idle'
    : 'idle';

  const error = actorQueryState?.error;

  const retryActorInitialization = () => {
    queryClient.invalidateQueries({ queryKey: [ACTOR_QUERY_KEY] });
    queryClient.refetchQueries({ queryKey: [ACTOR_QUERY_KEY] });
  };

  return {
    status,
    error,
    isLoading: status === 'loading',
    isError: status === 'error',
    isSuccess: status === 'success',
    retryActorInitialization,
  };
}
