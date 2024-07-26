import { ITEMS_PER_PAGE } from '../utils/constants';
import { MenuCategoryItem } from '../utils/types';
import { supabase } from './supabase';

type getMenuSectionProps = {
  select: string;
  page: number;
};

export async function getMenuSection({ select, page }: getMenuSectionProps) {
  if (select === 'none') return {};

  let query = supabase.from(select).select('*', { count: 'exact' }).order('id', { ascending: true });

  //--- PAGINATION ---//
  if (page) {
    const from = (page - 1) * ITEMS_PER_PAGE;
    const to = from + ITEMS_PER_PAGE - 1;
    query = query.range(from, to);
  }

  const { data, error, count }: { data: MenuCategoryItem[]; error: string; count: number } = await query;

  if (error) {
    console.log('!!! ERRRRRROR !!!', error);
    throw new Error(`${select}(s) could not be loaded`);
  }

  return { data, count };
}
