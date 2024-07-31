import { createPortal } from 'react-dom';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';

import { useUserContext } from '../../contexts/UserContext';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import StartingMessage from './StartingMessage';
import SignUp from './SignUp';
import LogIn from './LogIn';
import { AccountLogInOptions } from '../../utils/types';
import { useScreenSize } from '../../hooks/useScreenSize';

export default function AccountPopup() {
  const { isLoginPopupOpen, setIsLoginPopupOpenOpposite } = useUserContext();
  const [activeMenu, setActiveMenu] = useState<AccountLogInOptions>('start');
  const { screenHeight } = useScreenSize();

  function handleClose() {
    setIsLoginPopupOpenOpposite();
    setActiveMenu('start');
  }

  const ref = useOutsideClick(handleClose);

  if (!isLoginPopupOpen) return;
  return createPortal(
    <div className='fixed-centered flex-centered padding-page-x z-50 h-screen w-screen backdrop-blur-sm backdrop-brightness-90'>
      <div
        // @ts-expect-error DONT'T KNOW HOW TO DETERMINE ELEMENT TYPE INSIDE OF THIS HOOK
        ref={ref}
        className={`${screenHeight < 500 ? 'px-4 pb-6 pt-14' : 'px-8 pb-10 pt-20'} relative border border-zinc-300 bg-zinc-900 shadow-2xl shadow-zinc-800 max500px:w-full min500px:w-[30rem]`}
      >
        {activeMenu === 'start' && <StartingMessage setActiveMenu={setActiveMenu} />}
        {activeMenu === 'signUp' && <SignUp setActiveMenu={setActiveMenu} />}
        {activeMenu === 'logIn' && <LogIn setActiveMenu={setActiveMenu} />}

        <button
          onClick={handleClose}
          className={`${screenHeight < 500 ? 'right-1 top-1' : 'right-4 top-4'} absolute text-5xl`}
        >
          <IoClose />
        </button>

        <button
          onClick={() => localStorage.clear()}
          className={`${screenHeight < 500 ? 'left-4 top-4' : 'left-8 top-8'} absolute text-sm text-zinc-300 underline underline-offset-2 duration-primary hover:text-primary-red max400px:text-xs`}
        >
          Clear localStorage (for developers)
        </button>
      </div>
    </div>,
    document.body,
  );
}
