import React from 'react'
import "../../App.css";
import RightNavbar from '../RightSide/RightNavbar';
import RightFooter from '../RightSide/RightFooter';
import RightBody from "../RightSide/RightBody"
import { useSelector } from 'react-redux';
import RightDisplay from '../RightDisplay'
export default function ChatPage() {
  const chatdata=useSelector((state)=>state.ChatArray);
  const SelectedChat= useSelector((state)=>state.SelectedChat) 
  var t=false;
 if(chatdata.length===0){
   t=true;
 }

  return (
    <div className='CP-1'>
       {SelectedChat[0].checkerBool ?   <div className='CP-2'> <RightNavbar/>
      <RightBody/>
      <RightFooter/> </div>: <RightDisplay/>  }
    </div>
  )
}