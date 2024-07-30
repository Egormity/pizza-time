import { menuFilters, menuSorting, pizzaSizes } from '../data/dataToMap';

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
  discount: number;
  type: string;
};

export type MenuFiltersTypes = (typeof menuFilters)[number];

export type pizzaSizesTypes = (typeof pizzaSizes)[number];

export type MenuSortingTypes = (typeof menuSorting)[number];

export type AccountLogInOptions = 'start' | 'signUp' | 'logIn';

export type UserType = {
  fullName: string;
  email: string;
  password: string;
  id: string;
};

export type SignUpUser = UserType & {
  passwordConfirm: string;
};

export type CartItem = {
  quantity: number;
  totalPrice: number;
  totalDiscount: number;
  itemId: number;
  name: string;
  image: string;
  description?: string | null;
  price: number;
  discount: number;
  type: string | null;
  pizzaSize: pizzaSizesTypes | null;
  pizzaPrice: number | null;
};

export type CartType = {
  id: string;
  content: CartItem[];
};

export type getAnyTableProps = {
  select: string;
  orderColumn?: string;
  orderAscendingDirection?: boolean;
  from?: number;
  to?: number;
};
