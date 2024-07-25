import { useSearchParams } from 'react-router-dom';

import BlogSection from '../Features/blog/BlogSection';
import BlogPost from '../Features/blog/BlogPost';

export default function BlogPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className='max-width-page padding-page-x mx-auto pt-32 text-center'>
      {!searchParams.get('post') ? <BlogSection /> : <BlogPost />}
    </div>
  );
}
