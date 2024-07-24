import { useSearchParams } from 'react-router-dom';

import BlogPosts from './BlogPosts';
import BlogPost from './BlogPost';
import { usePosts } from './usePosts';

export default function BlogSection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { count } = usePosts();

  if (!searchParams.get('post'))
    return (
      <section>
        <h1 className='text-6xl font-black'>Blog</h1>
        <p className='pt-4 text-lg text-zinc-300'>
          Pizza makes everything better. These are some of our favorite pizza blogs that are loaded with
          recipes and pizza-making tips.
        </p>

        <div className='blog-grid py-20'>
          <BlogPosts />
        </div>

        <div className='flex justify-evenly'>
          <p>
            {` < 1 ... 3 >`} (all - {count})
          </p>
        </div>
      </section>
    );

  return <BlogPost />;
}
