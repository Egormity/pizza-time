import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

type ButtonProps = {
  children: ReactNode;
  type: 'red' | 'yellow' | 'red-transparent' | 'grey';
  to?: string;
  customFunc?: () => void;
};

export default function Button({ children, type, to, customFunc }: ButtonProps) {
  const navigate = useNavigate();

  let className = 'px-4 py-2 rounded-md duration-primary tracking-wider ';

  if (type === 'yellow')
    className =
      className +
      'bg-primary-yellow-dark hover:bg-slate-100 hover:bg-opacity-70 text-stone-900 hover:ring-1 ring-stone-100';
  if (type === 'grey')
    className =
      className +
      'bg-stone-100 bg-opacity-70 text-stone-900 hover:bg-primary-yellow-dark hover:ring-1 ring-stone-100';
  if (type === 'red')
    className = className + 'bg-primary-red hover:bg-transparent hover:ring-1 ring-stone-100 ';
  if (type === 'red-transparent')
    className = className + 'bg-transparent  outline outline-1 hover:bg-primary-red hover:outline-none';

  return (
    <button
      className={className}
      onClick={() => {
        if (to) navigate(to);
        if (customFunc) customFunc();
      }}
    >
      {children}
    </button>
  );
}
