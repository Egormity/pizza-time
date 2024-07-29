import { useForm } from 'react-hook-form';
import { inputStyle } from '../../utils/classNames';
import Button from '../../ui/Button';
import toast from 'react-hot-toast';

type SubmitEvent = {
  fullName: string;
  email: string;
  message: string;
};

export default function ContactsForm() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  function onSubmit(e: SubmitEvent) {
    console.log(e);
    toast.success(`Your message successfylly sent to no one
      and we are not going to answer it!`);
  }

  return (
    <form className='grid gap-y-10' onSubmit={handleSubmit(onSubmit)}>
      <div className='relative'>
        <input
          autoComplete='username'
          placeholder='Full Name'
          className={`${inputStyle} w-full`}
          {...register('fullName', {
            required: 'This field is required',
          })}
        />
        {errors?.fullName?.message && <span className='form-required'>{errors.fullName.message}</span>}
      </div>

      <div className='relative'>
        <input
          autoComplete='email'
          placeholder='Email'
          className={`${inputStyle} w-full`}
          {...register('email', {
            required: 'This field is required',
            pattern: { value: /\S+@\S+\.\S+/, message: 'Please enter a valid email address' },
          })}
        />

        {errors?.email?.message && <span className='form-required'>{errors.email.message}</span>}
      </div>

      <div className='relative'>
        <textarea
          placeholder='Your message'
          className={`${inputStyle} w-full`}
          {...register('message', {
            required: 'This field is required',
            minLength: {
              value: 10,
              message: 'Message should be at least 10 chars',
            },
          })}
        />

        {errors?.message?.message && <span className='form-required'>{errors.message.message}</span>}
      </div>

      <div className='mb-10 mt-4'>
        <Button variation='red'>Send message</Button>
      </div>
    </form>
  );
}
