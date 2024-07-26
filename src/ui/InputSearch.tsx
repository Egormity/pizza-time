import { RxMagnifyingGlass } from 'react-icons/rx';

export default function InputSearch() {
  return (
    <div className='relative'>
      <input
        id='search'
        placeholder='Search'
        className='rounded-2xl border border-zinc-600 bg-transparent px-5 py-4 outline-none ring-zinc-700 duration-primary hover:ring focus:ring focus:ring-zinc-400'
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
