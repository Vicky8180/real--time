import React from 'react';
import '../../App.css';

function UserDetailView(props) {
 
    const OffIt=()=>{
     
        props.close();
    }
  return (
    <div className="user-dialog-overlay">
      <div className="user-dialog-content">
        <button className="close-button" onClick={OffIt} >
          &times;
        </button>
        <div className="user-info">
          <img className="user-photo" src="https://static.vecteezy.com/system/resources/thumbnails/019/900/322/small/happy-young-cute-illustration-face-profile-png.png" alt="dd" />
          <h2 className="user-name">John Smith</h2>
          <p className="user-email">Email: Joshn99s@gamil.com</p>
        </div>
      </div>
     
    </div>
  );
}

export default UserDetailView;
