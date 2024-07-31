import { useAnyTable } from '../../hooks/useAnyTable';
import Button from '../../ui/Button';
import PostPreview from '../../ui/PostPreview';
import Spinner from '../../ui/Spinner';
import { maxWidthPage } from '../../utils/classNames';
import { Post } from '../../utils/types';

export default function RecentFromBlog({ padding }: { padding?: string }) {
  const { data, isLoading } = useAnyTable({
    select: 'blog',
    from: 1,
    to: 3,
    orderColumn: 'id',
    orderAscendingDirection: true,
  });

  return (
    <section className={`max-width-page ${padding} grid gap-10`}>
      <div className='text-center'>
        <h1 className='text-4xl'>RECENT FROM BLOG</h1>
        <p className='max-width-text text-zinc-400'>
          Fresh, flavorful, and maybe some healthy recipes made for real, actual, everyday life. You don't
          need to be a pro! Helping you celebrate the joy of food in a non-intimidating way.
        </p>
      </div>

      {isLoading ? (
        <Spinner />
      ) : (
        <div className='grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-8 max400px:grid-cols-1'>
          {data.map((post: Post) => (
            <PostPreview post={post} key={post.heading} />
          ))}
        </div>
      )}

      <div className='flex justify-center'>
        <Button to='/BlogPage' variation='red'>
          See more posts
        </Button>
      </div>
    </section>
  );
}