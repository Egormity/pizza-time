import MenuFiltering from '../Features/menu/MenuFiltering';
import MenuResults from '../Features/menu/MenuResults';
import MenuSearch from '../Features/menu/MenuSearch';
import { maxWidthPage } from '../utils/classNames';

export default function MenuPage() {
  return (
    <div className={`${maxWidthPage} grid grid-cols-[max-content_5fr] gap-32 pb-20 pt-36`}>
      <aside className='space-y-6'>
        <MenuSearch />
        <MenuFiltering />
      </aside>

      <MenuResults />
    </div>
  );
}
