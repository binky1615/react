import Message from "./Message";

const MessageList = ({name, message}) => {
    return ( 
        <>

        {message.map((d) =>(
     <Message name={name} message={d}/>
        ))}
       
        </>
     );
}
 
export default MessageList;