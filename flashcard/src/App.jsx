import FlashCardList from "./components/FlashCardList";

function App() {
  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Capital Cities Flashcards</h1>
        <FlashCardList />
      </div>
    </div>
  );
}

export default App;