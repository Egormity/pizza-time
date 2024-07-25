import { FooterPageContentProps } from '../utils/types';
import { supabase } from './supabase';

export async function getFooterPageContent(select: string) {
  const { data, error, count }: { data: FooterPageContentProps[]; error: string; count: number } =
    await supabase.from(select).select('*', { count: 'exact' }).order('id', { ascending: true });

  if (error) {
    console.log('!!! ERRRRRROR !!!', error);
    throw new Error(`${select}(s) could not be loaded`);
  }

  return { data, count };
}
