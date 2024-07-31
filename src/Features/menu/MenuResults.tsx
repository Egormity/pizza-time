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

  if (!menuItems || !menuCount) {
    return <NoDataFound dataName={searchParams.get('search') || searchParams.get('menu') || 'pizzas'} />;
  }

  function determineGridClos() {
    if (menuCount === 1) return 'grid-cols-3';
    return 'grid-cols-[repeat(auto-fit,minmax(17.5rem,1fr))]';
  }

  return (
    <div>
      <div className={`${determineGridClos()} mb-8 grid gap-8 max400px:grid-cols-1 min1800px:grid-cols-3`}>
        {menuItems.map(menuItem => (
          <MenuItem menuItem={menuItem} key={menuItem.name} />
        ))}
      </div>

      {menuCount && <Pagination count={menuCount} />}
    </div>
  );
}
