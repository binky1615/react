import Message from "./Message";

const MessageList = ({ messages }) => {
  return (
    <>
      {messages.map((msg, index) => (
        <Message key={index} name={msg.name} message={msg.message} />
      ))}
    </>
  );
};

export default MessageList;
