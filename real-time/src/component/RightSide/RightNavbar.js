import React, { useState } from "react";
import "./RightSideStyle.css";
import Modal from "../Models/Modal";
import UserDetailView from "../Models/UserDetailView";
import { useSelector } from "react-redux/es/hooks/useSelector";
function RightNavbar() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const OnlineUsers=useSelector((state)=>state.OnlineUsers)
  const receiver= useSelector((state)=>state.SelectedChat);
  let onlineChecker=false;  

  for(let i=0;i<OnlineUsers.length;i++){
     
    if(OnlineUsers[i].userId===receiver[0].user._id){
    onlineChecker=true;
    }
  }
  
  // console.log(receiver[0].user.name)
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="RN-1">
        <div className="RN-2">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/019/900/322/small/happy-young-cute-illustration-face-profile-png.png"
            alt="dd"
          />
          
          <div className="RN-3">
          <h3> {receiver[0].user.name}</h3>
        </div>

        {onlineChecker?<div className="onlineShow"></div>:<div className="oflineShow">offline</div>}
        
        </div>
        
        
        <div className="RN-4">
          <button onClick={openModal}>View</button>
          {showModal && (
            <Modal >
              <UserDetailView close={closeModal} state={receiver}/>
            </Modal>
          )}
        </div>
      </div>
    </>
  );
}

export default RightNavbar;
