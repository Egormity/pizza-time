import { useSearchParams } from 'react-router-dom';

import { useMenuSection } from '../../hooks/useMenuSection';
import Spinner from '../../ui/Spinner';
import { MenuCategoryItem, pizzaSizesTypes } from '../../utils/types';
import { pizzaSizes } from '../../data/dataToMap';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/formatCurrency';
import NoDataFound from '../../ui/NoDataFound';

export default function MenuResults() {
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    tableData: pizzas,
    isLoadingTable: isLoadingPizzas,
    tableCount: pizzasCount,
  } = useMenuSection('pizzas');

  const {
    tableData: pasta,
    isLoadingTable: isLoadingPasta,
    tableCount: pastaCount,
  } = useMenuSection('pasta');

  const {
    tableData: sushi,
    isLoadingTable: isLoadingSushi,
    tableCount: sushiCount,
  } = useMenuSection('sushi');

  const {
    tableData: drinks,
    isLoadingTable: isLoadingDrinks,
    tableCount: drinksCount,
  } = useMenuSection('drinks');

  const isDisplayAllMenu =
    !searchParams.get('menu') || searchParams.get('menu') === 'menu' || searchParams.get('menu') === 'sale';

  const { tableData, isLoadingTable, tableCount } = useMenuSection(
    isDisplayAllMenu ? 'none' : searchParams.get('menu'),
  );

  const isLoading = !isDisplayAllMenu
    ? isLoadingTable
    : isLoadingPizzas || isLoadingPasta || isLoadingSushi || isLoadingDrinks;

  const data: MenuCategoryItem[] = !isDisplayAllMenu ? tableData : [pizzas, pasta, sushi, drinks]?.flat();

  if (isLoading) return <Spinner />;

  if (!data) return <NoDataFound dataName={searchParams.get('menu') || 'menu'} />;

  return (
    <div className='grid gap-8'>
      {data.map(item => (
        <div key={item.name} className='overflow-hidden rounded-xl border border-zinc-700'>
          <div>
            <img src={item.image} alt={item.name + 'image'} />
          </div>

          <div className='grid gap-6 p-4 pt-6'>
            <h1 className='text-2xl font-medium'>{item.name}</h1>
            <p className='text-sm font-medium'>{item.description}</p>

            {item.type && (
              <div className='flex justify-between'>
                {pizzaSizes.map(size => (
                  <div
                    key={size}
                    className='flex items-center justify-center border border-zinc-700 px-3 py-1 text-xs font-medium uppercase text-zinc-300'
                  >
                    <p>{size}</p>
                  </div>
                ))}
              </div>
            )}

            <div className='flex items-center gap-4'>
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
  );
}
