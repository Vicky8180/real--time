import React, { useEffect, useState } from "react";
import  LeftPart from "../LeftNavbar"
import ContactItem from "../ContactItem";
import Modal from "../../component/Models/Modal";
import LiveSearch from "../../component/Models/LiveSearch";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { AddtoChatArray, ChatList, SelectedChat } from "../../action";
import NotificationTab from "../../component/Models/NotificationTab";
import MailIcon from '@mui/icons-material/Mail';
import { useNavigate } from "react-router-dom";
import { Badge, IconButton } from "@mui/material";
import MobileNavbar from "./MobileNavbar"
const TopNavbar =()=>{
    const tt ="https://static.vecteezy.com/system/resources/thumbnails/019/900/322/small/happy-young-cute-illustration-face-profile-png.png";

    const admin = JSON.parse(localStorage.getItem("admin"));
    const friends1 = admin.friends;
    let friends;
    const friends2=useSelector((state)=>state.Friends)
     const navigate=useNavigate();
  
    if(friends2.length===0){
     friends=friends1;
    }else {
      friends=friends2;
    }
    const dispatch = useDispatch();
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
  
    const openModal3 = () => {
      setShowModal3(true);
    };
    const closeModal3 = () => {
      setShowModal3(false);
    };
    const openModal = () => {
      setShowModal2(true);
    };
    const closeModal = () => {
      setShowModal2(false);
    };
  
    const openParticularChat = async (props) => {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL_PORT}/api/chatcreated`, {
        chatName: admin.name,
        users: [props._id, admin._id],
        messageAccesser: admin._id,
      });
  
      const chats = await axios.get(
        `${process.env.REACT_APP_BASE_URL_PORT}/api/getmessages?chatId=${response.data.data[0]._id}`
      );
     
      dispatch(ChatList(response.data));
      dispatch(AddtoChatArray(chats.data.data));
      dispatch(SelectedChat({ user: props, checkerBool: true }));
      navigate('/chatpage')
  
    };
  
  
    useEffect(() => {}, [showModal2, friends]);
    const [notiCount,setNotiCount]=useState()
     const notificationCount=useSelector((state)=>state.NotificationState)
   

    return(
        <>
        {/* <MobileNavbar/> */}
        <div className='TN-1'>
        {/* <div> */}

        <div className="navbar">
        <div className="profile">
          <img src={tt} className="profile-pic" alt="dd" />
         
        </div>
        <div className="adminName">{admin.name}</div>
        <div className="notification">
        
        <IconButton  onClick={openModal3}  size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={notificationCount.length} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            {showModal3 && (
            <Modal>
              <NotificationTab close={closeModal3} />
            </Modal>
          )}
      
        </div>
     
        <div className="search">
          <button onClick={openModal}>Find </button>
          {showModal2 && (
            <Modal>
              <LiveSearch close={closeModal} />
            </Modal>
          )}
        </div>
      </div>
      <div className="friendslist">
      {friends.map((value, index) => (
        <button
          onClick={() => {
            openParticularChat(value);
          }}
          className="btnOfcontact"
        >
          <ContactItem
            key={index}
            contactName={value.name}
            discription={value.password}
          />
        </button>
      ))}
      </div>

      <div className="logout"> 
      <button className="logoutbutton">Logut</button>
      </div>
        {/* </div> */}
        </div>

        </>
    )



}

export default TopNavbar;