import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { menuFilters } from '../../data/dataToMap';
import { MenuFiltersTypes } from '../../utils/types';

export default function MenuFiltering() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState(searchParams.get('menu'));

  function handleClick(value: MenuFiltersTypes) {
    searchParams.set('menu', value);
    setSearchParams(searchParams);

    searchParams.set('page', '1');
    setSearchParams(searchParams);

    setActiveFilter(searchParams.get('menu'));
  }

  return (
    <ul className='grid justify-items-center divide-primary-yellow-light border border-primary-yellow-light text-xl font-medium max1000px:grid-cols-4 max1000px:divide-x max1000px:py-4 min1000px:divide-y'>
      {menuFilters.map((filter, i) => (
        <li
          key={filter}
          className='flex items-center justify-center max1000px:w-full max1000px:py-2 min1000px:py-6'
        >
          <button
            disabled={false}
            onClick={() => handleClick(filter)}
            className={` ${!activeFilter ? i === 0 && 'text-primary-red' : activeFilter === filter && 'text-primary-red'} capitalize duration-primary`}
          >
            {filter}
          </button>
        </li>
      ))}
    </ul>
  );
}
