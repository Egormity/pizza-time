import { menuFilters, pizzaSizes } from '../data/dataToMap';

export type UnionOmit<T, K extends string | number | symbol> = T extends unknown ? Omit<T, K> : never;

export type Post = {
  id: number;
  createdAt: string;
  postDate: string;
  image: string;
  author: string;
  heading: string;
  description: string;
  content: string;
};

export type FooterPageContentProps = {
  id: number;
  createdAt: string;
  heading: string;
  description: string;
};

export type MenuCategoryItem = {
  id: number;
  createdAt: string;
  name: string;
  image: string;
  description?: string;
  price: number;
  salePrice?: number;
  type?: 'pizza';
};

export type MenuFiltersTypes = (typeof menuFilters)[number];

export type pizzaSizesTypes = (typeof pizzaSizes)[number];
