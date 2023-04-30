import Arrow from '../components/Arrow';
import circuit from '../assets/circuit.svg';
import objective from '../assets/objective.svg';
import smartphone from '../assets/smartphone.svg';

const Section2 = () => {
  return (
    <div className='section2'>
      <div className='section2-container'>
        <h1 className='fs-secondary-heading fw-bold text-secondary text-center'>
          Solutions that will change your business forever
        </h1>
        <p className='ff-secondary text-light text-center'>
          Some networks believe that by only offering a basic tracking system
          their affiliates can reach a high level of creativity. We like to set
          the bar a lot higher by offering you cutting-edge tech solutions
          together with a team of creative experts.
        </p>
        <div className='cards-container'>
          <div className='card card-primary'>
            <div className='card-body'>
              <div className='card-header'>
                <img src={circuit} alt='' />
                <h2 className='fs-700 fw-boldest'>Web Services</h2>
              </div>
              <div className='card-footer'>
                <p className='ff-secondary fs-500'>
                  Some networks believe that by only offering.{' '}
                </p>
                <Arrow color='#ffffff' />
              </div>
            </div>
          </div>
          <div className='card card-light'>
            <div className='card-body'>
              <div className='card-header'>
                <img src={objective} alt='' />
                <h2 className='fs-700 fw-boldest'>Web Services</h2>
              </div>
              <div className='card-footer'>
                <p className='text-light fs-500'>
                  Some networks believe that by only offering.{' '}
                </p>
                <Arrow color='#381ddb' />
              </div>
            </div>
          </div>
          <div className='card card-light'>
            <div className='card-body'>
              <div className='card-header'>
                <img src={smartphone} alt='' />
                <h2 className='fs-700 fw-boldest'>Web Services</h2>
              </div>
              <div className='card-footer'>
                <p className='text-light fs-500'>
                  Some networks believe that by only offering.{' '}
                </p>
                <Arrow color='#381ddb' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
