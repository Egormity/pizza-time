import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getPosts } from '../services/apiBlog';
import { ITEMS_PER_PAGE } from '../utils/constants';

export function usePosts() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  //--- FILTER ---//
  const filterValue = searchParams.get('post');

  //--- PAGINATION ---//
  const pageParams = searchParams.get('page');
  const page = pageParams ? +pageParams : 1;

  const {
    data: { data: posts, count } = {},
    error,
    isLoading: isLoadingPosts,
  } = useQuery({
    queryKey: ['posts', filterValue, page],
    queryFn: () => getPosts({ filterField: 'id', filterValue, page }),
  });

  //--- PREFETCHING ---//
  if (count) {
    const pageCount = Math.ceil(count / ITEMS_PER_PAGE);

    if (page < pageCount)
      queryClient.prefetchQuery({
        queryKey: ['posts', filterValue, page + 1],
        queryFn: () => getPosts({ filterField: 'id', filterValue, page: page + 1 }),
      });

    if (page > 1)
      queryClient.prefetchQuery({
        queryKey: ['posts', filterValue, page - 1],
        queryFn: () => getPosts({ filterField: 'id', filterValue, page: page - 1 }),
      });
  }

  return { posts, error, isLoadingPosts, count };
}
