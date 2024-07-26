import { NavLink } from 'react-router-dom';

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
          window.scrollTo(0, 0);
          customFunc && customFunc();
        }}
        className={({ isActive }) => (isActive ? 'text-primary-red' : '')}
      >
        {item}
      </NavLink>
    </li>
  ));
}
