import { ReactNode } from 'react';

type FooterPageLoyautProps = { heading: string; children: ReactNode };

export default function FooterPageLoyaut({ heading, children }: FooterPageLoyautProps) {
  return (
    <div className='max-width-page padding-page-x mx-auto max-w-[1000px] pb-10 pt-32'>
      <h1 className='text-center text-6xl font-black'>{heading}</h1>
      {children}
    </div>
  );
}
