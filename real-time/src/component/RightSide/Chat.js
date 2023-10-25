import React from 'react'
import "./RightSideStyle.css"
export default function Chat({ text, fromSender }) {
    const messageClass = fromSender ? 'message-sender' : 'message-receiver';
  return (
   <>
   <div className='CH-1'>
   <div className={`message ${messageClass}`}>
     
      <p className='CH-TXT'>
      {text}
      </p>    </div>
   </div>
   
   </>
  )
}


