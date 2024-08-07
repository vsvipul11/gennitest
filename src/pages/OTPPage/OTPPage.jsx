import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Home.module.css'; 
import profilePic from './brandlogo.png';
import excidelogo from './excidelogo.png';
import { BsArrowLeft } from 'react-icons/bs';

const OTPPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state;
    const { name, email, phone, password, confirmPassword } = data;

    const [otpValue, setOtpValue] = useState(['', '', '', '']);

    const handleOtpChange = (e, index) => {
        const value = e.target.value;
        if (value.length <= 1) {
            const newOtpValue = [...otpValue];
            newOtpValue[index] = value;
            setOtpValue(newOtpValue);
            if (value.length === 1 && index < 3) {
                document.getElementById(`otpInput${index + 1}`).focus();
            }
        }
    };

    const handleVerify = async () => {
        const otp = otpValue.join('');
        console.log(otp);
        try {
            const response = await fetch('https://testshant.vercel.app/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email, name, phoneNo: phone, password, confirmPass: confirmPassword, otp
                })
            });

            const data = await response.json();

            if (response.ok) {
                if (data.msg === 'true') {
                    navigate('/congrats');
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
                    <img src={profilePic} alt="Brand Logo" className={styles.brandLogo} />
                    <h1 className={styles.brandTitle}>EXOVERSE</h1>
                    <h2 className={styles.brandSubtitle}>A metaverse of Exide</h2>
                    <div className={styles.urldiv}>
                        www.exideindustries.com 
                    </div>
                </div>

                <div className={styles.otpdDiv}>
                    <button className={styles.backButton} onClick={() => navigate(-1)}><BsArrowLeft /></button>
                    <h1 className={styles.otpTitle}>
                        Please enter the OTP sent to your email
                    </h1>  
                    <div className={styles.otpInputContainer}>
                        {[0, 1, 2, 3].map((index) => (
                            <input
                                key={index}
                                id={`otpInput${index}`}
                                type="text"
                                className={styles.otpInput}
                                value={otpValue[index]}
                                onChange={(e) => handleOtpChange(e, index)}
                                maxLength={1}
                            />
                        ))}
                    </div>
                    <p className={styles.resendText}>
                        Didn't receive the code? <a className={styles.resendLink}>Resend Code</a>
                    </p>
                    <button type="submit" className={styles.verifyButton} onClick={handleVerify}>Verify</button> 
                </div>
            </div>
        </div>
    );
};

export default OTPPage;