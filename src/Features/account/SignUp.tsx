import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { AccountLogInOptions, SignUpUser, UserType } from '../../utils/types';
import Button from '../../ui/Button';
import { getNewUserIndex } from '../../utils/getNewUserIndex';
import { useScreenSize } from '../../hooks/useScreenSize';
import InputUseForm from '../../ui/InputUseForm';

type SignUpProps = {
  setActiveMenu: (value: AccountLogInOptions) => void;
};

export default function SignUp({ setActiveMenu }: SignUpProps) {
  const { register, formState, getValues, handleSubmit, reset } = useForm<SignUpUser>();
  const { errors } = formState;
  const { screenHeight } = useScreenSize();

  const onSubmit: SubmitHandler<SignUpUser> = data => {
    for (let i = 0; i < getNewUserIndex(); i++) {
      const localData = localStorage.getItem(`user-${i}`);
      if (!localData) break;

      const user: UserType = JSON.parse(localData);
      if (data.email === user.email) {
        localStorage.removeItem(`user-${i}`);
      }
    }

    delete data.passwordConfirm;
    localStorage.setItem(
      `user-${getNewUserIndex()}`,
      JSON.stringify({ ...data, id: getNewUserIndex() + '' }),
    );

    reset();
    toast.success('Account successfully created');
    setActiveMenu('logIn');
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${screenHeight < 600 ? 'grid-cols-2' : ''} ${screenHeight < 700 ? 'gap-y-4' : 'gap-y-8'} grid gap-x-2`}
    >
      <InputUseForm
        inputName='fullName'
        inputType='text'
        placeHolder='Your Name'
        errors={errors}
        registerFunc={register}
        registerOptions={{ required: 'This field is required' }}
      />

      <InputUseForm
        inputName='email'
        inputType='text'
        placeHolder='Your Email'
        errors={errors}
        registerFunc={register}
        registerOptions={{
          required: 'This field is required',
          pattern: { value: /\S+@\S+\.\S+/, message: 'Please provide a valid email address' },
        }}
      />

      <InputUseForm
        inputName='password'
        inputType='password'
        placeHolder='Password'
        errors={errors}
        registerFunc={register}
        registerOptions={{
          required: 'This field is required',
          minLength: { value: 8, message: 'Password should be at least 8 characters' },
        }}
      />

      <InputUseForm
        inputName='passwordConfirm'
        inputType='password'
        placeHolder='Confirm password'
        errors={errors}
        registerFunc={register}
        registerOptions={{
          required: 'This field is required',
          minLength: { value: 8, message: 'Password should be at least 8 characters' },
          validate: (value: string) => value === getValues().password || 'Passwords need to match',
        }}
      />

      <div className='col-span-full grid grid-cols-2 gap-4 max400px:grid-cols-1'>
        <div className='col-span-full grid'>
          <Button variation='red-transparent' customFunc={() => setActiveMenu('logIn')}>
            Already has an account?
          </Button>
        </div>

        <Button htmlType='reset' variation='gray' customFunc={reset}>
          Cancel
        </Button>

        <Button htmlType='submit' variation='yellow'>
          Sign Up
        </Button>
      </div>
    </form>
  );
}
