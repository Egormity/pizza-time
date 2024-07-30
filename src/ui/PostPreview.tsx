import { useSearchParams } from 'react-router-dom';
import { Post } from '../utils/types';
import { formatDate } from '../utils/formatDate';
import { scrollToTop } from '../utils/scrollToTop';

export default function PostPreview({ post }: { post: Post }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(value: string) {
    searchParams.set('post', value);
    setSearchParams(searchParams);
    scrollToTop();
  }

  return (
    <div
      key={post.id}
      className='cursor-pointer space-y-4 overflow-hidden rounded-xl border border-zinc-800 text-left duration-primary hover:-translate-y-1 hover:bg-zinc-500 hover:bg-opacity-10'
      onClick={() => handleClick(post.id + '')}
    >
      <div className='flex h-40 items-center justify-center overflow-hidden'>
        <img src={post.image} />
      </div>

      <div className='space-y-4 px-3 pb-3'>
        <div className='flex gap-4 text-zinc-300'>
          <p>{formatDate(post.postDate, 'text')}</p>
          <p>By {post.author}</p>
        </div>

        <h1 className='text-lg font-semibold'>{post.heading}</h1>

        <p className='text-zinc-300'>{post.description}</p>

        <p className='font-semibold text-zinc-200'>Read more..</p>
      </div>
    </div>
  );
}
