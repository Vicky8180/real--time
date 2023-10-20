import React from 'react';

const ContactItem = (props) => {
  console.log(props);
  return (
    <div className="contact-item">
      <div className="left-section">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/019/900/322/small/happy-young-cute-illustration-face-profile-png.png"
          alt="Profile Picture"
          className="profile-pic"
        />
      </div>
      <div className="right-section">
        <div className="name">{props.contactName}</div>
        <div className="description">{props.discription}</div>
      </div>
    </div>
  );
};

export default ContactItem;
