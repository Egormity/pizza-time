import { useSearchParams } from 'react-router-dom';
import { menuSorting } from '../../data/dataToMap';
import { borderDarkWithRing } from '../../utils/classNames';
import { useEffect, useState } from 'react';

export default function MenuSorting() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeSorting, setActiveSorting] = useState(searchParams.get('sortBy') || menuSorting[0]);

  const activeMenu = searchParams.get('menu');

  useEffect(() => {
    setActiveSorting(menuSorting[0]);

    searchParams.set('sortBy', menuSorting[0]);
    setSearchParams(searchParams);
  }, [activeMenu]);

  function handleClick(param: string) {
    searchParams.set('page', '1');
    setSearchParams(searchParams);

    setActiveSorting(param);

    searchParams.set('sortBy', param);
    setSearchParams(searchParams);
  }

  return (
    <div className='mb-6 flex items-center gap-6 border-b border-zinc-600 px-4 pb-6 pt-2 max1000px:pt-6'>
      <h3 className='mr-auto whitespace-nowrap text-xl font-bold'>Sort by:</h3>

      <div className='grid grid-cols-1 gap-4 min400px:grid-cols-2 min600px:grid-cols-4'>
        {menuSorting.map(item => (
          <button
            key={item}
            onClick={() => handleClick(item)}
            className={`${borderDarkWithRing} ${activeSorting === item && 'bg-zinc-100 outline-primary-yellow-dark'} bg-opacity-5 px-3 py-2`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
