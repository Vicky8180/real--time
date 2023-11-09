import React from 'react';
import '../../App.css';

function UserDetailView(props) {
//  console.log(props.state[0].user.name)
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
          <img className="user-photo" src={props.state[0].user.photo} alt="dd" />
          <h2 className="user-name">{props.state[0].user.name}</h2>
          <p className="user-email">{props.state[0].user.email}</p>
        </div>
      </div>
     
    </div>
  );
}

export default UserDetailView;
