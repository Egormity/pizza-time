import { useSearchParams } from 'react-router-dom';

import BlogSection from '../features/blog/BlogSection';
import BlogPost from '../ui/BlogPost';

export default function BlogPage() {
  const [searchParams] = useSearchParams();

  return !searchParams.get('post') ? <BlogSection /> : <BlogPost />;
}
