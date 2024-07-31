import { maxWidthPageMedium } from '../../utils/classNames';

export default function MainInfo({ padding }: { padding?: string }) {
  return (
    <section className={`max-width-medium ${padding} grid grid-cols-[4fr_3fr] gap-10 max500px:grid-cols-1`}>
      <div className='grid gap-6'>
        <div>
          <h2 className='text-2xl'>8 (800) 555 35-35</h2>
          <h3 className='text-lg font-light text-zinc-400'>Contact us if you have any questions</h3>
        </div>

        <div>
          <h2 className='text-2xl'>506 Roy Alley 80202</h2>
          <h3 className='text-lg font-light text-zinc-400'>Colorado, Denver</h3>
        </div>

        <div>
          <h2 className='text-2xl'>Open Monday-Friday</h2>
          <h3 className='text-lg font-light text-zinc-400'>8:00am - 9:00pm</h3>
        </div>
      </div>

      <div className='flex h-full w-full items-center justify-center opacity-90 max500px:row-start-1'>
        <img className='max-h-[13.5rem]' src='/home/pizza-slice.webp' alt='Pizza slice image' />
      </div>
    </section>
  );
}
