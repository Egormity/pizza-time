import { useScreenSize } from '../../hooks/useScreenSize';

export default function PizzaTimeSection({ padding }: { padding?: string }) {
  const { screenWidth } = useScreenSize();

  return (
    <section
      className={`max-width-page ${padding} grid gap-8 min1100px:grid-cols-[22.5vw_1fr_22.5vw] min1100px:px-0 min1400px:grid-cols-[1fr_37.5rem_1fr]`}
    >
      {screenWidth > 1100 && (
        <div className='flex max-h-[17.5rem] items-center justify-center opacity-75'>
          <img src='home/pizza-1.webp' alt='Pizza 1' className='max-h-[25rem] min1300px:-translate-y-4' />
        </div>
      )}

      <div className='flex flex-col justify-center gap-4 text-center'>
        <h1 className='text-3xl font-semibold'>
          WELCOME TO <span className='font-cursive font-light text-primary-yellow-light'>PIZZA TIME</span>{' '}
          RESTAURANT
        </h1>

        <p>
          Founded in 1982 we bring pizza slice by slice to the next level! Unique branding and being in the
          pizza industry is the formula to our success. We do understand what people want and convert desires
          to unique experiences of taste. Freshness, originality, and quality are only a small part of our
          priorities. Affortable costs, located almost anywhere you go, amazing online operational system to
          order food in one click. Easy to navigate pre-order options and amazing options for corporate
          parties! At Pizza Time we care about you because you are the one who makes us special!
        </p>
      </div>

      {screenWidth > 1100 && (
        <div className='flex max-h-[17.5rem] items-center justify-center opacity-75'>
          <img src='home/pizza-2.webp' alt='Pizza 2' className='max-h-[25rem] min1300px:-translate-y-4' />
        </div>
      )}
    </section>
  );
}
