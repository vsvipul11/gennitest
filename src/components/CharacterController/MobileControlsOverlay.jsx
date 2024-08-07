// src/components/CharacterController/MobileControlsOverlay.jsx
import React from 'react';
import { useInput } from "../../contexts/InputContext";

const MobileControlsOverlay = () => {
  const { setInput, isMobile } = useInput();

  if (!isMobile) return null;

  const handleTouchStart = (inputName) => {
    setInput((prev) => ({ ...prev, [inputName]: true }));
  };

  const handleTouchEnd = (inputName) => {
    setInput((prev) => ({ ...prev, [inputName]: false }));
  };

  return (
    <div style={styles.controlsContainer}>
      <button
        style={styles.button}
        onTouchStart={() => handleTouchStart('forward')}
        onTouchEnd={() => handleTouchEnd('forward')}
      >
        ↑
      </button>
      <div style={styles.middleRow}>
        <button
          style={styles.button}
          onTouchStart={() => handleTouchStart('left')}
          onTouchEnd={() => handleTouchEnd('left')}
        >
          ←
        </button>
        <button
          style={styles.button}
          onTouchStart={() => handleTouchStart('right')}
          onTouchEnd={() => handleTouchEnd('right')}
        >
          →
        </button>
      </div>
      <button
        style={styles.button}
        onTouchStart={() => handleTouchStart('backward')}
        onTouchEnd={() => handleTouchEnd('backward')}
      >
        ↓
      </button>
      <button
        style={styles.jumpButton}
        onTouchStart={() => handleTouchStart('jump')}
        onTouchEnd={() => handleTouchEnd('jump')}
      >
        Jump
      </button>
      <button
        style={styles.runButton}
        onTouchStart={() => handleTouchStart('shift')}
        onTouchEnd={() => handleTouchEnd('shift')}
      >
        Run
      </button>
    </div>
  );
};

const styles = {
  controlsContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 1000,
  },
  middleRow: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    margin: '10px 0',
  },
  button: {
    width: 60,
    height: 60,
    fontSize: 24,
    margin: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    border: 'none',
    borderRadius: '50%',
    touchAction: 'none',
  },
  jumpButton: {
    width: 80,
    height: 40,
    fontSize: 16,
    margin: '10px 5px',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    border: 'none',
    borderRadius: 20,
    touchAction: 'none',
  },
  runButton: {
    width: 80,
    height: 40,
    fontSize: 16,
    margin: '5px',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    border: 'none',
    borderRadius: 20,
    touchAction: 'none',
  },
};

export default MobileControlsOverlay;