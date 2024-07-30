import { maxWidthPage } from '../../utils/classNames';
import MenuFiltering from './MenuFiltering';
import MenuResults from './MenuResults';
import MenuSearch from './MenuSearch';
import MenuSorting from './MenuSorting';

export default function MenuSection() {
  return (
    <section
      className={`${maxWidthPage} grid grid-cols-[max-content_1fr] max1000px:grid-cols-1 max1000px:gap-0 min1000px:gap-12 min1400px:gap-24 min1800px:gap-32`}
    >
      <aside className='space-y-6'>
        <MenuSearch />
        <MenuFiltering />
      </aside>

      <section>
        <MenuSorting />
        <MenuResults />
      </section>
    </section>
  );
}
