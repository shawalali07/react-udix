import { cardData } from '../../constants/cardData';
import Card from './Card';

const Services = () => {
  return (
    <div className='services'>
      {cardData?.map((card) => (
        <Card key={card?.id} card={card} />
      ))}
    </div>
  );
};

export default Services;
