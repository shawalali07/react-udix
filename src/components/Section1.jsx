const Section1 = () => {
  return (
    <div className='section1'>
      <div className='section1-container'>
        <div className='section1-header'>
          <h1 className='fs-primary-heading text-black fw-bold'>
            Get It Together And Manage Projects the Right Way.
          </h1>
          <p className='text-secondary fs-600 ff-secondary section1-text'>
            udix is the world's first smart workspace. We bring all your team's
            content together while letting you use the tools you love.
          </p>
        </div>
        <div className='section1-footer'>
          <input
            className='section1-input ff-secondary fs-500'
            type='email'
            placeholder='Email'
          />
          <button className='subscribe-btn fs-500 text-white bg-primary fw-semi-bold'>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section1;
