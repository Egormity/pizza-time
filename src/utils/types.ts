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
