import { NavLink } from 'react-router-dom';

const NavItem = ({ item }) => {
  return (
    <NavLink className='link' to={item?.href}>
      {({ isActive }) => <li className={isActive && 'active'}>{item?.name}</li>}
    </NavLink>
  );
};

export default NavItem;
