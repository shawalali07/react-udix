import homePic from '../../assets/homePic.png';
import { infoData } from '../../constants/infoData';
import InfoCard from './InfoCard';
const Info = () => {
  return (
    <div className='info'>
      <img src={homePic} alt='' className='infoImg' />
      <div className='infoContainer'>
        {infoData?.map((info) => (
          <InfoCard key={info?.id} info={info} />
        ))}
        <button className='infoBtn'>Sign Up Now!</button>
      </div>
    </div>
  );
};

export default Info;
