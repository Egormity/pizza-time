import { ITEMS_PER_PAGE } from '../utils/constants';
import { Post } from '../utils/types';
import { supabase } from './supabase';

type Filter = {
  filterField: string;
  filterValue: string | null;
  page: number | null;
};

export async function getPosts({ filterField, filterValue, page }: Filter) {
  let query = supabase.from('blog').select('*', { count: 'exact' }).order('id', { ascending: true });

  //--- FILTERING ---//
  if (filterField && filterValue)
    query = query.eq(filterField, filterField !== 'id' ? filterValue : +filterValue);

  if (page && !filterValue) {
    const from = (page - 1) * ITEMS_PER_PAGE;
    const to = from + ITEMS_PER_PAGE - 1;
    query = query.range(from, to);
  }

  const { data, error, count }: { data: Post[]; error: string; count: number } = await query;
  console.log(data);

  if (error) {
    console.log('!!! ERRRRRROR !!!', error);
    throw new Error('Post(s) could not be loaded');
  }

  return { data, count };
}
