import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';

import { ITEMS_PER_PAGE } from '../utils/constants';
import { getMenuSection } from '../services/getMenuSection';

export function useMenuSection(select: string) {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryClient = useQueryClient();

  //--- PAGINATION ---//
  const page = +searchParams.get('page') || 1;

  const {
    data: { data: menuItems, count: menuCount } = {},
    error,
    isLoading: isLoadingMenu,
  } = useQuery({
    queryKey: [select, page],
    queryFn: () => getMenuSection({ select, page }),
  });

  //--- PREFETCHING ---//
  const pageCount = Math.ceil(menuCount / ITEMS_PER_PAGE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: [select, page + 1],
      queryFn: () => getMenuSection({ select, page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: [select, page - 1],
      queryFn: () => getMenuSection({ select, page: page - 1 }),
    });

  return { menuItems, error, isLoadingMenu, menuCount };
}
