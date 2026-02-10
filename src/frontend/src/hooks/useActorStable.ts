import { useInternetIdentity } from './useInternetIdentity';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { type backendInterface } from '../backend';
import { createActorWithConfig } from '../config';
import { getUrlParameter } from '../utils/urlParams';
import { buildActorQueryKey } from './actorQueryKey';

export function useActorStable() {
  const { identity } = useInternetIdentity();
  const queryClient = useQueryClient();
  const principalString = identity?.getPrincipal().toString();
  const actorQueryKey = buildActorQueryKey(principalString);

  const actorQuery = useQuery<backendInterface>({
    queryKey: actorQueryKey,
    queryFn: async () => {
      const isAuthenticated = !!identity;

      // Read the caffeineAdminToken from URL on each query execution
      const adminToken = getUrlParameter('caffeineAdminToken');

      if (!isAuthenticated) {
        // Create anonymous actor
        const actor = await createActorWithConfig();
        
        // Only call initialization if token is present, non-empty, and method exists
        if (adminToken && adminToken.trim() !== '' && actor._initializeAccessControlWithSecret) {
          try {
            await actor._initializeAccessControlWithSecret(adminToken);
          } catch (error) {
            console.warn('Access control initialization failed (anonymous):', error);
            // Don't throw - allow anonymous access to continue
          }
        }
        
        return actor;
      }

      // Create authenticated actor
      const actorOptions = {
        agentOptions: {
          identity,
        },
      };

      const actor = await createActorWithConfig(actorOptions);
      
      // Only call initialization if token is present, non-empty, and method exists
      if (adminToken && adminToken.trim() !== '' && actor._initializeAccessControlWithSecret) {
        try {
          await actor._initializeAccessControlWithSecret(adminToken);
        } catch (error) {
          console.warn('Access control initialization failed (authenticated):', error);
          // Don't throw - allow authenticated access to continue
        }
      }
      
      return actor;
    },
    // Only refetch when identity changes
    staleTime: Infinity,
    enabled: true,
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });

  // When the actor changes, invalidate dependent queries
  useEffect(() => {
    if (actorQuery.data) {
      queryClient.invalidateQueries({
        predicate: (query) => {
          return !query.queryKey.includes('actor');
        },
      });
      queryClient.refetchQueries({
        predicate: (query) => {
          return !query.queryKey.includes('actor');
        },
      });
    }
  }, [actorQuery.data, queryClient]);

  return {
    actor: actorQuery.data || null,
    isFetching: actorQuery.isFetching,
  };
}
