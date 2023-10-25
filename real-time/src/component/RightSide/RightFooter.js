import React, { useState ,useEffect} from 'react'
import "./RightSideStyle.css"
import {useDispatch, useSelector}  from "react-redux"
import {AddtoChatArray} from "../../action/index"
import io from 'socket.io-client';

// import io from 'socket.io-client';
// const receiverSocket = io('http://localhost:3003');
// const senderSocket = io('http://localhost:3003'); 

const senderSocket = io('http://localhost:3003/sender');
const receiverSocket = io('http://localhost:3003/receiver');

export default function RightFooter() {
  const [userChat, setUserChat]= useState(""); 
     const dispatch= useDispatch();
    
    
   
   
     useSelector((state)=>state.ScrollToBottom);
    
  const sendChat=()=>{

    const objectToSend={userChat:userChat,fromSender:false}
    senderSocket.emit('chat message', objectToSend);
         dispatch(AddtoChatArray(objectToSend));
        
         setUserChat("");
         
         

         
 }

 useEffect(() => {
   
  receiverSocket.on('chat message', (message) => {
    console.log(message);
    const messageGot={userChat:message.userChat,fromSender:true}
    dispatch(AddtoChatArray(messageGot));
  
  });   

  // return () => {
  //   receiverSocket.disconnect();
  // };
}, []);




 const takeChat=(e)=>{
  setUserChat(e.target.value)
 }

  return (
    <>

    <div className='RF-1'>
    <div className='emogi'>
      <img src="" alt="dd"/>
    </div>
    <div className='input'>
       <form className='inputform'>
        <input  placeholder='Text' type='text'   value={userChat} onChange={takeChat} />
       </form>
    </div>
    <div className='send'>
 <button className='sendButton' onClick={sendChat}>
    Send
 </button>
    </div>

    </div>

    </>
  )
}
