import React from 'react'
import "../App.css";
import RightNavbar from './RightSide/RightNavbar';
import RightFooter from './RightSide/RightFooter';
import RightBody from "./RightSide/RightBody"
export default function RightPart() {
  return (
    <div className='RP-1'>
      <RightNavbar/>
      <RightBody/>
      <RightFooter/>
    </div>
  )
}
