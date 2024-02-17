import React, { useState } from 'react';
import ChatRoom from './component/ChatRooms';
import { BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import FirstPage from './component/FirstPage';
import Register from "../src/component/User/Register"
import Login from "../src/component/User/Login"
import ChatPage from './component/mobile/ChatPage';
import UserDetailView from './component/Models/UserDetailView';
function App() {

  return (
  <>
  {/* <div className='div1'> */}
    {/* <FirstPage/> */}


    <BrowserRouter>
      <Routes>
        <Route path="/"    Component={Register} />
        <Route path="/login"    Component={Login} />
        <Route path="/firstpage"    Component={FirstPage} />
        <Route path="/chatpage"    Component={ChatPage} />
      </Routes>
    </BrowserRouter>


  {/* </div> */}

  
  </>
  );
}

export default App;
