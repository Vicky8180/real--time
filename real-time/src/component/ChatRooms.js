import React, { useState, useEffect } from 'react';
import ChatMessage from './ChatMessages';
import axios from 'axios'
function ChatRoom({ username }) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);



      const sendTrigger=async()=>{
      
        const data=   await axios.get(`${process.env.REACT_APP_BASE_URL_PORT}/api/messages`);
     


      }

  // const handleSendMessage = () => {
  //   if (message.trim() !== '') {
  //     // Send the message to the server
  //     // Clear the input field
  //     setMessage('');
  //   }
  // };

  // useEffect(() => {
  //   // Fetch chat messages from the server and update 'messages' state
  // }, []);

  return (
    <div className="ChatRoom">
      <div className="ChatMessages">
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg} />
        ))}
      </div>
      <div className="ChatInput">
        <input
          type="text"
          placeholder="Type message here "
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendTrigger} >Send</button>
      </div>
    </div>
  );
}

export default ChatRoom;
