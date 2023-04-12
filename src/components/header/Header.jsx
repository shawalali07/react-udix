const Header = () => {
  return (
    <div className='header'>
      <div className='top'>
        <h1 className='headerHeading'>
          Get It Together And Manage Projects The Right Way.
        </h1>
        <p className='headerText'>
          udix is the world's first smart workplace. We bring all your team's
          content together while letting you use the tools you love.
        </p>
      </div>
      <div className='subscribe'>
        <input className='subscribeInput' placeholder='Email' />
        <button className='btnSubcribe'>Subscribe</button>
      </div>
    </div>
  );
};

export default Header;
