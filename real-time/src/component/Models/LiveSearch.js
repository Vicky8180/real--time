
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../App.css';


async function fetchSearchResults(searchTerm) {
    try {
      if (searchTerm.length >= 1) {
        const response = await axios.get(`http://localhost:3003/api/search?keyWord=${searchTerm}`);
        return response.data;
      }
      return [];
    } catch (error) {
      console.error('Error during live search:', error);
      return [];
    }
  }

const  LiveSearch=(props)=> {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
  
    useEffect(() => {
      async function updateSearchResults() {
        const results = await fetchSearchResults(searchTerm);
        console.log(results)
        setSearchResults(results);
      }
      updateSearchResults();
    }, [searchTerm]);


    const OffIt=()=>{
    
      props.close();
  }
   
  const addingFriend=async(props)=>{
      const userId= props;
      console.log(props)
     const adding = await axios.get(`http://localhost:3003/api/add?friendId=${userId}&myId=6537a030a6ab7b607ffa86f7`)

     console.log(adding)
  }


  return (
    <div className="user-dialog-overlay">
      <div className="user-dialog-content">
        {/* <button className="close-button" onClick={OffIt} >
          &times;
        </button> */}
        <button onClick={props.close}>x</button>

        <h3>Search Users</h3>
        <div className='SU-1'>
      <input className='SU-2'
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul className='SU-3'>
        {searchResults.map((result) => (
            <div className='SU-4' >
           <img className='SU-img' src={result.photo} alt ="dd"/>
          <div className='SU-5' key={result._id}>{result.name}</div>
    <button className='SU-btn'  onClick={()=>{
      addingFriend(result._id)
    }}>Add</button>
            </div>
         
        ))}
      </ul>
    
    </div>
      </div>
     
    </div>
  );
}

export default LiveSearch;