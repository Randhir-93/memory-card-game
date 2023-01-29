import Card from "./Card";

export default function Board({ imageData, onCardClick }) {
  return (
    <div className="board-container">
      {imageData.map((imgData) => {
        return (
          <Card onCardClick={onCardClick} key={imgData.id} cardData={imgData} />
        );
      })}
    </div>
  );
}
