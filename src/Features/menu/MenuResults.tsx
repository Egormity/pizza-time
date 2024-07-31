import { useSearchParams } from 'react-router-dom';

import { useMenuSection } from '../../hooks/useMenuSection';
import Spinner from '../../ui/Spinner';
import NoDataFound from '../../ui/NoDataFound';
import Pagination from '../../ui/Pagination';
import MenuItem from './MenuItem';

export default function MenuResults() {
  const [searchParams] = useSearchParams();
  const { menuItems, isLoadingMenu, menuCount } = useMenuSection(searchParams.get('menu') || 'pizzas');

  if (isLoadingMenu) return <Spinner />;
  if (!menuItems) return <NoDataFound dataName={searchParams.get('menu') || 'menu'} />;

  return (
    <div>
      <div className='min1900px:grid-col-3 mb-8 grid grid-cols-[repeat(auto-fit,minmax(17.5rem,1fr))] gap-8 max400px:grid-cols-1'>
        {menuItems.map(menuItem => (
          <MenuItem menuItem={menuItem} key={menuItem.name} />
        ))}
      </div>

      {menuCount && <Pagination count={menuCount} />}
    </div>
  );
}
