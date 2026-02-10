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
      // This ensures retry picks up changes after adding/removing the param
      const adminToken = getUrlParameter('caffeineAdminToken');

      if (!isAuthenticated) {
        // Create anonymous actor
        const actor = await createActorWithConfig();
        
        // Only call initialization if token is present and non-empty
        if (adminToken && adminToken.trim() !== '') {
          try {
            // Check if the method exists before calling
            if ('_initializeAccessControlWithSecret' in actor && typeof actor._initializeAccessControlWithSecret === 'function') {
              await actor._initializeAccessControlWithSecret(adminToken);
            }
          } catch (error) {
            console.warn('Access control initialization failed:', error);
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
      
      // Only call initialization if token is present and non-empty
      if (adminToken && adminToken.trim() !== '') {
        try {
          // Check if the method exists before calling
          if ('_initializeAccessControlWithSecret' in actor && typeof actor._initializeAccessControlWithSecret === 'function') {
            await actor._initializeAccessControlWithSecret(adminToken);
          }
        } catch (error) {
          console.warn('Access control initialization failed:', error);
          // Don't throw - allow authenticated access to continue
        }
      }
      
      return actor;
    },
    // Only refetch when identity changes
    staleTime: Infinity,
    enabled: true,
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
