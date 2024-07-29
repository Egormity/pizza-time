import Button from '../../ui/Button';
import { AccountLogInOptions } from '../../utils/types';

type StartingMessageProps = {
  setActiveMenu: (value: AccountLogInOptions) => void;
};

export default function StartingMessage({ setActiveMenu }: StartingMessageProps) {
  return (
    <div className='grid gap-8'>
      <h1 className='text-2xl font-semibold'>Log in your account or create a new one!</h1>

      <div className='grid grid-cols-2 gap-4 max400px:grid-cols-1'>
        <Button variation='yellow' customFunc={() => setActiveMenu('signUp')}>
          SIGN UP
        </Button>
        <Button variation='red-transparent' customFunc={() => setActiveMenu('logIn')}>
          LOG IN
        </Button>
      </div>
    </div>
  );
}
