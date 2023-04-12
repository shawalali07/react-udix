import { NavLink } from 'react-router-dom';

const NavItem = ({ item }) => {
  console.log(item);
  return (
    <li>
      <NavLink className='link' to={item?.href}>
        {({ isActive }) => (
          <p className={`navListItem ${isActive && 'active'}`}>{item?.name}</p>
        )}
      </NavLink>
    </li>
  );
};

export default NavItem;
