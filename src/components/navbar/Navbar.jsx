import logo from '../../assets/logo.svg';
import { navItems } from '../../constants/navItems';
import { browserRoutes } from '../../routes/browserRoutes';
import NavItem from './NavItem';

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='navLeft'>
        <a href={browserRoutes.HOME}>
          <img src={logo} />
        </a>
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
      <div>
        <button className='menuBtn'>Menu</button>
      </div>
    </nav>
  );
};

export default Navbar;
