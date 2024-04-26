import React, { useState } from 'react';
import { useLocation , useNavigate } from 'react-router-dom';
import styles from './Home.module.css'; 
import profilePic from './brandlogo.png';
import excidelogo from './excidelogo.png';
import { BsArrowLeft } from 'react-icons/bs';

const OTPPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state;
    const { name, email, phone, password, confirmPassword } = data;

    function redirect() {
        console.log('redirect');
        navigate('/congrats');
    }

    const [otpValue, setOtpValue] = useState('');

    const handleOtpChange = (e, index) => {
        const value = e.target.value;
        if (value.length > 1) {
            setOtpValue(prevOtp => prevOtp.slice(0, index) + value.charAt(value.length - 1) + prevOtp.slice(index + 1));
        } else if (value.length === 1) {
            setOtpValue(prevOtp => prevOtp.slice(0, index) + value + prevOtp.slice(index + 1));
            if (index < 3) {
                document.getElementById(`otpInput${index + 1}`).focus();
            }
        } else if (value.length === 0) {
            setOtpValue(prevOtp => prevOtp.slice(0, index) + value + prevOtp.slice(index + 1));
        }
    };

    const handleVerify = async () => {
        console.log(otpValue);
        try {
            const response = await fetch('https://testshant.vercel.app/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    name: name,
                    phoneNo: phone,
                    password: password,
                    confirmPass: confirmPassword,
                    otp: otpValue
                })
            });

            const data = await response.json();

            if (response.ok) {
                if (data.msg === 'true') {
                    redirect();
                } else {
                    alert('OTP did not match');
                }
            } else {
                console.log('Signup failed:', data.message);
                alert('OTP is wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error occurred while signing up:', error);
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

                <div className={styles.otpdDiv}>
                    <button className={styles.backButton}><BsArrowLeft /></button>
                    <h1 style={{color: 'black', fontSize: '1.2em', marginTop: '4em', fontWeight: '500'}}>
                        Please enter the OTP sent to your email
                    </h1>  
                    <div className={styles.otpInputContainer}>
                        <input id="otpInput0" type="text" className={styles.otpInput} value={otpValue[0]} onChange={(e) => handleOtpChange(e, 0)} maxLength={1} />
                        <input id="otpInput1" type="text" className={styles.otpInput} value={otpValue[1]} onChange={(e) => handleOtpChange(e, 1)} maxLength={1} />
                        <input id="otpInput2" type="text" className={styles.otpInput} value={otpValue[2]} onChange={(e) => handleOtpChange(e, 2)} maxLength={1} />
                        <input id="otpInput3" type="text" className={styles.otpInput} value={otpValue[3]} onChange={(e) => handleOtpChange(e, 3)} maxLength={1} />
                    </div>
                    <p style={{color: '#8F8F8F', fontSize: '1em', fontWeight: '200', marginTop: '1em'}}>
                        Didn't receive the code? <a className={styles.resendLink}>Resend Code</a>
                    </p>
                    <button type="submit" className={styles.verifyButton} onClick={handleVerify}>Verify</button> 
                </div>
            </div>
        </div>
    );
};

export default OTPPage;