import { ITEMS_PER_PAGE } from '../utils/constants';
import { MenuFiltersTypes, MenuSortingTypes } from '../utils/types';
import { supabase } from './supabase';

type getMenuSectionProps = {
  select: MenuFiltersTypes;
  page: number;
  sortBy: MenuSortingTypes;
  search: string | null;
};

export async function getMenuSection({ select, page, sortBy, search }: getMenuSectionProps) {
  let query = supabase.from(select).select('*', { count: 'exact' });

  //--- SEARCHING ---//
  if (search) query = query.textSearch('name', search, { type: 'plain', config: 'english' });

  //--- SORTING ---//
  if (sortBy && sortBy.toLowerCase() !== 'default') {
    console.log(sortBy);
    const [direction, field] = sortBy.split(' ');

    query = query.order(field, {
      ascending: direction === 'Lower',
    });
  }

  //--- PAGINATION ---//
  if (page) {
    const from = (page - 1) * ITEMS_PER_PAGE;
    const to = from + ITEMS_PER_PAGE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    console.log('!!! ERRRRRROR !!!', error);
    throw new Error(`${select}(s) could not be loaded`);
  }

  return { data, count };
}
