import { FaGithub } from 'react-icons/fa6';

import NavLinks from '../../ui/NavLinks';

export default function Footer() {
  return (
    <footer className='padding-page-x bg-zinc-900 py-10'>
      <div className='max-width-page mx-auto'>
        <ul>
          <NavLinks />
          <div className='text-5xl'>
            <FaGithub />
          </div>
        </ul>
      </div>
    </footer>
  );
}
