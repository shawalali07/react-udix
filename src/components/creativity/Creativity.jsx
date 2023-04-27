import creativity from '../../assets/creativity.png';
import solutions from '../../assets/solutions.svg';

const Creativity = () => {
  return (
    <div className='creativityContainer'>
      <div>
        <img src={creativity} />
      </div>
      <div className='crtRight'>
        <div className='crtHeader'>
          <h1 className='crtHeading'>Creativity & Technology</h1>
          <span>
            Some networks believe that by only offering a basic tracking system
            their affiliates can reach a high level of creativity. We like to
            set the bar a lot higher by offering you cutting-edge tech solutions
            together with a team of creative experts on-call with the tools you
            need based on real-time results
          </span>
        </div>
        <div className='crtBottom'>
          <h1>Defines our true value</h1>
          <ul>
            <li>
              Some networks believe that by only offering a basic tracking
              system
            </li>
            <li>
              Some networks believe that by only offering a basic tracking
              system
            </li>
            <li>
              Some networks believe that by only offering a basic tracking
              system
            </li>
          </ul>
        </div>
        <div className='checkSolution'>
          <button>Check our solutions</button>
          <img src={solutions} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Creativity;
