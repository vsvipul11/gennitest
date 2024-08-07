import React, { useState } from 'react';
import styles from './Home.module.css'; 
import profilePic from './brandlogo.png';
import excidelogo from './excidelogo.png';
import { Link, useNavigate } from "react-router-dom";

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
                    navigate("/otp", { state: formData });
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
                    <img src={profilePic} alt="Brand Logo" className={styles.brandLogo} />
                    <h1 className={styles.brandTitle}>EXOVERSE</h1>
                    <h2 className={styles.brandSubtitle}>A metaverse of Exide</h2>
                    <div className={styles.urldiv}>
                        www.exideindustries.com 
                    </div>
                </div>

                <div className={styles.logindiv}>
                    <img src={excidelogo} alt="Exide Logo" className={styles.exideLogo} />
                    <h1 className={styles.welcomeTitle}>Welcome</h1>
                    <h2 className={styles.welcomeSubtitle}>Please enter your details to get started</h2>

                    <form className={styles.signupForm} onSubmit={submitForm}>
                        <input type="text" className={styles.inputField} name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} />
                        <input type="email" className={styles.inputField} name="email" placeholder="Email Address" value={formData.email} onChange={handleInputChange} />
                        <input type="tel" className={styles.inputField} name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} />
                        <input type="password" className={styles.inputField} name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} /> 
                        <input type="password" className={styles.inputField} name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleInputChange} /> 
                        {passwordError && <p className={styles.errorMessage}>{passwordError}</p>}
                        <button className={styles.submitButton}>Sign Up</button>
                    </form>

                    <p className={styles.loginPrompt}>Already Have an Account?</p>
                    <Link to='/' className={styles.loginLink}>Log In</Link>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
