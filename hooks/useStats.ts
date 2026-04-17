import { useQuery } from '@tanstack/react-query';
import { fetchStats } from '@/services/api';
import type { DateRange } from '@/lib/schemas/stats';

export function useStats(range: DateRange) {
  return useQuery({
    queryKey: ['stats', range],
    queryFn: () => fetchStats(range),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
  });
}
