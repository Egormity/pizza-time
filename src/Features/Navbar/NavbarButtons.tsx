import { IoCartOutline } from 'react-icons/io5';
import Button from '../../ui/Button';

export default function NavButtons() {
  return (
    <>
      <li>
        <Button type='red-transparent'>Login</Button>
      </li>

      <li>
        <Button type='red'>
          <IoCartOutline />
          <span>Cart</span>
          <span>(0)</span>
        </Button>
      </li>
    </>
  );
}
