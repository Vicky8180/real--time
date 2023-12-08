import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../App.css';
import {useSelector, useDispatch} from "react-redux"
import { Friends } from '../../action';

async function fetchSearchResults(searchTerm) {
    try {
      if (searchTerm.length >= 1) {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL_PORT}/api/search?keyWord=${searchTerm}`);
        return response.data;
      }
      return [];
    } catch (error) {
    
      return [];
    }
  }

function LiveSearch(props) {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
  
    useEffect(() => {
      async function updateSearchResults() {
        const results = await fetchSearchResults(searchTerm);
   
        setSearchResults(results);
      }
      updateSearchResults();
    }, [searchTerm]);

    // const [admindata, setAdmindata]=useState(useSelector((state)=>state.Admin))
    const OffIt = () => {
      console.log('Closing LiveSearch modal');
      props.close();
    }
    const dispatch=useDispatch();
    
     const admin=JSON.parse(localStorage.getItem("admin"));
  const addingFriend=async(props)=>{
      const userId= props;
      // console.log(props)
      const myId= admin._id
      await axios.get(`${process.env.REACT_APP_BASE_URL_PORT}/api/add?friendId=${userId}&myId=${myId}`)

     const friendList= await axios.get(`${process.env.REACT_APP_BASE_URL_PORT}/api/getusers?userId=${admin._id}`)
  dispatch(Friends(friendList.data.data[0].friends))
    
  }


  return (
    <div className="user-dialog-overlay">
      <div className="user-dialog-content">
        <button className="close-button" onClick={OffIt} >
          &times;
        </button>
        {/* <button onClick={props.close}>x</button> */}

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