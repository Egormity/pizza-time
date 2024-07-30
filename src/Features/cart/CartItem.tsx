import { TiMinus, TiPlus } from 'react-icons/ti';

import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/formatCurrency';
import { useCartContext } from '../../contexts/CartContext';
import { CartItem } from '../../utils/types';
import PerspectiveHoverContainer from '../../ui/PerspectiveHoverContainer';

export default function CartItem({ item }: { item: CartItem }) {
  const { handleRemoveItemFromCart, handleAddExistingItemToCart } = useCartContext();

  return (
    <PerspectiveHoverContainer
      perspectiveSize='2000px'
      perspectiveScale='1.05'
      rotationRation={0.5}
      key={item.name}
    >
      <div className='grid max-w-[45rem] grid-cols-2 overflow-hidden rounded-xl border border-zinc-700 bg-zinc-800 bg-opacity-5 max500px:grid-cols-1'>
        <div className='flex items-center justify-center'>
          <img src={item.image} alt={item.name} className='min-h-full min-w-full object-cover' />
        </div>

        <div className='flex flex-col gap-4 px-8 py-4'>
          <h1 className='text-2xl'>{item.name}</h1>
          <p className='text-sm'>{item.description}</p>

          {item.pizzaSize && (
            <div className='flex items-center gap-4'>
              <h3 className='font-semibold'>Size:</h3>
              <p className='text-lg text-primary-yellow-light'>{item.pizzaSize}</p>
            </div>
          )}

          <div className='mt-auto flex items-center justify-between gap-4'>
            {item.totalDiscount !== 0 ? (
              <div className='relative text-xl'>
                <h3 className='absolute -left-4 -top-6 text-primary-red line-through decoration-2 opacity-50'>
                  {formatCurrency(item.totalPrice)}
                </h3>
                <h3 className='text-primary-yellow-light'>
                  {formatCurrency(item.totalPrice - item.totalDiscount)}
                </h3>
              </div>
            ) : (
              <h3 className='text-xl text-primary-yellow-light'>{formatCurrency(item.totalPrice)}</h3>
            )}

            <div className='ml-auto grid grid-cols-3 items-center justify-items-center text-xl'>
              <Button variation='gray' customFunc={() => handleRemoveItemFromCart(item)}>
                <TiMinus />
              </Button>

              <h3>{item.quantity}</h3>

              <Button variation='yellow' customFunc={() => handleAddExistingItemToCart(item)}>
                <TiPlus />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PerspectiveHoverContainer>
  );
}
