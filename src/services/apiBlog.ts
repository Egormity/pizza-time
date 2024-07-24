import { Post } from '../Features/Blog/BlogTypes';
import { supabase } from './supabase';

type Filter = {
  filterField: string;
  filterValue: string | null;
};

export async function getPosts({ filterField, filterValue }: Filter) {
  let query = supabase.from('blog').select('*', { count: 'exact' }).range(0, 9);

  //--- FILTERING ---//
  if (filterField && filterValue)
    query = query.eq(filterField, filterField !== 'id' ? filterValue : +filterValue);

  const { data, error, count }: { data: Post[]; error: string; count: number } = await query;

  if (error) {
    console.log(`!!!!! ${error} !!!!!`);
    throw new Error('Post(s) could not be loaded');
  }

  return { data, count };
}
