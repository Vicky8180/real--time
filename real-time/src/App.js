import React, { useState } from 'react';
import ChatRoom from './component/ChatRooms';
import KanbanBoard from './KanbanBoard';
import './App.css'
function App() {

  const [username, setUsername] = useState('');
  
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  return (
  <>
  <div className='div1'>
  <div className="App">
      <h1>Real-Time Chat App</h1>
      <div>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={handleUsernameChange}
        />
        <button>Join Chat</button>
      </div>
      {username && <ChatRoom username={username} />}
    </div>

    <div className='div3'>
      <KanbanBoard/>
    </div>
  </div>

  
  </>
  );
}

export default App;
