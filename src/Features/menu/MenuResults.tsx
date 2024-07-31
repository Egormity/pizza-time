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

  return (
    <div>
      <div className={`mb-8 grid grid-cols-1 gap-8 min600px:grid-cols-2 min1400px:grid-cols-3`}>
        {menuItems.map(menuItem => (
          <MenuItem menuItem={menuItem} key={menuItem.name} />
        ))}
      </div>

      {menuCount && <Pagination count={menuCount} />}
    </div>
  );
}
