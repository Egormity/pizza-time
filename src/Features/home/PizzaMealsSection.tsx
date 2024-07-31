import { pizzaMeals } from '../../data/dataToMap';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/formatCurrency';

export default function PizzaMealsSection({ padding }: { padding?: string }) {
  return (
    <section className={`max-width-page ${padding} grid gap-8`}>
      <div className='grid gap-2 text-center'>
        <h1 className='text-4xl'>HOT PIZZA MEALS</h1>
        <p className='mx-auto max-w-[60rem]'>
          Pizza Time holds the market of the pizza industry and continuously offers more than pizza. Check out
          our hottest menu options with cheese, meat, chicken, and veggies!
        </p>
      </div>

      <div className='grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(22.5rem,1fr))] max600px:grid-cols-1 min1400px:grid-cols-3'>
        {pizzaMeals.map((pizza, i) => (
          <div key={pizza.heading} className='grid grid-cols-2 bg-zinc-900'>
            <div className='flex items-center justify-center'>
              <img src={pizza.imagePath} alt={`pizza meal ${i}`} className='h-full w-full object-cover' />
            </div>

            <div className='flex flex-col gap-2 px-3 py-2'>
              <h1>{pizza.heading}</h1>
              <p className='text-sm text-zinc-400'>{pizza.description}</p>
              <h3 className='mt-auto text-primary-yellow-light'>{formatCurrency(pizza.price)}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className='flex justify-center'>
        <Button variation='red' to='/MenuPage'>
          Explore more pizza
        </Button>
      </div>
    </section>
  );
}
