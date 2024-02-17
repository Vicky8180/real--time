import React, { useState, useEffect } from 'react';
import "../../App.css"
import { useSelector, useDispatch } from "react-redux";
import { NotificationState,   RemoveNotification } from '../../action';
const Notification = ({ message, sender, onClose }) => {
  const [visible, setVisible] = useState(true);
  const tempdata=useSelector((state)=>state.NotificationState)
  const dispatch = useDispatch();
  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 50000); // Close the notification after 5 seconds

    return () => clearTimeout(timeout);
  }, [onClose]);
  console.log(tempdata );
// console.log(tempdata[0].recieverData[0].user._id  );

  const removeNotification=()=>{
    dispatch(RemoveNotification());
    setVisible(false)
  }

  return visible ? (
    <div className="notification-1">

       <div className="notification">
       <div className='notification-text'>
        <p className='notification-text1'>{sender}</p>
      <p className='notification-text2'>{message}</p> 
      </div>
      <div className='noti-button'><button onClick={removeNotification}>Dismiss</button></div>
      
    </div>

  </div>
  
  
  ) : null;
};

export default Notification;
