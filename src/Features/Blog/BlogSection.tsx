import BlogPosts from './BlogPosts';
import Pagination from '../../ui/Pagination';
import Spinner from '../../ui/Spinner';
import { usePosts } from '../../hooks/usePosts';

export default function BlogSection() {
  const { count, isLoadingPosts } = usePosts();

  return (
    <section>
      <h1 className='text-6xl font-black'>Blog</h1>
      <p className='pt-4 text-lg text-zinc-300'>
        Pizza makes everything better. These are some of our favorite pizza blogs that are loaded with recipes
        and pizza-making tips.
      </p>

      <div className='blog-grid py-20'>{isLoadingPosts ? <Spinner /> : <BlogPosts />}</div>

      <div className='pb-12'>
        <Pagination count={count} />
      </div>
    </section>
  );
}
