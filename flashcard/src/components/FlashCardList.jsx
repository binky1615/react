import data from '../data.js';
import FlashCard from './FlashCard.jsx';

const FlashCardList = () => {
  const flashCards = data;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {flashCards.map((card, index) => (
        <FlashCard key={index} question={card.question} answer={card.answer} />
      ))}
    </div>
  );
}

export default FlashCardList;