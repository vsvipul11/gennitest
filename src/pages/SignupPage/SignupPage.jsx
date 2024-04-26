import React, { useState } from 'react';
import styles from './Home.module.css'; 
import profilePic from './brandlogo.png';
import excidelogo from './excidelogo.png';
import {Link, useNavigate } from "react-router-dom";

const SignupPage = () => {
     const navigate = useNavigate();
    


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });

    const [passwordError, setPasswordError] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    async function submitForm(e) {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setPasswordError('Passwords do not match');
            return;
        }

        console.log('Submitting form data:', formData);
    
        try {
            const response = await fetch(`https://testshant.vercel.app/otp?email=${formData.email}`);
            const data = await response.json();
        
            if (response.ok) {
                if (data.msg === 'true') {
                    console.log('API response:', data);
                    
                    navigate( "/otp",{state: formData });
                } else {
                    alert(data.msg);
                }
            } else {
                console.error('Error:', data.error);
            }
        } catch (error) {
            console.error('Error occurred while calling the API:', error);
        }
    }

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
                    <img 
                        src={excidelogo}
                        alt="Exide Logo"
                        height="25"
                        width="100"
                        style={{marginTop: '1em'}}
                    /> 
                    <h1 style={{color: '#0D285A', fontSize: '2em', marginTop: '0.2em', fontWeight: '500'}}>
                        Welcome
                    </h1>  
                    <h1 style={{color: '#8F8F8F' , fontSize: '1em', marginTop: '-1em', fontWeight: '200'}}>
                        Please enter your details to get started
                    </h1>    

                    <form style={{display: 'flex' ,flexDirection: 'column' , alignItems: 'center' , width: '100%'}} onSubmit={submitForm}>
                        <input type="text" className={styles.inputField} name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} />
                        <input type="email" className={styles.inputField} name="email" placeholder="Email Address" value={formData.email} onChange={handleInputChange} />
                        <input type="tel" className={styles.inputField} name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} />
                        <input type="password" className={styles.inputField} name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} /> 
                        <input type="password" className={styles.inputField} name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleInputChange} /> 
                        {passwordError && <p style={{ color: 'red', marginBottom: '0.5em' }}>{passwordError}</p>}
                        <button style={{marginTop: '0.2em'}}  className={styles.submitButton}>Sign Up</button>
                    </form>

                    <h1 style={{color: '#8F8F8F' , fontSize: '1em' , fontWeight: '200' , marginTop: '1em', marginBottom: '-1em' }}>
                        Already Have an Account?
                    </h1>
                    <Link to='/Login'>
                        <h1 style={{color: 'blue' , fontSize: '1em' , marginTop: '1em'}}>
                        Log In
                        </h1>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;