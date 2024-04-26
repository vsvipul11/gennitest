import React from 'react';
import styles from './Home.module.css'; 

import profilePic from './brandlogo.png';
import excidelogo from './excidelogo.png';
import tick from './tck.png';
import { useNavigate } from "react-router-dom";

const CongratsPage = () => {
    const navigate = useNavigate();

    function redirect() {
        console.log('redirect');
        navigate('/characterSelect');
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

                <div className={styles.congratsDiv}>
                    <img  
                        src={tick}
                        alt="Tick img"
                        height="80"
                        width="80"
                    />
                    <h1 style={{color: 'black', fontSize: '2em', marginTop: '0.5em', fontWeight: '800'}}>
                        CONGRATULATIONS!
                    </h1>
                    <p style={{color: '#8F8F8F' , fontSize: '1em', marginTop: '1em'}}>
                        You have successfully become part of our family.
                    </p>
                    <button type="submit" className={styles.verifyButton} onClick={redirect}>Proceed</button> 
                </div>
            </div>
        </div>
    );
};

export default CongratsPage;