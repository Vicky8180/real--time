import React from 'react';

function ChatMessage({ message }) {
  return (
    <div className="ChatMessage">
      <p>{message.text}</p>
      <span>{message.sender}</span>
    </div>
  );
}

export default ChatMessage;
