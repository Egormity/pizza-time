import { inputStyle } from '../utils/classNames';

type InputUseFormProps = {
  inputName: string;
  placeHolder: string;
  errors: object;
  registerOptions: object;
  registerFunc: unknown;
  inputType: string;
  label?: string;
  defaultValue?: string;
};

export default function InputUseForm({
  inputName,
  placeHolder,
  errors,
  registerOptions,
  registerFunc,
  inputType,
  label,
  defaultValue,
}: InputUseFormProps) {
  const message = errors[inputName]?.message;

  return (
    <div className='flex items-center gap-8'>
      {label && (
        <label htmlFor={inputName} className='w-28'>
          {label}
        </label>
      )}

      <div className='relative w-full'>
        {message && <span className='form-required'>{message}</span>}
        <input
          defaultValue={defaultValue}
          className={`${inputStyle} w-full`}
          placeholder={placeHolder}
          type={inputType}
          id={inputName}
          {...registerFunc(inputName, registerOptions)}
        />
      </div>
    </div>
  );
}
