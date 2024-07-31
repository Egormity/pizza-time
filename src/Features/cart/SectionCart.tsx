import toast from 'react-hot-toast';
import { useCartContext } from '../../contexts/CartContext';
import { useUserContext } from '../../contexts/UserContext';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/formatCurrency';
import { scrollToTop } from '../../utils/scrollToTop';
import CartItem from './CartItem';
import { resolveAfter } from '../../utils/resolveAfter';

export default function SectionCart() {
  const { cart, handleClearCart, cartTotalPrice, cartQuantity } = useCartContext();
  const { user, setIsLoginPopupOpenOpposite } = useUserContext();

  if (!user)
    return (
      <div className={`max-width-page grid justify-items-center gap-10 text-center text-lg`}>
        <h1 className='text-5xl font-black'>Shopping cart</h1>
        <h1 className='text-3xl font-bold text-primary-yellow-light'>
          Please, log in or create an account to continue
        </h1>
        <Button
          variation='red'
          to={user ? '/UserSettingsPage' : null}
          customFunc={setIsLoginPopupOpenOpposite}
        >
          Let's go
        </Button>
      </div>
    );

  return (
    <div className={`max-width-page grid justify-items-center gap-10`}>
      <h1 className='text-center text-5xl font-black'>Shopping cart</h1>

      {cart.content.length === 0 ? (
        <div className='grid justify-items-center gap-8'>
          <h2 className='text-3xl font-semibold text-primary-yellow-light'>Your cart is empty..</h2>
          <Button to='/MenuPage' variation='red'>
            Explore our delicious food
          </Button>
        </div>
      ) : (
        <div className='grid gap-8'>
          <div className='borde grid gap-8'>
            {cart.content.map(item => (
              <CartItem item={item} key={item.name} />
            ))}
            <Button
              variation='gray'
              customFunc={() => {
                handleClearCart();
                scrollToTop();
              }}
            >
              Clear the cart
            </Button>
          </div>

          <div className='flex justify-center gap-6'>
            <div className='grid justify-items-center gap-2 text-xl'>
              <h3 className='font-extralight text-zinc-300'>Quantity:</h3>
              <h2 className='text-primary-yellow-light'>{cartQuantity}</h2>
            </div>

            <div className='grid justify-items-center gap-2 text-xl'>
              <h3 className='font-extralight text-zinc-300'>Total Price:</h3>
              <h2 className='text-primary-yellow-light'>{formatCurrency(cartTotalPrice)}</h2>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-4 max500px:grid-cols-1'>
            <Button
              variation='red'
              customFunc={() =>
                toast.promise(resolveAfter('asd', 3000, true), {
                  loading: 'Loading..',
                  success: 'No success',
                  error: 'This feature will be implemented one day..',
                })
              }
            >
              Checkout
            </Button>
            <Button variation='red-transparent' to={'/MenuPage'}>
              Back to menu
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
