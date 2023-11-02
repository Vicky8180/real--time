import React from "react";
import "./RightSideStyle.css";



export default function Chat({ text, sender }) {
  const admin = JSON.parse(localStorage.getItem("admin"));
  var temp = false;
  if (admin._id === sender) {
    temp = true;
  }

  const messageClass = temp ? "message-receiver" : "message-sender";
  return (
    <>
      <div className="CH-1">
        <div className={`message ${messageClass}`}>
          <p className="CH-TXT">{text}</p>{" "}
        </div>
      </div>
    </>
  );
}
