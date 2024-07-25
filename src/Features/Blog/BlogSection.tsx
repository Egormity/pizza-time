import { useSearchParams } from 'react-router-dom';

import BlogPosts from './BlogPosts';
import BlogPost from './BlogPost';
import { usePosts } from './usePosts';
import Pagination from '../../ui/Pagination';
import Spinner from '../../ui/Spinner';

export default function BlogSection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { count, isLoadingPosts } = usePosts();

  if (!searchParams.get('post'))
    return (
      <section>
        <h1 className='text-6xl font-black'>Blog</h1>
        <p className='pt-4 text-lg text-zinc-300'>
          Pizza makes everything better. These are some of our favorite pizza blogs that are loaded with
          recipes and pizza-making tips.
        </p>

        <div className='blog-grid py-20'>{isLoadingPosts ? <Spinner /> : <BlogPosts />}</div>

        <div className='flex items-center justify-between pb-12'>
          <Pagination count={count} />
        </div>
      </section>
    );

  return <BlogPost />;
}
