import { useState } from "react";
import "./App.css";
import CreateMessage from "./components/CreateMessage";
import MessageList from "./components/MessageList";

function App() {
  const [messages, setMessages] = useState([]);

  const addMessage = (name, message) => {
    setMessages([...messages, { name, message }]);
  };

  return (
    <>
      <CreateMessage addMessage={addMessage} />
      <MessageList messages={messages} />
    </>
  );
}

export default App;