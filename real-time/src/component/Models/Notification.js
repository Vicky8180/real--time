import React, { useState, useEffect } from 'react';
import "../../App.css"
const Notification = ({ message, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 50000); // Close the notification after 5 seconds

    return () => clearTimeout(timeout);
  }, [onClose]);

  return visible ? (
    <div className="notification-1">

       <div className="notification">
       <div className='notification-text'>
        <p className='notification-text1'>User Name</p>
      <p className='notification-text2'>{message}</p> 
      </div>
      <div className='noti-button'><button onClick={() => setVisible(false)}>Dismiss</button></div>
      
    </div>

  </div>
  
  
  ) : null;
};

export default Notification;
