// // RegistrationForm.js
// import React, { useState } from 'react';
// import "./UserStyle.css"
// import axios from 'axios';
// import FirstPage from '../FirstPage';
// import { useNavigate } from 'react-router-dom';

// function RegistrationForm() {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });
//  const navigate=useNavigate();
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });

//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//   };

//   const regiterButton=async()=>{
//    console.log(formData.username)
//     const data= await axios.post("http://localhost:3003/api/register",{
//       name:formData.username,
//     email:formData.email,
//     password:formData.password
//     })
// if(data.data.success){
//     navigate("/firstpage",FirstPage)
// }else{
//   alert("User exists ")
// }


//   }

//   return (<>
//     <div className="registration-form">
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Username</label>
//           <input
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit" onClick={regiterButton}>Register</button>
        

//       </form>
      
//     </div>
  
// </>
//   );
// }

// export default RegistrationForm;



import React, { useState } from 'react';
import './UserStyle.css'; // Make sure to import your CSS file
import axios from 'axios';
import Login from "../User/Login"
import { useNavigate } from 'react-router-dom';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  const registerButton = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL_PORT}/api/register`, {
        name: formData.username,
        email: formData.email,
        password: formData.password,
      });

      if (response.data.success) {
    
        navigate('/login',Login);
      } else {
        alert('User already exists.');
      }
    } catch (error) {
      
      alert('An error occurred during registration.');
    }
  };

  return (
    <>
    <div className='containerR'>
      <div className="registration-form">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
          
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={registerButton}>
            Register
          </button>
        </form>
      </div>
      <div className="login-button">
        <button onClick={() => navigate('/login')}>Login</button>
      </div>
      </div>
    </>
  );
}

export default RegistrationForm;
