import Overlay from './Overlay';

export default function LongPizza() {
  return (
    <div className='relative'>
      <Overlay bgOpacity='bg-opacity-20' />
      <img src='about/section-3.jpeg' alt='Long pizza' className='h-60 w-screen object-cover' />
    </div>
  );
}
