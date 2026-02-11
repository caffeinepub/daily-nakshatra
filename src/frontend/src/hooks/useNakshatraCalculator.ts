import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActorStable } from './useActorStable';
import type { Location } from '@/backend';
import { sanitizeError } from '@/lib/diagnostics/sanitizeError';

export function useComputeNakshatraData() {
  const { actor } = useActorStable();

  return useMutation({
    mutationFn: async (params: {
      moonLongitude: number;
      birthTime: string;
      birthLocation: Location;
      dob: string;
      timeOfBirth: string;
    }) => {
      if (!actor) throw new Error('Actor not available');
      return actor.computeNakshatraData(
        params.moonLongitude,
        params.birthTime,
        params.birthLocation,
        params.dob,
        params.timeOfBirth
      );
    },
    onError: (error: unknown) => {
      console.error('Nakshatra computation failed:', sanitizeError(error));
    },
  });
}

export function useSaveBirthData() {
  const { actor } = useActorStable();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: {
      dob: string;
      timeOfBirth: string;
      location: string;
      moonNakshatra: string;
      atmakarakaNakshatra: string;
    }) => {
      if (!actor) throw new Error('Actor not available');
      return actor.saveBirthData(
        data.dob,
        data.timeOfBirth,
        data.location,
        data.moonNakshatra,
        data.atmakarakaNakshatra
      );
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['currentUserProfile'] });
      await queryClient.refetchQueries({ queryKey: ['currentUserProfile'], type: 'active' });
      await queryClient.invalidateQueries({ queryKey: ['allLogs'] });
      await queryClient.refetchQueries({ queryKey: ['allLogs'], type: 'active' });
    },
    onError: (error: unknown) => {
      console.error('Birth data save failed:', sanitizeError(error));
    },
  });
}
