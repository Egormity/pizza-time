import { useNavigate } from 'react-router-dom';
import { useAnyTable } from '../../hooks/useAnyTable';
import PerspectiveHoverContainer from '../../ui/PerspectiveHoverContainer';
import Spinner from '../../ui/Spinner';
import { maxWidthPage } from '../../utils/classNames';
import { formatCurrency } from '../../utils/formatCurrency';
import { MenuCategoryItem } from '../../utils/types';
import { scrollToTop } from '../../utils/scrollToTop';

export default function MenuPricing({ padding }: { padding?: string }) {
  const { data, isLoading } = useAnyTable({ select: 'pizzas', from: 1, to: 6, orderColumn: 'id' });
  const navigate = useNavigate();

  return (
    <section className={`${maxWidthPage} ${padding} grid gap-8`}>
      <div className='grid gap-2 text-center'>
        <h1 className='text-4xl'>MENU PRICING</h1>
        <p className='max-width-text text-zinc-400'>
          Every bite of every meal is different and special. You will never get bored and you will always be
          able to find something new and interesting for you. Discover every mouthwatering option we have to
          offer
        </p>
      </div>

      {isLoading ? (
        <Spinner />
      ) : (
        <div className='grid grid-cols-[repeat(auto-fit,minmax(30rem,1fr))] gap-x-4 gap-y-6 max600px:grid-cols-1 min1200px:grid-cols-2'>
          {data.map((pizza: MenuCategoryItem) => (
            <PerspectiveHoverContainer key={pizza.name}>
              <div
                className='grid cursor-pointer grid-cols-[6rem_1fr] gap-4 px-3 py-2'
                onClick={() => {
                  navigate('/MenuPage');
                  scrollToTop();
                }}
              >
                <div className='flex h-[6rem] w-[6rem] items-center justify-center overflow-hidden rounded-full'>
                  <img src={pizza.image} alt={pizza.name} className='h-full w-full object-cover' />
                </div>

                <div>
                  <div className='flex justify-between border-b border-primary-yellow-light'>
                    <h1 className='text-lg'>{pizza.name}</h1>
                    {!pizza.discount ? (
                      <h3 className='text-primary-yellow-light'>{formatCurrency(pizza.price)}</h3>
                    ) : (
                      <div className='flex gap-2'>
                        <h3 className='text-primary-red line-through decoration-2'>
                          {formatCurrency(pizza.price)}
                        </h3>
                        <h3 className='text-primary-yellow-light'>
                          {formatCurrency(pizza.price - pizza.discount)}
                        </h3>
                      </div>
                    )}
                  </div>
                  <p className='text-sm text-zinc-400'>{pizza.description}</p>
                </div>
              </div>
            </PerspectiveHoverContainer>
          ))}
        </div>
      )}
    </section>
  );
}
