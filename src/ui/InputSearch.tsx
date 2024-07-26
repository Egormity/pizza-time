import { RxMagnifyingGlass } from 'react-icons/rx';
import { borderDarkWithRing } from '../utils/classNames';

export default function InputSearch({ width }: { width?: string }) {
  return (
    <div className={`${width} relative`}>
      <input
        id='search'
        placeholder='Search'
        className={`${borderDarkWithRing} ${width} rounded-2xl px-5 py-4`}
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
