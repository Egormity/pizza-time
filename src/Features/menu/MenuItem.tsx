import { TiMinus } from 'react-icons/ti';
import { TiPlus } from 'react-icons/ti';

import { useCartContext } from '../../contexts/CartContext';
import { pizzaSizes } from '../../data/dataToMap';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/formatCurrency';
import { MenuCategoryItem } from '../../utils/types';

type MenuItemProps = {
  menuItems: MenuCategoryItem[];
};

export default function MenuItem({ menuItems }: MenuItemProps) {
  const { handleAddNewItemToCart, handleRemoveItemFromCart, handleAddExistingItemToCart, cart } =
    useCartContext();

  return menuItems.map(item => {
    const thisItemInCart = cart.content.filter(cartItem => cartItem.name === item.name)?.[0];

    return (
      <div
        key={item.name}
        className='flex flex-col overflow-hidden rounded-xl border border-zinc-700 bg-zinc-700 bg-opacity-5'
      >
        <div className='mb-auto'>
          <img src={item.image} alt={item.name + 'image'} />
        </div>

        <div className='grid gap-6 p-4 pt-6'>
          <h1 className='text-2xl font-medium'>{item.name}</h1>
          {item.description && <p className='text-sm font-medium'>{item.description}</p>}

          {item.type && (
            <div className='flex justify-between'>
              {pizzaSizes.map(size => (
                <button
                  key={size}
                  className='border border-zinc-700 px-2 py-1 text-xs font-medium uppercase text-zinc-300 ring-zinc-400 duration-primary hover:bg-zinc-100 hover:bg-opacity-5 focus:ring'
                >
                  {size}
                </button>
              ))}
            </div>
          )}

          <div className='flex items-center gap-3'>
            {item.discount !== 0 ? (
              <>
                <h3 className='text-xl text-primary-red line-through decoration-2'>
                  {formatCurrency(item.price)}
                </h3>
                <h3 className='text-xl text-primary-yellow-light'>
                  {' '}
                  {formatCurrency(item.price - item.discount)}
                </h3>
              </>
            ) : (
              <h3 className='text-xl text-primary-yellow-light'> {formatCurrency(item.price)}</h3>
            )}
            {!thisItemInCart ? (
              <div className='ml-auto'>
                <Button variation='red' customFunc={() => handleAddNewItemToCart(item)}>
                  Add to cart
                </Button>
              </div>
            ) : (
              <div className='ml-auto grid grid-cols-3 items-center justify-items-center text-xl'>
                <Button variation='gray' customFunc={() => handleRemoveItemFromCart(thisItemInCart)}>
                  <TiMinus />
                </Button>

                <h3>{thisItemInCart.quantity}</h3>

                <Button variation='yellow' customFunc={() => handleAddExistingItemToCart(thisItemInCart)}>
                  <TiPlus />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  });
}
