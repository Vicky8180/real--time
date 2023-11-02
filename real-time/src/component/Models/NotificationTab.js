import React, { useState } from 'react';
import Notification from './Notification';
import "../../App.css"
import { useSelector } from 'react-redux/es/hooks/useSelector';
const ChatApp = (props) => {
  const tempdata=useSelector((state)=>state.NotificationState)
  console.log(tempdata)
  const [notifications, setNotifications] = useState(tempdata);

  const addNotification = (message) => {
    setNotifications([...notifications, message]);
  };

  const removeNotification = (index) => {
    const updatedNotifications = [...notifications];
    updatedNotifications.splice(index, 1);
    setNotifications(updatedNotifications);
  };

  const closeIt=()=>{
    props.close();
  }

  return (
    <>
     <div className="user-dialog-overlay-for-notification">
      <div className="user-dialog-content-for-notification">


      <div className="chat-app">
      {/* Render your chat interface here */}
      <div className="chat-interface">
        {/* Your chat interface components */}
        {/* Example: <ChatWindow /> */}
      </div>

      {/* You can add notifications like this: */}
      {/* <button onClick={() => addNotification('New message received!')}>Show Notification</button> */}

      {/* Display notifications */}
      <div className="notification-container">
        {notifications.map((message, index) => 
          <Notification key={index} message={message.textContent} onClose={() => removeNotification(index)} />
        )}
      </div>
      <button onClick={closeIt}>close</button>
    </div>

        </div>
      </div>


    </>
    
  );
};

export default ChatApp;
