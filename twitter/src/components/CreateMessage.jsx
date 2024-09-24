import { useState } from "react";

const CreateMessage = ({ addMessage }) => {
  const [message, setMessage] = useState("");

  const userInputHandler = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMessage("binky1615", message); 
    setMessage(""); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        cols="50"
        rows="5"
        value={message}
        onChange={userInputHandler}
      ></textarea>
      <button type="submit">Toevoegen</button>
    </form>
  );
};

export default CreateMessage;