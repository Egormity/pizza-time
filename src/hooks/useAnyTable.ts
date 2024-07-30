import { useQuery } from '@tanstack/react-query';
import { getAnyTable } from '../services/apiGetAnyTable';
import { getAnyTableProps } from '../utils/types';

export function useAnyTable({ select, orderColumn, orderAscendingDirection, from, to }: getAnyTableProps) {
  const {
    data: { data, count } = {},
    error,
    isLoading,
  } = useQuery({
    queryKey: [select, orderColumn, orderAscendingDirection, from, to],
    queryFn: () => getAnyTable({ select, orderColumn, orderAscendingDirection, from, to }),
  });

  return { data, error, isLoading, count };
}
