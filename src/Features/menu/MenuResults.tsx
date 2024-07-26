import { useSearchParams } from 'react-router-dom';

import { useMenuSection } from '../../hooks/useMenuSection';
import Spinner from '../../ui/Spinner';
import { pizzaSizes } from '../../data/dataToMap';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/formatCurrency';
import NoDataFound from '../../ui/NoDataFound';
import Pagination from '../../ui/Pagination';

export default function MenuResults() {
  const [searchParams, setSearchParams] = useSearchParams();

  const { menuItems, isLoadingMenu, menuCount } = useMenuSection(searchParams.get('menu') || 'pizzas');

  if (isLoadingMenu) return <Spinner />;
  if (!menuItems) return <NoDataFound dataName={searchParams.get('menu') || 'menu'} />;

  return (
    <div>
      <div className='menu-grid mb-8'>
        {menuItems.map(item => (
          <div
            key={item.name}
            className='flex flex-col overflow-hidden rounded-xl border border-zinc-700 bg-zinc-700 bg-opacity-5'
          >
            <div className='mb-auto'>
              <img src={item.image} alt={item.name + 'image'} />
            </div>

            <div className='grid gap-6 p-4 pt-6'>
              <h1 className='text-2xl font-medium'>{item.name}</h1>
              {item.description && <p className='text-sm font-medium'>{item.description}</p>}

              {item.type && (
                <div className='flex justify-between'>
                  {pizzaSizes.map(size => (
                    <button
                      key={size}
                      className='border border-zinc-700 px-2 py-1 text-xs font-medium uppercase text-zinc-300 ring-zinc-400 duration-primary hover:bg-zinc-100 hover:bg-opacity-5 focus:ring'
                    >
                      {size}
                    </button>
                  ))}
                </div>
              )}

              <div className='flex items-center gap-3'>
                {item.salePrice && (
                  <h3 className='text-xl text-primary-red line-through decoration-2'>
                    {formatCurrency(item.salePrice)}
                  </h3>
                )}
                <h3 className='text-xl text-primary-yellow-light'> {formatCurrency(item.price)}</h3>
                <div className='ml-auto'>
                  <Button type='red'>Add to cart</Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Pagination count={menuCount} />
    </div>
  );
}
