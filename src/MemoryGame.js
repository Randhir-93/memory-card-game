import { useEffect, useState } from "react";
import Board from "./Board";
import imageDataList from "./imageData";

const MemoryGame = () => {
  const [imageData, setImageData] = useState(imageDataList);
  const [score, setScore] = useState(0);
  const [bsetScroe, setBestScroe] = useState(0);
  const [clickedCardIds, setClickedCardIds] = useState([]);

  const cardClickHandler = (id) => {
    if (clickedCardIds.includes(id)) {
      setBestScroe(score);
      setScore(0);
      setClickedCardIds([]);
    } else {
      setClickedCardIds([...clickedCardIds, id]);
      setScore(score + 1);
    }
  };

  useEffect(() => {
    let suffelFromIndex = Math.floor(Math.random() * imageData.length);
    setImageData([
      ...imageData.slice(suffelFromIndex),
      ...imageData.slice(0, suffelFromIndex)
    ]);
  }, [clickedCardIds]);

  return (
    <div>
      <div className="scores">
        <div>Score: {score}</div>
        <div>Best score: {bsetScroe}</div>
      </div>
      <Board onCardClick={cardClickHandler} imageData={imageData} />
    </div>
  );
};

export default MemoryGame;
