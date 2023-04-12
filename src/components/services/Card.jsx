const Card = ({ card }) => {
  console.log(card);
  return (
    <div className={`${card?.type === 'primary' && 'cardPrimary'} card`}>
      <div className='cardHeader'>
        <img className='cardLogo' src={card?.logo} alt='' />
        <h1 className='cardHeading'>{card?.title}</h1>
      </div>
      <div className='cardBottom'>
        <p className='cardText'>{card?.text}</p>
        <div className='arrow'>{card?.icon}</div>
      </div>
    </div>
  );
};

export default Card;
