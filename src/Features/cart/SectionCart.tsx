import { TiMinus, TiPlus } from 'react-icons/ti';
import { useCartContext } from '../../contexts/CartContext';
import Button from '../../ui/Button';
import { maxWidthPage } from '../../utils/classNames';
import { formatCurrency } from '../../utils/formatCurrency';

export default function SectionCart() {
  const { cart, handleRemoveItemFromCart, handleAddExistingItemToCart } = useCartContext();

  return (
    <div className={`${maxWidthPage} grid justify-items-center`}>
      <h1 className='text-5xl font-black'>Shopping cart</h1>

      <div className='borde mt-10 grid gap-8'>
        {cart.content.map(item => (
          <div
            key={item.name}
            className='grid max-w-[40rem] grid-cols-[10fr_11fr] overflow-hidden rounded-xl border border-zinc-700 bg-zinc-800 bg-opacity-5'
          >
            <div>
              <img src={item.image} alt={item.name} />
            </div>

            <div className='flex flex-col gap-2 px-8 py-4'>
              <h1 className='text-2xl'>{item.name}</h1>
              <p className='text-sm'>{item.description}</p>

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
        ))}
        <h1 className=''>Remove all</h1>
      </div>

      <div className='my-10 border'>stats</div>

      <div className='grid grid-cols-2 gap-4'>
        <Button variation='red'>Checkout</Button>
        <Button variation='red-transparent' to={'/MenuPage'}>
          Back to menu
        </Button>
      </div>
    </div>
  );
}
