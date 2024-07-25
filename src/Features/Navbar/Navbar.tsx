import { IoClose, IoMenu } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

import { useScreenSize } from '../../hooks/useScreenSize';
import { useState } from 'react';
import NavLinks from '../../ui/NavLinks';
import NavButtons from './NavbarButtons';
import { useOutsideClick } from '../../hooks/useOutsideClick';

export default function Navbar() {
  const { screenWidth } = useScreenSize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useOutsideClick(() => setIsMenuOpen(false));

  return (
    <nav className='padding-page-x fixed z-50 w-screen border-b border-zinc-800 bg-zinc-900 py-2 pr-10 shadow-lg min1200px:pr-16'>
      <ul className='max-width-page mx-auto flex items-center gap-6 text-lg max1000px:gap-5'>
        <li className='mr-auto'>
          <NavLink to='HomePage' className='flex cursor-pointer items-center gap-3'>
            <img src='logo.png' className='h-16' />
            <h3 className='font-pizza text-lg font-semibold tracking-widest'>
              Pizza <br /> <span className='text-primary-yellow'>Time</span>
            </h3>
          </NavLink>
        </li>

        {screenWidth > 800 ? (
          <>
            <NavLinks />
            <NavButtons />
          </>
        ) : (
          <ul
            className={`${isMenuOpen ? 'translate-x-[1.25rem] translate-y-[-1.25rem] rounded-lg border border-zinc-800 p-[1.25rem] shadow-lg' : ''} absolute right-9 top-4 flex flex-col items-end space-y-8 bg-zinc-900`}
            ref={ref}
          >
            {!isMenuOpen ? (
              <IoMenu
                className='cursor-pointer text-5xl duration-[400ms] hover:translate-y-[-1px]'
                onClick={() => setIsMenuOpen(curValue => !curValue)}
              />
            ) : (
              <IoClose
                className='cursor-pointer text-5xl duration-[400ms] hover:translate-y-[-1px]'
                onClick={() => setIsMenuOpen(curValue => !curValue)}
              />
            )}

            {isMenuOpen && (
              <>
                <ul className='flex flex-col items-end gap-4'>
                  <NavLinks />
                </ul>

                <ul className='flex flex-col items-end gap-4'>
                  <NavButtons />
                </ul>
              </>
            )}
          </ul>
        )}
      </ul>
    </nav>
  );
}
