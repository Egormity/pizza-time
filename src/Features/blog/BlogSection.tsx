import Pagination from '../../ui/Pagination';
import Spinner from '../../ui/Spinner';
import { usePosts } from '../../hooks/usePosts';
import { Post } from '../../utils/types';
import PostPreview from '../../ui/PostPreview';

export default function BlogSection() {
  const { posts, count, isLoadingPosts } = usePosts();

  return (
    <section className='padding-page-t padding-page-b max-width-page text-center'>
      <h1 className='text-6xl font-black'>Blog</h1>
      <p className='pt-4 text-lg text-zinc-300'>
        Pizza makes everything better. These are some of our favorite pizza blogs that are loaded with recipes
        and pizza-making tips.
      </p>

      <div className='py-20'>
        {isLoadingPosts ? (
          <Spinner />
        ) : !posts ? (
          <h1 className='text-4xl font-black'>Posts could not be loaded..</h1>
        ) : (
          <div className='grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-8 max400px:grid-cols-1 min1200px:grid-cols-3'>
            {posts.map((post: Post) => (
              <PostPreview post={post} key={post.heading} />
            ))}
          </div>
        )}
      </div>

      {count && (
        <div>
          <Pagination count={count} />
        </div>
      )}
    </section>
  );
}
