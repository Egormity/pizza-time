import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';

import { ITEMS_PER_PAGE } from '../utils/constants';
import { getMenuSection } from '../services/getMenuSection';

export function useMenuSection(select: string) {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  //--- PAGINATION ---//
  const pageParams = searchParams.get('page');
  const page = pageParams ? +pageParams : 1;

  //--- SORTING ---//
  const sortBy = searchParams.get('sortBy') || 'default';

  const {
    data: { data: menuItems, count: menuCount } = {},
    error,
    isLoading: isLoadingMenu,
  } = useQuery({
    queryKey: [select, page, sortBy],
    queryFn: () => getMenuSection({ select, page, sortBy }),
  });

  //--- PREFETCHING ---//
  if (menuCount) {
    const pageCount = Math.ceil(menuCount / ITEMS_PER_PAGE);

    if (page < pageCount)
      queryClient.prefetchQuery({
        queryKey: [select, page + 1],
        queryFn: () => getMenuSection({ select, page: page + 1, sortBy }),
      });

    if (page > 1)
      queryClient.prefetchQuery({
        queryKey: [select, page - 1],
        queryFn: () => getMenuSection({ select, page: page - 1, sortBy }),
      });
  }
  return { menuItems, error, isLoadingMenu, menuCount };
}
