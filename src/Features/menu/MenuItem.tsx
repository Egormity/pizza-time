import { TiMinus } from 'react-icons/ti';
import { TiPlus } from 'react-icons/ti';

import { useCartContext } from '../../contexts/CartContext';
import { pizzaSizes } from '../../data/dataToMap';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/formatCurrency';
import { MenuCategoryItem, pizzaSizesTypes } from '../../utils/types';
import { useState } from 'react';
import PizzaSizes from '../../ui/PizzaSizes';
import { calculatePizzaSizePrice } from '../../utils/calculatePizzaSizePrice';
import { useUserContext } from '../../contexts/UserContext';
import toast from 'react-hot-toast';

type MenuItemProps = {
  menuItem: MenuCategoryItem;
};

export default function MenuItem({ menuItem }: MenuItemProps) {
  const { handleAddNewItemToCart, handleRemoveItemFromCart, handleAddExistingItemToCart, cart } =
    useCartContext();
  const { user } = useUserContext();

  const thisItemInCart = cart.content.filter(cartItem => cartItem.name === menuItem.name)?.[0];

  const [pizzaSize, setPizzaSize] = useState<pizzaSizesTypes | null>(
    menuItem.type === 'pizza' ? thisItemInCart?.pizzaSize || pizzaSizes[0] : null,
  );

  const pizzaSizePrice = !pizzaSize
    ? 0
    : calculatePizzaSizePrice(menuItem.price - menuItem.discount, pizzaSize);

  return (
    <div
      key={menuItem.name}
      className='grid overflow-hidden rounded-xl border border-zinc-700 bg-zinc-700 bg-opacity-5'
    >
      <div className='mb-auto'>
        <img src={menuItem.image} alt={menuItem.name + 'image'} />
      </div>

      <div className='grid gap-6 p-4 pt-6'>
        <h1 className='text-2xl font-medium'>{menuItem.name}</h1>
        {menuItem.description && <p className='text-sm font-medium'>{menuItem.description}</p>}

        {menuItem?.type === 'pizza' && (
          <PizzaSizes pizzaSize={pizzaSize} setPizzaSize={setPizzaSize} itemInCart={thisItemInCart} />
        )}

        <div className='flex items-center gap-3'>
          {menuItem.discount !== 0 ? (
            <>
              <h3 className='text-xl text-primary-red line-through decoration-2'>
                {formatCurrency(menuItem.price + pizzaSizePrice)}
              </h3>
              <h3 className='text-xl text-primary-yellow-light'>
                {formatCurrency(menuItem.price - menuItem.discount + pizzaSizePrice)}
              </h3>
            </>
          ) : (
            <h3 className='text-xl text-primary-yellow-light'>
              {formatCurrency(menuItem.price + pizzaSizePrice)}
            </h3>
          )}
          {!thisItemInCart ? (
            <div className='ml-auto'>
              <Button
                variation='red'
                customFunc={() =>
                  user
                    ? handleAddNewItemToCart(menuItem, pizzaSize)
                    : toast.error('You need to bo logged to proceed')
                }
              >
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
}
