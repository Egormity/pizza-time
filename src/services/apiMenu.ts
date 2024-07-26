import { menuFilters } from '../data/dataToMap';
import { ITEMS_PER_PAGE } from '../utils/constants';
import { MenuCategory } from '../utils/types';
import { supabase } from './supabase';

export type getMenuProps = {
  select: 'menu' | 'pizzas' | 'pasta' | 'sushi' | 'drinks' | 'sale';
  page: number | null;
};

export async function getMenu({ select, page }: getMenuProps) {
  let query = [];

  if (select === 'menu') {
    menuFilters
      .filter(el => el !== 'menu' && el !== 'sale')
      .forEach(filter => {
        console.log(filter);
        query.push(...supabase.from(filter).select('*', { count: 'exact' }).order('id', { ascending: true }));
      });
  } else query = supabase.from(select).select('*', { count: 'exact' }).order('id', { ascending: true });

  if (page) {
    const from = (page - 1) * ITEMS_PER_PAGE;
    const to = from + ITEMS_PER_PAGE - 1;
    query = query.range(from, to);
  }

  const { data, error, count }: { data: MenuCategory[]; error: string; count: number } = await query;

  if (error) {
    console.log('!!! ERRRRRROR !!!', error);
    throw new Error('Menu could not be loaded');
  }

  return { data, count };
}
