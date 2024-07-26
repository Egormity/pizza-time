import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { ITEMS_PER_PAGE } from '../utils/constants';
import { getMenu, getMenuProps } from '../services/apiMenu';

export function useMenu(select: getMenuProps['select']) {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryClient = useQueryClient();

  //--- PAGINATION ---//
  const page = +searchParams.get('page') || 1;

  const {
    data: { data: menu, count } = {},
    error,
    isLoading: isLoadingMenu,
  } = useQuery({
    queryKey: ['menu', page],
    queryFn: () => getMenu({ select, page }),
  });

  //--- PREFETCHING ---//
  const pageCount = Math.ceil(count / ITEMS_PER_PAGE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ['menu', page + 1],
      queryFn: () => getMenu({ select, page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ['menu', page - 1],
      queryFn: () => getMenu({ select, page: page - 1 }),
    });

  return { menu, error, isLoadingMenu, count };
}
