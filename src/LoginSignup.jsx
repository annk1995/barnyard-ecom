import React, { useState } from 'react';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import './App.css';

const LoginSignup = () => {
  const [auth, setAuth] = useState("Sign Up");
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleFormSubmit = () => {
    // You can use userData for further processing or send it to a server
    console.log('User Data:', userData);

    // Assuming successful login, redirect to the home page
    navigate('/home');
  };

  return (
    <div className='mega'>
      <div className='position-absolute top-50 start-50 translate-middle' id='container'>
        <div className="header">
          <div className="text">{auth}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <input type="text" name="name" placeholder='Enter your name' value={userData.name} onChange={handleInputChange} />
          </div>
        </div>
        <div className="inputs">
          <div className="input">
            <input type="email" name="email" placeholder='Enter your email' value={userData.email} onChange={handleInputChange} />
          </div>
        </div>
        <div className="inputs">
          <div className="input">
            <input type="password" name="password" placeholder='Enter your password' value={userData.password} onChange={handleInputChange} />
          </div>
        </div>
        {auth === "Login" && (
          <div className="forgot-password">Forgot password? <span>Click here</span></div>
        )}
        <div className="submit-container">
          <button className={`submit ${auth === "Login" ? "gray" : ""}`} onClick={() => { setAuth("Sign Up"); handleFormSubmit(); }}>Sign Up</button>
          <div className={`submit ${auth === "Sign Up" ? "gray" : ""}`} onClick={() => { setAuth("Login"); handleFormSubmit(); }}>Log In</div>
        </div>
        {auth === "Login" && (
          <div className="switch-form">
            Don't have an account? <span onClick={() => setAuth("Sign Up")}>Sign up</span>
          </div>
        )}
      </div>
    </div>
  );
}


export default LoginSignup;

