import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import { AccountLogInOptions, UserType } from '../../utils/types';
import { getNewUserIndex } from '../../utils/getNewUserIndex';
import toast from 'react-hot-toast';
import { useUserContext } from '../../contexts/UserContext';
import InputUseForm from '../../ui/InputUseForm';

type LogInProps = {
  setActiveMenu: (value: AccountLogInOptions) => void;
};

type onSubmitProps = {
  logInEmail: string;
  logInPassword: string;
};

export default function LogIn({ setActiveMenu }: LogInProps) {
  const { setUser, setIsLoginPopupOpen } = useUserContext();

  const { register, formState, handleSubmit, reset } = useForm<onSubmitProps>();
  const { errors } = formState;

  const onSubmit: SubmitHandler<onSubmitProps> = data => {
    let loginUser = null;

    for (let i = 0; i < getNewUserIndex(); i++) {
      const localData = localStorage.getItem(`user-${i}`);
      if (!localData) break;

      const user: UserType = JSON.parse(localData);
      if (!user) break;
      if (!user.fullName) continue;

      if (data.logInEmail === user.email && data.logInPassword === user.password) {
        loginUser = user;
        break;
      }
    }

    if (!loginUser) {
      toast.error('User with providen credentials not found');
      return;
    }

    setUser(loginUser);
    localStorage.setItem('active-user', JSON.stringify(loginUser));
    setIsLoginPopupOpen(false);
    toast.success('Successfully loged in');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='grid gap-8'>
      <InputUseForm
        inputName='logInEmail'
        inputType='email'
        placeHolder='Email'
        errors={errors}
        registerFunc={register}
        registerOptions={{
          required: 'This field is required',
          pattern: { value: /\S+@\S+\.\S+/, message: 'Please provide a valid email address' },
        }}
      />

      <InputUseForm
        inputName='logInPassword'
        inputType='password'
        placeHolder='Password'
        errors={errors}
        registerFunc={register}
        registerOptions={{
          required: 'This field is required',
          minLength: { value: 8, message: 'Password should be at least 8 characters' },
        }}
      />

      <div className='grid grid-cols-2 gap-4 max400px:grid-cols-1'>
        <div className='col-span-full grid'>
          <Button variation='red-transparent' htmlType='button' customFunc={() => setActiveMenu('signUp')}>
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
