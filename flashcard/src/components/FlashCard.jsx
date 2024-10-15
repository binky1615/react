import { useState } from "react";

const FlashCard = ({ answer, question }) => {
  const [isClicked, setIsClicked] = useState(false);

  const flipCard = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      onClick={flipCard}
      className="cursor-pointer bg-white text-black p-6 shadow-lg rounded-lg flex items-center justify-center text-center transition-transform transform hover:scale-105"
      >
      {isClicked ? (
        <h2 className="text-xl font-semibold">{answer}</h2>
      ) : (
        <h2 className="text-xl font-semibold">{question}</h2>
      )}
    </div>
  );
};

export default FlashCard;