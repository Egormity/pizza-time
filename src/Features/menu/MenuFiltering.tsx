import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { menuFilters } from '../../data/dataToMap';
import { useMenu } from '../../hooks/useMenu';
import Spinner from '../../ui/Spinner';

export default function MenuFiltering() {
  const [activeFilter, setActiveFilter] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  const { menu, isLoadingMenu, count } = useMenu(searchParams.get('menu'));

  function handleClick(i: number, value: string) {
    setActiveFilter(i);

    searchParams.set('menu', value);
    setSearchParams(searchParams);
  }

  if (isLoadingMenu) return <Spinner />;
  console.log(menu);

  return (
    <ul className='grid justify-items-center divide-y divide-primary-yellow-light border border-primary-yellow-light text-xl font-medium'>
      {menuFilters.map((filter, i) => (
        <li key={filter}>
          <button
            onClick={() => handleClick(i, filter)}
            className={` ${activeFilter === i ? 'text-primary-red' : ''} py-6 capitalize duration-primary`}
          >
            {filter}
          </button>
        </li>
      ))}
    </ul>
  );
}
