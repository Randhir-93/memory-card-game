const Card = ({ cardData, onCardClick }) => {
  return (
    <div className="card-container" onClick={() => onCardClick(cardData.id)}>
      <img alt={cardData.name} src={cardData.imageUrl} />
      <div>{cardData.name}</div>
    </div>
  );
};

export default Card;
