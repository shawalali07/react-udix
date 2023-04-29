import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <div className='primary-header'>
      <div className='container'>
        <div className='top-left'>
          <a href='#'>
            <img src={logo} alt='' />
          </a>
          <ul className='top-ul text-secondary fw-medium uppercase'>
            <li className='top-li'>
              <a className='link' href='#'>
                Home
              </a>
            </li>
            <li className='top-li'>
              <a className='link' href='#'>
                Blog
              </a>
            </li>
            <li className='top-li'>
              <a className='link' href='#'>
                Product
              </a>
            </li>
            <li className='top-li'>
              <a className='link' href='#'>
                Contacts
              </a>
            </li>
          </ul>
        </div>
        <div className='top-right'>
          <button className='button uppercase'>Sign in</button>
          <button className='button uppercase outline'>Sign up</button>
        </div>
        <div className='top-right-mobile'>
          <button className='button uppercase outline'>Menu</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
