import { NavLink } from 'react-router-dom';
import { NavLinkNames } from '../data/dataToMap';

export default function NavLinks() {
  return NavLinkNames.map(item => (
    <li key={item} className='cursor-pointer duration-primary hover:text-primary-red'>
      <NavLink to={`${item}Page`} className={({ isActive }) => (isActive ? 'text-primary-red' : '')}>
        {item}
      </NavLink>
    </li>
  ));
}
