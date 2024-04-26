import React, { useState } from 'react';
import styles from './Home.module.css'; 
import { Image } from "react-dom";
import profilePic from './brandlogo.png';
import excidelogo from './excidelogo.png';
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const enterGame = () => {
    navigate('/characterSelect');
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('https://testshant.vercel.app/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });

      const data = await response.json();

      if (response.ok) {
        if (data.msg === 'true') {
          enterGame();
          console.log('Login successful:', data);
        } else if (data.msg === 'false') {
          alert('Login failed. Please check your email and password.');
        } else {
          alert(data.msg);
        }
      } else {
        console.log('Login failed:', data.message);
        alert('Login failed. Please check your email and password.');
      }
    } catch (error) {
      console.error('Error occurred while logging in:', error);
    }
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.centerdiv}>
        <div className={styles.branddiv}>
          <img 
            src={profilePic}
            alt="Brand Logo"
            height="50"
            width="50"
          /> 
          <h1 style={{color: 'white' , fontWeight: 'bold', fontSize: '3em', lineHeight: '0.1', marginBottom: '0'}}> EXOVERSE</h1>  
          <h1 style={{color: 'white', fontWeight: '300' ,fontSize: '2em',lineHeight: '1' }}> A metaverse of Exide</h1>  
          <div className={styles.urldiv}>
            www.exideindustries.com 
          </div>
        </div>

        <div className={styles.logindiv}>
          <img style={{marginTop: '2em'}}
            src={excidelogo}
            alt="Exide Logo"
            height="25"
            width="100"
          /> 
          <h1 style={{color: '#0D285A', fontSize: '2em', marginTop: '2em', fontWeight: '500',   fontFamily: 'sans-serif'}}>
            Welcome back
          </h1>  
          <h1 style={{color: '#8F8F8F' , fontSize: '1em', marginTop: '-1em', fontWeight: '200'}}>
            Please enter your details
          </h1>    

          <input type="email" className={styles.inputField} placeholder="Email Address" value={email} onChange={handleEmailChange} />
          <input type="password" className={styles.inputField} placeholder="Password" value={password} onChange={handlePasswordChange} />  
          <button type="submit" className={styles.submitButton} onClick={handleLogin}>Login</button> 

          <h1 style={{color: '#8F8F8F' , fontSize: '1em' , fontWeight: '200' , marginTop: '5em', marginBottom: '-1em' }}>
            New here? Let's get you started by
          </h1>
          <Link to='/signUp'>
            <h1 style={{color: 'blue' , fontSize: '1em' , marginTop: '1em'}}>
              Creating an Account
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;