import { NavLink } from 'react-router-dom';

type GenerateLinksProps = {
  linkNames: string[];
  customFunc?: () => void;
};

export default function GenerateLinks({ linkNames, customFunc }: GenerateLinksProps) {
  return linkNames.map(item => (
    <li key={item} className='cursor-pointer duration-primary hover:text-primary-red'>
      <NavLink
        to={`${item}Page`}
        onClick={() => customFunc && customFunc()}
        className={({ isActive }) => (isActive ? 'text-primary-red' : '')}
      >
        {item}
      </NavLink>
    </li>
  ));
}
