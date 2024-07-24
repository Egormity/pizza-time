import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

type ButtonProps = {
  children: ReactNode;
  type: 'red' | 'yellow' | 'red-transparent' | 'gray';
  to?: string | -1;
  customFunc?: () => void;
};

export default function Button({ children, type, to, customFunc }: ButtonProps) {
  const navigate = useNavigate();

  let className =
    'px-4 py-2 rounded-md duration-primary tracking-wider flex items-center justify-center gap-3 ';

  if (type === 'yellow')
    className =
      className +
      'bg-primary-yellow-dark hover:bg-zinc-100 hover:bg-opacity-70 text-zinc-900 hover:ring-1 ring-zinc-100';
  if (type === 'gray')
    className =
      className +
      'bg-zinc-100 bg-opacity-70 text-zinc-900 hover:bg-primary-yellow-dark hover:ring-1 ring-zinc-100';
  if (type === 'red')
    className = className + 'bg-primary-red hover:bg-transparent hover:ring-1 ring-zinc-100 ';
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
