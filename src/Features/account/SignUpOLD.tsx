import { useForm } from 'react-hook-form';

import { inputStyle } from '../../utils/classNames';
import { AccountLogInOptions, SignUpUser, UserType } from '../../utils/types';
import Button from '../../ui/Button';
import toast from 'react-hot-toast';
import { getNewUserIndex } from '../../utils/getNewUserIndex';
import { useState } from 'react';
import { useScreenSize } from '../../hooks/useScreenSize';
import InputUseForm from '../../ui/InputUseForm';

type SignUpProps = {
  setActiveMenu: (value: AccountLogInOptions) => void;
};

export default function SignUp({ setActiveMenu }: SignUpProps) {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const [deleteUser, setDeleteUser] = useState<{ lSDeleteUser?: string; deleteEmail?: string }>({});
  const { screenHeight } = useScreenSize();

  function onSubmit(data: SignUpUser) {
    for (let i = 0; i < getNewUserIndex(); i++) {
      const user: UserType = JSON.parse(localStorage.getItem(`user-${i}`));
      if (data.email === user.email) {
        toast.error('User with this email already exists');
        setDeleteUser({ deleteEmail: data.email, lSDeleteUser: `user-${i}` });
        return;
      }
    }

    delete data.passwordConfirm;
    localStorage.setItem(`user-${getNewUserIndex()}`, JSON.stringify(data));

    reset();
    toast.success('Account successfully created');
    setActiveMenu('logIn');
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${screenHeight < 600 ? 'grid-cols-2' : ''} ${screenHeight < 700 ? 'gap-y-4' : 'gap-y-8'} grid gap-x-2`}
    >
      <div className='relative'>
        {errors?.fullName?.message && <span className='form-required'>{errors.fullName.message}</span>}
        <input
          className={`${inputStyle} w-full`}
          placeholder='Name'
          type='text'
          id='fullName'
          {...register('fullName', { required: 'This field is required' })}
        />
      </div>

      <div className='relative'>
        {errors?.email?.message && <span className='form-required'>{errors.email.message}</span>}
        <input
          className={`${inputStyle} w-full`}
          placeholder='Email'
          type='email'
          id='email'
          {...register('email', {
            required: 'This field is required',
            pattern: { value: /\S+@\S+\.\S+/, message: 'Please provide a valid email address' },
          })}
        />
      </div>

      <InputUseForm
        inputName='fullName'
        inputType='text'
        placeHolder='Your Name'
        errors={errors}
        registerFunc={register}
        registerOptions={{ required: 'This field is required' }}
      />

      <div className='relative'>
        {errors?.password?.message && <span className='form-required'>{errors.password.message}</span>}
        <input
          className={`${inputStyle} w-full`}
          placeholder='Password'
          type='password'
          id='password'
          {...register('password', {
            required: 'This field is required',
            minLength: { value: 8, message: 'Password should be at least 8 characters' },
          })}
        />
      </div>

      <div className='relative'>
        {errors?.passwordConfirm?.message && (
          <span className='form-required'>{errors.passwordConfirm.message}</span>
        )}
        <input
          className={`${inputStyle} w-full`}
          placeholder='Confirm password'
          type='password'
          id='passwordConfirm'
          {...register('passwordConfirm', {
            required: 'This field is required',
            minLength: { value: 8, message: 'Password should be at least 8 characters' },
            validate: value => value === getValues().password || 'Passwords need to match',
          })}
        />
      </div>

      {deleteUser.deleteEmail && deleteUser.lSDeleteUser && (
        <div className={`${screenHeight < 600 ? 'gap-2' : 'gap-4'} col-span-full grid`}>
          <h3>Delete user {deleteUser.deleteEmail} (if you don't remember the password)</h3>
          <Button
            htmlType='button'
            variation='red'
            customFunc={() => {
              localStorage.removeItem(deleteUser.lSDeleteUser);
              setDeleteUser({});
              toast.success(`Account ${deleteUser.deleteEmail} successfully deleted`);
            }}
          >
            Delete user
          </Button>
        </div>
      )}

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
