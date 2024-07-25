import { NavLink } from 'react-router-dom';

export default function GenerateLinks({ linkNames }: { linkNames: string[] }) {
  return linkNames.map(item => (
    <li key={item} className='cursor-pointer duration-primary hover:text-primary-red'>
      <NavLink to={`${item}Page`} className={({ isActive }) => (isActive ? 'text-primary-red' : '')}>
        {item}
      </NavLink>
    </li>
  ));
}
