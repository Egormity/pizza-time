import { useSearchParams } from 'react-router-dom';

import BlogSection from '../Features/blog/BlogSection';
import BlogPost from '../ui/BlogPost';

export default function BlogPage() {
  const [searchParams] = useSearchParams();

  return (
    <div className='max-width-page padding-page-x padding-page-b padding-page-t mx-auto text-center'>
      {!searchParams.get('post') ? <BlogSection /> : <BlogPost />}
    </div>
  );
}
