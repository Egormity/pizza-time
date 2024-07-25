import { useForm } from 'react-hook-form';
import { inputStyle } from '../../utils/classNames';
import Button from '../../ui/Button';

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
  }

  return (
    <form className='grid gap-y-10' onSubmit={handleSubmit(onSubmit)}>
      <div className='relative'>
        <input
          placeholder='Full Name'
          className={`${inputStyle} w-full`}
          {...register('fullName', {
            required: 'This field is required',
          })}
        />
        {errors?.fullName?.message && (
          <span className='form-required absolute left-0 top-0 text-primary-red'>
            {errors.fullName.message}
          </span>
        )}
      </div>

      <div className='relative'>
        <input
          placeholder='Email'
          className={`${inputStyle} w-full`}
          {...register('email', {
            required: 'This field is required',
          })}
        />

        {errors?.email?.message && (
          <span className='form-required absolute left-0 top-0 text-primary-red'>{errors.email.message}</span>
        )}
      </div>

      <div className='relative'>
        <textarea
          placeholder='Your message'
          className={`${inputStyle} w-full`}
          {...register('message', {
            required: 'This field is required',
          })}
        />

        {errors?.message?.message && (
          <span className='form-required absolute left-0 top-0 text-primary-red'>
            {errors.message.message}
          </span>
        )}
      </div>

      <div className='mb-10 mt-4'>
        <Button type='red'>Send message</Button>
      </div>
    </form>
  );
}
