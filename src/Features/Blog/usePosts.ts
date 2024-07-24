import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../../services/apiBlog';
import { useSearchParams } from 'react-router-dom';

export function usePosts() {
  const [searchParams, setSearchParams] = useSearchParams();

  const filterValue = searchParams.get('post');

  const {
    data: { data: posts, count } = {},
    error,
    isLoading: isLoadingPosts,
  } = useQuery({
    queryKey: ['posts', filterValue],
    queryFn: () => getPosts({ filterField: 'id', filterValue }),
  });

  return { posts, error, isLoadingPosts, count };
}
