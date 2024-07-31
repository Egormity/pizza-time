import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import toast from 'react-hot-toast';
import InputUseForm from '../../ui/InputUseForm';

type SubmitEvent = {
  fullName: string;
  email: string;
  message: string;
};

export default function ContactsForm() {
  const { register, handleSubmit, formState } = useForm<SubmitEvent>();
  const { errors } = formState;

  const onSubmit: SubmitHandler<SubmitEvent> = data => {
    console.log(data);
    toast.success(`Your message successfylly sent to no one
      and we are not going to answer it!`);
  };

  return (
    <form className='grid gap-y-10' onSubmit={handleSubmit(onSubmit)}>
      <div className='relative'>
        <InputUseForm
          inputName='username'
          inputType='text'
          placeHolder='Full name'
          errors={errors}
          registerFunc={register}
          registerOptions={{ required: 'This field is required' }}
        />
      </div>

      <div className='relative'>
        <InputUseForm
          inputName='email'
          inputType='email'
          placeHolder='Your email'
          errors={errors}
          registerFunc={register}
          registerOptions={{
            required: 'This field is required',
            pattern: { value: /\S+@\S+\.\S+/, message: 'Please enter a valid email address' },
          }}
        />
      </div>

      <div className='relative'>
        <InputUseForm
          type='textarea'
          inputName='message'
          inputType='message'
          placeHolder='Your message'
          errors={errors}
          registerFunc={register}
          registerOptions={{
            required: 'This field is required',
            minLength: {
              value: 10,
              message: 'Message should be at least 10 chars',
            },
          }}
        />
      </div>

      <div className='mb-10 mt-4'>
        <Button variation='red'>Send message</Button>
      </div>
    </form>
  );
}
