import { IoClose, IoMenu } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import { useScreenSize } from '../../hooks/useScreenSize';
import { useState } from 'react';
import GenerateNavLinks from '../../ui/GenerateNavLinks';
import NavButtons from './NavbarButtons';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { navLinkNames } from '../../data/dataToMap';
import { scrollToTop } from '../../utils/scrollToTop';

export default function Navbar() {
  const { screenWidth } = useScreenSize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useOutsideClick(() => setIsMenuOpen(false));

  return (
    <nav className='padding-page-x fixed z-50 w-screen border-b border-zinc-800 bg-zinc-900 py-2 pr-10 shadow-lg min1200px:pr-16'>
      <ul className='max-width-page flex items-center gap-6 text-lg max1000px:gap-5'>
        <li className='mr-auto'>
          <Link to='HomePage' className='flex cursor-pointer items-center gap-3' onClick={scrollToTop}>
            <img src='global/logo.png' className='h-16' />
            <h3 className='font-pizza text-lg font-semibold tracking-widest'>
              Pizza <br /> <span className='text-primary-yellow'>Time</span>
            </h3>
          </Link>
        </li>

        {screenWidth > 950 ? (
          <>
            <GenerateNavLinks linkNames={navLinkNames} />
            <NavButtons customFunc={() => setIsMenuOpen(false)} />
          </>
        ) : (
          <ul
            id='navbarUl'
            className={`${isMenuOpen ? 'translate-x-[1.25rem] translate-y-[-1.25rem] rounded-lg border border-zinc-800 p-[1.25rem] shadow-lg' : ''} absolute right-9 top-4 flex flex-col items-end space-y-8 bg-zinc-900`}
            // @ts-expect-error DONT'T KNOW HOW TO DETERMINE ELEMENT TYPE INSIDE OF THIS HOOK
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
                  <GenerateNavLinks linkNames={navLinkNames} customFunc={() => setIsMenuOpen(false)} />
                </ul>

                <ul className='flex flex-col items-end gap-4'>
                  <NavButtons customFunc={() => setIsMenuOpen(false)} />
                </ul>
              </>
            )}
          </ul>
        )}
      </ul>
    </nav>
  );
}
