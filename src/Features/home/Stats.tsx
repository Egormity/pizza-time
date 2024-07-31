import { PiPizzaLight } from 'react-icons/pi';

import { maxWidthPage } from '../../utils/classNames';
import Overlay from '../../ui/Overlay';

export default function Stats({ margin }: { margin?: string }) {
  return (
    <section className={`${margin} relative bg-cover bg-center [background-image:url('home/stats.jpeg')]`}>
      <Overlay bgColor='bg-zinc-400' bgOpacity='bg-opacity-25' backdropBlur='backdrop-blur-sm' />

      <div
        className={`max-width-page relative z-20 grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] gap-x-10 gap-y-8 py-8`}
      >
        <div className='grid justify-items-center gap-8 text-center'>
          <span className='border-2 border-primary-yellow-light p-2 text-6xl'>
            <PiPizzaLight />
          </span>
          <h1 className='text-3xl font-black text-primary-yellow-light'>50</h1>
          <h2 className='text-2xl font-medium'>Pizza Branches</h2>
        </div>

        <div className='grid justify-items-center gap-8 text-center'>
          <span className='border-2 border-primary-yellow-light p-2 text-6xl'>
            <PiPizzaLight />
          </span>
          <h1 className='text-3xl font-black text-primary-yellow-light'>200</h1>
          <h2 className='text-2xl font-medium'>Number of Awards</h2>
        </div>

        <div className='grid justify-items-center gap-8 text-center'>
          <span className='border-2 border-primary-yellow-light p-2 text-6xl'>
            <PiPizzaLight />
          </span>
          <h1 className='text-3xl font-black text-primary-yellow-light'>10485</h1>
          <h2 className='text-2xl font-medium'>Happy Customers</h2>
        </div>

        <div className='grid justify-items-center gap-8 text-center'>
          <span className='border-2 border-primary-yellow-light p-2 text-6xl'>
            <PiPizzaLight />
          </span>
          <h1 className='text-3xl font-black text-primary-yellow-light'>400</h1>
          <h2 className='text-2xl font-medium'>Staff</h2>
        </div>
      </div>
    </section>
  );
}
