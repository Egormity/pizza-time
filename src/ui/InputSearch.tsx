import { RxMagnifyingGlass } from 'react-icons/rx';
import { useSearchParams } from 'react-router-dom';
import { KeyboardEvent } from 'react';

import { borderDarkWithRing } from '../utils/classNames';

export default function InputSearch({ width }: { width?: string }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleType(key: KeyboardEvent<HTMLInputElement>) {
    if (!key) return;

    const char = key.key;
    const search = searchParams.get('search') || '';

    if (search && char.toLocaleLowerCase() === 'backspace') {
      searchParams.set('search', search.slice(0, -1));
      setSearchParams(searchParams);
    }

    if (char.length === 1) {
      searchParams.set('search', search + char);
      setSearchParams(searchParams);
    }
  }

  return (
    <div className={`${width} relative`}>
      <input
        id='search'
        placeholder='Search'
        className={`${borderDarkWithRing} ${width} rounded-2xl px-5 py-4`}
        onKeyDown={key => handleType(key)}
      />

      <label
        htmlFor='search'
        className='absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-4xl text-zinc-200'
      >
        <RxMagnifyingGlass />
      </label>
    </div>
  );
}
