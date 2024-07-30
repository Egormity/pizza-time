import { useCartContext } from '../contexts/CartContext';
import { pizzaSizes } from '../data/dataToMap';
import { CartItem, pizzaSizesTypes } from '../utils/types';

type PizzaSizesProps = {
  pizzaSize: pizzaSizesTypes | null;
  setPizzaSize: (value: pizzaSizesTypes) => void;
  itemInCart: CartItem;
};

export default function PizzaSizes({ pizzaSize, setPizzaSize, itemInCart }: PizzaSizesProps) {
  const { handleChangePizzaSize } = useCartContext();

  return (
    <div className='flex justify-between'>
      {pizzaSizes.map(size => (
        <button
          onClick={() => {
            setPizzaSize(size);
            itemInCart && handleChangePizzaSize(itemInCart, size);
          }}
          key={size}
          className={`${pizzaSize === size ? `ring ${!itemInCart ? 'ring-zinc-300' : 'ring-primary-yellow-light'}` : ''} border border-zinc-700 px-2 py-1 text-xs font-medium uppercase text-zinc-300 duration-primary hover:ring hover:ring-zinc-700`}
        >
          {size}
        </button>
      ))}
    </div>
  );
}
