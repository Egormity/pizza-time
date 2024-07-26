import { NavLink } from 'react-router-dom';
import { scrollToTop } from '../utils/scrollToTop';

type GenerateNavLinksProps = {
  linkNames: string[];
  customFunc?: () => void;
};

export default function GenerateNavLinks({ linkNames, customFunc }: GenerateNavLinksProps) {
  return linkNames.map(item => (
    <li key={item} className='cursor-pointer duration-primary hover:text-primary-red'>
      <NavLink
        to={`${item}Page`}
        onClick={() => {
          scrollToTop();
          customFunc && customFunc();
        }}
        className={({ isActive }) => (isActive ? 'text-primary-red' : '')}
      >
        {item}
      </NavLink>
    </li>
  ));
}
