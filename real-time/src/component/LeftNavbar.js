import React from 'react';
import '../App.css'; // Import your CSS file
import ContactItem from './ContactItem';

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
            name: 'Mitchal Smith',
            numbers: ['555-555-5555'],
            discription:"Hi, John wwhere r u?"
          },
          {
            name: 'Jane Sorty',
            numbers: ['555-555-5555'],
            discription:"Hi, John wwhere r u?"
          },
          {
            name: 'Jane Smith',
            numbers: ['555-555-5555'],
            discription:"Hi, vicky wwhere r u?"
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
 
 
    return (<>
 <div className="navbar">
      <div className="profile">
        <img 
          src={tt}
          className="profile-pic"
        />
      </div>
      <div className="search">
        <input type="text" placeholder="Search" className="search-box" />
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
