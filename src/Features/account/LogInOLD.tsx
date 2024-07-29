import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import { inputStyle } from '../../utils/classNames';
import { AccountLogInOptions, UserType } from '../../utils/types';
import { getNewUserIndex } from '../../utils/getNewUserIndex';
import toast from 'react-hot-toast';
import { useUserContext } from '../../contexts/UserContext';

type LogInProps = {
  setActiveMenu: (value: AccountLogInOptions) => void;
};

type onSubmitProps = {
  logInEmail: string;
  logInPassword: string;
};

export default function LogIn({ setActiveMenu }: LogInProps) {
  const { setUser, setIsLoginPopupOpen } = useUserContext();

  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit(data: onSubmitProps) {
    let loginUser = null;

    for (let i = 0; i < getNewUserIndex(); i++) {
      const user: UserType = JSON.parse(localStorage.getItem(`user-${i}`));

      if (!user) break;
      if (!user.fullName) continue;

      if (data.logInEmail === user.email && data.logInPassword === user.password) {
        loginUser = user;
        break;
      }
    }

    if (!loginUser) {
      toast.error('User with provide credentials not found');
      return;
    }

    setUser(loginUser);
    localStorage.setItem('active-user', JSON.stringify(loginUser));
    setIsLoginPopupOpen(false);
    toast.success('Successfully loged in');
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='grid gap-8'>
      <div className='relative'>
        {errors?.logInEmail?.message && <span className='form-required'>{errors.logInEmail.message}</span>}
        <input
          className={`${inputStyle} w-full`}
          placeholder='Email'
          type='email'
          id='logInEmail'
          {...register('logInEmail', {
            required: 'This field is required',
            pattern: { value: /\S+@\S+\.\S+/, message: 'Please provide a valid email address' },
          })}
        />
      </div>

      <div className='relative'>
        {errors?.logInPassword?.message && (
          <span className='form-required'>{errors.logInPassword.message}</span>
        )}
        <input
          className={`${inputStyle} w-full`}
          placeholder='Password'
          type='password'
          id='logInPassword'
          {...register('logInPassword', {
            required: 'This field is required',
            minLength: { value: 8, message: 'Password should be at least 8 characters' },
          })}
        />
      </div>

      <div className='grid grid-cols-2 gap-4 max400px:grid-cols-1'>
        <div className='col-span-full grid'>
          <Button variation='red-transparent' customFunc={() => setActiveMenu('signUp')}>
            Doesn't have an account?
          </Button>
        </div>

        <Button htmlType='reset' variation='gray' customFunc={reset}>
          Cancel
        </Button>

        <Button htmlType='submit' variation='yellow'>
          Log In
        </Button>
      </div>
    </form>
  );
}
