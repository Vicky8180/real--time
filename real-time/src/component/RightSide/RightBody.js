import React, { useEffect, useRef } from "react";
import "./RightSideStyle.css";
import Chat from "./Chat";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { ScrollToBottomAction } from "../../action/index";
export default function RightBody() {
  const data2 = useSelector((state) => state.ChatArray);

  const dispatch = useDispatch();
  const bottomRef = useRef();
  const scrollToBottom = () => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

 

  dispatch(ScrollToBottomAction(scrollToBottom));

  return (
    <>
      <div className="RB-1">
        {data2.map((i) => (
          <Chat text={i.textContent} sender={i.sender} />
        ))}
        <div ref={bottomRef}></div>
      </div>
    </>
  );
}
