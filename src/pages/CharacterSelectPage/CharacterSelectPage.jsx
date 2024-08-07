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
          <div className={styles.headerTitle}>
            <h1 className={styles.welcomeText}>Welcome to</h1>
            <h1 className={styles.exoverseText}>Exoverse</h1>
          </div>
          <div className={styles.headerButtons}>
            <button className={styles.profileButton}>
              Profile <FaUserAlt />
            </button>
            <button className={styles.exitButton}>
              <FaSignOutAlt />
            </button>
          </div>
        </div>
        <hr className={styles.line} />
        <div className={styles.characterCards}>
          <div 
            className={`${styles.characterCard} ${selectedCharacter === "Character1" ? styles.selectedCharacter : ''}`} 
            onClick={() => handleCharacterSelect("Character1")}
          >
            <img
              src={character1}
              alt="Character 1"
              className={styles.characterImage}
            />
            <p>Character 1</p>
          </div>
          <div 
            className={`${styles.characterCard} ${selectedCharacter === "Character2" ? styles.selectedCharacter : ''}`} 
            onClick={() => handleCharacterSelect("Character2")}
          >
            <img
              src={character2}
              alt="Character 2"
              className={styles.characterImage}
            />
            <p>Character 2</p>
          </div>
        </div>
        <button 
          className={styles.enterButton} 
          onClick={enterGame} 
          disabled={!selectedCharacter}
        >
          Enter
        </button>
      </div>
    </div>
  );
};

export default CharacterSelectPage;