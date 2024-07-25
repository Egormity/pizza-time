import { ReactNode } from 'react';

type DivMaxWidthProps = {
  children: ReactNode;
  className?: string;
};

export default function DivMaxWidth({ children, className }: DivMaxWidthProps) {
  return <div className={`${className} max-width-page padding-page-x mx-auto`}>{children}</div>;
}
