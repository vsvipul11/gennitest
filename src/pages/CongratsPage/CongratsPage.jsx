import React from 'react';
import styles from './Home.module.css';
import profilePic from './brandlogo.png';
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
                        className={styles.brandLogo}
                    />
                    <h1 className={styles.brandTitle}>EXOVERSE</h1>
                    <h2 className={styles.brandSubtitle}>A metaverse of Exide</h2>
                    <div className={styles.urldiv}>
                        www.exideindustries.com
                    </div>
                </div>

                <div className={styles.congratsDiv}>
                    <img
                        src={tick}
                        alt="Tick img"
                        className={styles.tickImage}
                    />
                    <h1 className={styles.congratsTitle}>
                        CONGRATULATIONS!
                    </h1>
                    <p className={styles.congratsMessage}>
                        You have successfully become part of our family.
                    </p>
                    <button type="submit" className={styles.proceedButton} onClick={redirect}>Proceed</button>
                </div>
            </div>
        </div>
    );
};

export default CongratsPage;