import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { useUserContext } from '../../contexts/UserContext';
import InputUseForm from '../../ui/InputUseForm';
import Button from '../../ui/Button';
import { UserType } from '../../utils/types';
import { getNewUserIndex } from '../../utils/getNewUserIndex';

export type NewUserType = {
  settingsName: string;
  settingsEmail: string;
  settingsPassword: string;
  settingsPasswordConfirm: string;
};

export default function UserSettingsSection() {
  const { user, setUser } = useUserContext();
  const { register, formState, getValues, handleSubmit, reset } = useForm<NewUserType>();
  const { errors } = formState;

  const onSubmit: SubmitHandler<NewUserType> = data => {
    const newUser: UserType = {
      id: getNewUserIndex() + '',
      fullName: data.settingsName,
      email: data.settingsEmail,
      password: data.settingsPassword,
    };

    for (let i = 0; i < getNewUserIndex(); i++) {
      const localData = localStorage.getItem(`user-${i}`);
      if (!localData) break;
      const user: UserType = JSON.parse(localData);

      if (newUser.email === user?.email) {
        localStorage.setItem(`user-${i}`, JSON.stringify(newUser));
      }
    }

    localStorage.setItem('active-user', JSON.stringify(newUser));

    toast.success('Settings successfully changed');
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`max-width-page padding-page-t padding-page-b grid max-w-[40rem] gap-8`}
    >
      <InputUseForm
        label='Name:'
        defaultValue={user?.fullName}
        inputName='settingsName'
        inputType='name'
        placeHolder='Current Name'
        errors={errors}
        registerFunc={register}
        registerOptions={{
          required: 'This field is required',
        }}
      />

      <InputUseForm
        label='Email:'
        defaultValue={user?.email}
        inputName='settingsEmail'
        inputType='email'
        placeHolder='Current Email'
        errors={errors}
        registerFunc={register}
        registerOptions={{
          required: 'This field is required',
          pattern: { value: /\S+@\S+\.\S+/, message: 'Please provide a valid email address' },
        }}
      />

      <InputUseForm
        label='Password:'
        defaultValue={user?.password}
        inputName='settingsPassword'
        inputType='password'
        placeHolder='Current Password'
        errors={errors}
        registerFunc={register}
        registerOptions={{
          required: 'This field is required',
          minLength: { value: 8, message: 'Password should be at least 8 characters' },
        }}
      />

      <InputUseForm
        label='Confirm Password:'
        defaultValue={user?.password}
        inputName='settingsPasswordConfirm'
        inputType='password'
        placeHolder='Confirm password:'
        errors={errors}
        registerFunc={register}
        registerOptions={{
          required: 'This field is required',
          minLength: { value: 8, message: 'Password should be at least 8 characters' },
          validate: (value: string) => value === getValues().settingsPassword || 'Passwords need to match',
        }}
      />

      <div className='col-span-full grid grid-cols-2 gap-4 max500px:grid-cols-1'>
        <Button htmlType='reset' variation='gray' customFunc={reset}>
          Reset
        </Button>

        <Button htmlType='submit' variation='yellow'>
          Save settings
        </Button>
      </div>

      <div className='col-span-full grid grid-cols-2 gap-4 max500px:grid-cols-1'>
        <Button
          htmlType='button'
          variation='red'
          to='/'
          customFunc={() => {
            setUser(null);
            localStorage.removeItem('active-user');
            toast.success('Logged out successfully');
          }}
        >
          Log out
        </Button>

        <Button
          htmlType='button'
          variation='red'
          to='/'
          customFunc={() => {
            setUser(null);
            localStorage.removeItem('active-user');
            localStorage.removeItem(`user-${user?.id}`);
            toast.success('Account successfully deleted');
          }}
        >
          Delete account
        </Button>
      </div>
    </form>
  );
}
