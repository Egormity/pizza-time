import Overlay from '../Overlay';

export default function LongOffice({ padding }: { padding?: string }) {
  return (
    <section className={`${padding} relative flex h-[20rem] items-center justify-center overflow-hidden`}>
      <Overlay bgOpacity='bg-opacity-15' />
      <img
        className='min-h-full min-w-full object-cover'
        src='global/long-office.webp'
        alt='Long office photo'
      />
    </section>
  );
}
