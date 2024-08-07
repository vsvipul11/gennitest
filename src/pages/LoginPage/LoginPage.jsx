import React, { useState } from 'react';
import styles from './Home.module.css';
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
            className={styles.brandLogo}
          />
          <h1 className={styles.brandTitle}>EXOVERSE</h1>
          <h2 className={styles.brandSubtitle}>A metaverse of Exide</h2>
          <div className={styles.urldiv}>
            www.exideindustries.com
          </div>
        </div>

        <div className={styles.logindiv}>
          <img
            src={excidelogo}
            alt="Exide Logo"
            className={styles.exideLogo}
          />
          <h1 className={styles.welcomeTitle}>Welcome back</h1>
          <h2 className={styles.welcomeSubtitle}>Please enter your details</h2>

          <input type="email" className={styles.inputField} placeholder="Email Address" value={email} onChange={handleEmailChange} />
          <input type="password" className={styles.inputField} placeholder="Password" value={password} onChange={handlePasswordChange} />

          <button type="submit" className={styles.submitButton} onClick={handleLogin}>Login</button>

          <p className={styles.signupPrompt}>New here? Let's get you started by</p>
          <Link to='/signUp' className={styles.signupLink}>
            Creating an Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;