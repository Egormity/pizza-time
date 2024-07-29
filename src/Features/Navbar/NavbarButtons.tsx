import { IoCartOutline } from 'react-icons/io5';
import { RiUserUnfollowLine } from 'react-icons/ri';
import { RiUserFollowLine } from 'react-icons/ri';

import Button from '../../ui/Button';
import { useUserContext } from '../../contexts/UserContext';
import { scrollToTop } from '../../utils/scrollToTop';
import { useCartContext } from '../../contexts/CartContext';

export default function NavButtons({ customFunc }: { customFunc: () => void }) {
  const { setIsLoginPopupOpenOpposite, user } = useUserContext();
  const { cartQuantity } = useCartContext();

  return (
    <>
      <li>
        <Button
          variation='red-transparent'
          to={user ? '/UserSettingsPage' : null}
          customFunc={() => {
            customFunc();
            !user && setIsLoginPopupOpenOpposite();
          }}
        >
          Account <span className='text-2xl'>{user ? <RiUserFollowLine /> : <RiUserUnfollowLine />}</span>
        </Button>
      </li>

      <li>
        <Button
          variation='red'
          to='/CartPage'
          customFunc={() => {
            customFunc();
            scrollToTop();
          }}
        >
          <IoCartOutline />
          <span>Cart</span>
          <span>({cartQuantity})</span>
        </Button>
      </li>
    </>
  );
}
