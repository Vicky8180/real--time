import React, { useState, useEffect } from 'react';
import ChatMessage from './ChatMessages';
import axios from 'axios'
function ChatRoom({ username }) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);



      const sendTrigger=async()=>{
      
        const data=   await axios.get("http://localhost:5000/api/messages");
        console.log(data.data);



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
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendTrigger} >Send</button>
      </div>
    </div>
  );
}

export default ChatRoom;
