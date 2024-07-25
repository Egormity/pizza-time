import { FooterPageContentProps } from '../utils/types';
import Spinner from './Spinner';

type GenerateFooterPageContentProps = {
  items: FooterPageContentProps[];
  isLoading: boolean;
};

export default function GenerateFooterPageContent({ items, isLoading }: GenerateFooterPageContentProps) {
  if (isLoading) return <Spinner />;

  return (
    <div className='grid gap-8 py-10'>
      {items.map(item => (
        <div key={item.id}>
          <h1 className='text-lg font-bold text-zinc-200'>{item.heading}</h1>
          <p className='text-sm text-zinc-400'>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
