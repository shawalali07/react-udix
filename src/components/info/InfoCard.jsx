const InfoCard = ({ info }) => {
  return (
    <div className='infoItem'>
      <h1>{info?.record}</h1>
      <span>{info?.subHeading}</span>
    </div>
  );
};

export default InfoCard;
