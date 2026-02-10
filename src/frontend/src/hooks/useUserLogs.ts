import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { CheckInEntry, SleepLogEntry, DreamLogEntry, BirthChartData } from '@/backend';

export function useGetAllLogs() {
  const { actor, isFetching: actorFetching } = useActor();

  const query = useQuery({
    queryKey: ['allLogs'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getAllLogs();
    },
    enabled: !!actor && !actorFetching,
    retry: false,
  });

  return {
    ...query,
    isLoading: actorFetching || query.isLoading,
  };
}

export function useGetLogsByDay(dayOfYear: bigint | null) {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery({
    queryKey: ['logsByDay', dayOfYear?.toString()],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      if (dayOfYear === null) throw new Error('Day of year not provided');
      return actor.getLogsByDay(dayOfYear);
    },
    enabled: !!actor && !actorFetching && dayOfYear !== null,
    retry: false,
  });
}

export function useGetLogsByNakshatra(nakshatra: string | null) {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery({
    queryKey: ['logsByNakshatra', nakshatra],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      if (!nakshatra) throw new Error('Nakshatra not provided');
      return actor.getLogsByNakshatra(nakshatra);
    },
    enabled: !!actor && !actorFetching && !!nakshatra,
    retry: false,
  });
}

export function useGetNakshatraPatterns() {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery({
    queryKey: ['nakshatraPatterns'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getNakshtaraPatterns();
    },
    enabled: !!actor && !actorFetching,
    retry: false,
  });
}

export function useSaveCheckIn() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: {
      dayOfYear: bigint;
      nakshatra: string;
      mood: string | null;
      energy: bigint | null;
      restlessness: bigint | null;
    }) => {
      if (!actor) throw new Error('Actor not available');
      return actor.saveCheckIn(data.dayOfYear, data.nakshatra, data.mood, data.energy, data.restlessness);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['allLogs'] });
      queryClient.invalidateQueries({ queryKey: ['logsByDay'] });
      queryClient.invalidateQueries({ queryKey: ['nakshatraPatterns'] });
    },
  });
}

export function useSaveSleepLog() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: { dayOfYear: bigint; nakshatra: string; sleepNotes: string | null }) => {
      if (!actor) throw new Error('Actor not available');
      return actor.saveSleepLog(data.dayOfYear, data.nakshatra, data.sleepNotes);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['allLogs'] });
      queryClient.invalidateQueries({ queryKey: ['logsByDay'] });
      queryClient.invalidateQueries({ queryKey: ['nakshatraPatterns'] });
    },
  });
}

export function useSaveDreamLog() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: { dayOfYear: bigint; nakshatra: string; dreamNotes: string | null }) => {
      if (!actor) throw new Error('Actor not available');
      return actor.saveDreamLog(data.dayOfYear, data.nakshatra, data.dreamNotes);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['allLogs'] });
      queryClient.invalidateQueries({ queryKey: ['logsByDay'] });
      queryClient.invalidateQueries({ queryKey: ['nakshatraPatterns'] });
    },
  });
}

export function useGetCurrentDayOfYear() {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery({
    queryKey: ['currentDayOfYear'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getCurrentDayOfYearForCaller();
    },
    enabled: !!actor && !actorFetching,
    staleTime: 1000 * 60 * 60, // 1 hour
  });
}
