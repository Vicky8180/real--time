

import React, { useState, useEffect } from "react";
import "./RightSideStyle.css";
import { useSelector, useDispatch } from "react-redux";
import io from "socket.io-client";
import axios from "axios";
import { AddtoChatArray, OnlineUsers ,NotificationState} from "../../action";
import InputEmoji from 'react-input-emoji'
export default function RightFooter() {
  // const [socket, setSocket] = useState(null);
  const [userChat, setUserChat] = useState("");
  const dispatch= useDispatch();

  const [getMssage, setGetMessage] = useState();
  useSelector((state) => state.ScrollToBottom);
  var admindata = JSON.parse(localStorage.getItem("admin"));
  const ChatList = useSelector((state) => state.ChatList);

  const socket = io(`${process.env.REACT_APP_BASE_URL_PORT}`);
  const recieverData = useSelector((state) => state.SelectedChat);
  
  const sendChat = async () => {
    await axios.post(`${process.env.REACT_APP_BASE_URL_PORT}/api/messages`, {
      chat: ChatList.data[0]._id,
      sender: admindata._id,
      textContent: userChat,
      receiver:recieverData[0].user._id
    });

    socket.emit("sendmessage", {
      senderId: admindata._id,
      recieverId: recieverData[0].user._id,
      text: userChat,
    });
      const objectToSend={   sender: admindata._id,
        receiver:recieverData[0].user._id,
        textContent: userChat,}
    dispatch(AddtoChatArray(objectToSend) )
    setUserChat("");
  };

  useEffect(() => {
    if (socket) {
      socket.on("welcome", (message) => {
        socket.emit("welcome", admindata._id);
      });
      socket.on("getusers", (users) => {
       
        dispatch(OnlineUsers(users));
      });
      socket.on("getmessage", (data) => {
 
        const object={sender:data.data.senderId,textContent:data.data.text, recieverData:recieverData}
        setGetMessage(object);
   
      });
    }
  }, []);

    
//incoming mesaages handling
  useEffect(()=>{
    if(getMssage!==undefined){
      if(recieverData[0].user._id===getMssage.sender){
  dispatch(AddtoChatArray(getMssage))
}else {
  // here notification logic c

  dispatch(NotificationState(getMssage));


}
}
  },[getMssage])

  const takeChat = (e) => {
    setUserChat(e.target.value);
  };

  return (
    <>
      <div className="RF-1">
        <div className="emogi">
        <InputEmoji
          // value={text}
          // onChange={setText}
          cleanOnEnter
          
          placeholder="Type a message"
        />

        </div>
        <div className="input">
          <form className="inputform">
            <input
              placeholder="Text"
              type="text"
              value={userChat}
              onChange={takeChat}
            />
          </form>
        </div>
        <div className="send">
          <button className="sendButton" onClick={sendChat}>
            Send
          </button>
        </div>
      </div>
      <div>
     
      </div>
    </>
  );
}
