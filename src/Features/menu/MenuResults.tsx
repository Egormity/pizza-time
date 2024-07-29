import { useSearchParams } from 'react-router-dom';

import { useMenuSection } from '../../hooks/useMenuSection';
import Spinner from '../../ui/Spinner';
import NoDataFound from '../../ui/NoDataFound';
import Pagination from '../../ui/Pagination';
import MenuItem from './MenuItem';

export default function MenuResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { menuItems, isLoadingMenu, menuCount } = useMenuSection(searchParams.get('menu') || 'pizzas');

  if (isLoadingMenu) return <Spinner />;
  if (!menuItems) return <NoDataFound dataName={searchParams.get('menu') || 'menu'} />;

  return (
    <div>
      <div className='menu-grid mb-8'>
        <MenuItem menuItems={menuItems} />
      </div>

      <Pagination count={menuCount} />
    </div>
  );
}
