import React, { useState } from 'react';
import styles from './Home.module.css'; 
import profilePic from './brandlogo.png';
import excidelogo from './excidelogo.png';
import character1 from './char1.png';
import character2 from './character2.png';
import { useNavigate } from "react-router-dom";
import { FaUserAlt, FaSignOutAlt } from 'react-icons/fa';

const CharacterSelectPage = () => {
  const navigate = useNavigate();
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  
  const handleCharacterSelect = (character) => {
    setSelectedCharacter(character);
  };

  const enterGame = () => {
    if (selectedCharacter) {
      navigate('/experience');
    } else {
      alert("Please select a character first!");
    }
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.centerdiv1}>
        <div className={styles.header}>
          <div style={{display: 'flex' , flexDirection: 'column', width: '50%', marginLeft: '2em' }}>
            <h1 style={{color: 'white' , fontSize: '1.2em', marginBottom: '0em', marginTop: '1em'}}>Welcome to</h1>
            <h1 style={{color: 'white' , fontSize: '3.5em', marginTop: '0em', }} >Exoverse</h1>
          </div>
          <div style={{width: '50%', display: 'flex', justifyContent: 'flex-end', marginLeft: '2em' }}>
            <button style={{ width: '7em', height: '3em', margin:'2em', border: '0', borderRadius: '15px' }}>Profile   <FaUserAlt /></button>
            <button style={{ width: '5em', height: '3em', margin:'2em' , border: '0', borderRadius: '15px' }}><FaSignOutAlt /></button>
          </div>
        </div>
        <hr className={styles.line} />
        <div className={styles.characterCards}>
          <div style={{marginTop: '-8px' }} className={styles.characterCard} onClick={() => handleCharacterSelect("Character1")}>
            <img  
              src={character1}
              alt="Character 1"
              height="146"
              width="140"
            />
            <p>Character 1</p>
          </div>
          <div className={styles.characterCard} onClick={() => handleCharacterSelect("Character2")}>
            <img  
              src={character2}
              alt="Character 2"
              height="140"
              width="140"
           
            />
            <p>Character 2</p>
          </div>
        </div>
        <button className={styles.enterButton} onClick={enterGame} disabled={!selectedCharacter}>
          Enter
        </button>
      </div>
      {/* Conditionally render the CharacterController component */}
       </div>
  );
};

export default CharacterSelectPage;