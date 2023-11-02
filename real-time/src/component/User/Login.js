// LoginForm.js
import React, { useState } from "react";
import "./UserStyle.css";
import { useNavigate } from "react-router-dom";
import FirstPage from "../FirstPage";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Admin } from "../../action";

function LoginForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChangeP = (e) => {
    const name = e.target.value;
    setPassword(name);
  };

  const handleChangeE = (e) => {
    const name = e.target.value;
    setEmail(name);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  const loginButton = async () => {
    const userExists = await axios.post("http://localhost:3003/api/login", {
      email: email,
      password: password,
    });

    if (userExists.data.success) {
      console.log(userExists.data);
      dispatch(Admin(userExists.data));
      localStorage.setItem("admin", JSON.stringify(userExists.data.data));
      navigate("/firstpage", FirstPage);
    } else {
      alert("Check your credentials! Try again!");
    }
  };

  return (
    <div className="login-form">

    <div>
      <img   src="https://web.whatsapp.com/img/native-desktop-hero_a22b846aefcd2de817624e95873b2064.png" alt="imag" />
    </div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChangeE}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChangeP}
          />
        </div>
        <button type="submit" onClick={loginButton}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
