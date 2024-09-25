import { useState } from "react";
import './App.css'
import CreateMessage from './components/CreateMessage';
import MessageList from './components/MessageList';

function App() {
  const [textInput, setTextInput] = useState('');
  const [message, setMessage] = useState([]);
  let name = "binky1615";

  return (
    <>
     <CreateMessage
       textInput={textInput}
       setTextInput={setTextInput}
       message={message}
       setMessage={setMessage}
     />
     <MessageList name={name} message={message}/>
    </>
  )
}

export default App