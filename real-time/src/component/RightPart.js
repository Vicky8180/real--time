import React from 'react'
import "../App.css";
import RightNavbar from './RightSide/RightNavbar';
import RightFooter from './RightSide/RightFooter';
import RightBody from "./RightSide/RightBody"
import { useSelector } from 'react-redux';
import RightDisplay from './RightDisplay'
export default function RightPart() {
  const chatdata=useSelector((state)=>state.ChatArray);
  const SelectedChat= useSelector((state)=>state.SelectedChat)

  console.log(SelectedChat)
  var t=false;
 if(chatdata.length===0){
   t=true;
 }

  return (
    <div className='RP-1'>
       {SelectedChat[0].checkerBool ?   <div> <RightNavbar/>
      <RightBody/>
      <RightFooter/> </div>: <RightDisplay/>  }
    </div>
  )
}
