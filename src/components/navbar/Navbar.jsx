import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { navItems } from '../../constants/navItems';
import NavItem from './NavItem';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navContainer'>
        <div className='navLeft'>
          <img src={logo} />
        </div>
        <div className='navCenter'>
          <ul className='navList'>
            {navItems?.map((item) => (
              <NavItem key={item?.href} item={item} />
            ))}
          </ul>
        </div>
        <div className='navRight'>
          <button className='btn'>SIGN IN</button>
          <button className='btn btnSignup'>SIGN UP</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
