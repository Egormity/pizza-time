import { usePosts } from '../hooks/usePosts';
import { maxWidthPage } from '../utils/classNames';
import { formatDate } from '../utils/formatDate';
import { scrollToTop } from '../utils/scrollToTop';
import { Post } from '../utils/types';
import Button from './Button';
import Spinner from './Spinner';

export default function BlogPost() {
  const { posts, isLoadingPosts } = usePosts();

  if (isLoadingPosts)
    return (
      <div className='padding-page-t'>
        <Spinner />
      </div>
    );
  if (!posts) return <h1 className='text-4xl font-black'>Post could not be loaded..</h1>;

  if (posts.length !== 1) {
    console.log(`!!!!! Somehow user loaded NOT 1 post but 0 or more than 1 !!!!!`);
    return <h1 className='text-4xl font-black'>The was a problem loading this post..</h1>;
  }

  const post: Post = posts[0];

  return (
    <article className={`max-width-page padding-page-t padding-page-b grid justify-items-center gap-8 pb-14`}>
      <h1 className='max-w-[40rem] text-4xl font-black'>{post.heading}</h1>

      <div className='-mt-4 flex gap-6 text-zinc-300'>
        <p>Posted {formatDate(post.postDate, 'digit')}</p>
        <p>By {post.author}</p>
      </div>

      <div className='flex max-h-[25rem] max-w-[40rem] items-center justify-center overflow-hidden'>
        <img src={post.image} />
      </div>

      <div className='text-left text-sm text-zinc-300'>
        <p className='whitespace-pre-line'>{post.content}</p>
      </div>

      <Button variation='red-transparent' to={-1} customFunc={scrollToTop}>
        &larr; Go back
      </Button>
    </article>
  );
}
