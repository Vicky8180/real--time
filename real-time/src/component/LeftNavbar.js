import React, { useState } from 'react';
import '../App.css'; // Import your CSS file
import ContactItem from './ContactItem';
import Modal from "../component/Models/Modal"
import LiveSearch from "./Models/LiveSearch"
const LeftNavbar = () => {
   
    const tt="https://static.vecteezy.com/system/resources/thumbnails/019/900/322/small/happy-young-cute-illustration-face-profile-png.png"
   
    
    const contacts = [
        {
          name: 'John Doe',
          numbers: ['123-456-7890'],
          discription:"Hi, John wwhere r u?"
        },
        {
          name: 'Jane Smith',
          numbers: ['555-555-5555'],
          discription:"Hi, John wwhere r u?  "
        },
      
          {
            name: 'John Doe',
            numbers: ['123-456-7890'],
            discription:"Hi, John wwhere r u?"
          },
          {
            name: 'John Doe',
            numbers: ['123-456-7890'],
            discription:"Hi, John wwhere r u?"
          },
          {
            name: 'John Doe',
            numbers: ['123-456-7890'],
            discription:"Hi,  wwhere r u?"
          },
      ];
 
      const [showModal, setShowModal] = useState(false);

 
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
 
    return (<>
 <div className="navbar">
      <div className="profile">
        <img 
          src={tt}
          className="profile-pic"
          alt="dd"
        />
      </div>
      <div className="search">
     
         <button onClick={openModal}>search
         {showModal && (
        <Modal>
          <LiveSearch close={closeModal}/>
        
        </Modal>
      )}
         </button>
      </div>
    </div>
    {contacts.map((contact, index) => (<ContactItem
          key={index}
          contactName={contact.name}
          discription={contact.discription}
        />
      ))}
    </>
   
  );
};

export default LeftNavbar;
