import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

const InputContext = createContext();

export const InputProvider = ({ children }) => {
  const [input, setInput] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    jump: false,
    shift: false,
  });

  const updateInput = useCallback((inputName, value) => {
    setInput((prev) => ({ ...prev, [inputName]: value }));
  }, []);

  const handleKeyDown = useCallback((e) => {
    switch (e.code) {
      case 'KeyW':
      case 'ArrowUp':
        updateInput('forward', true);
        break;
      case 'KeyS':
      case 'ArrowDown':
        updateInput('backward', true);
        break;
      case 'KeyA':
      case 'ArrowLeft':
        updateInput('left', true);
        break;
      case 'KeyD':
      case 'ArrowRight':
        updateInput('right', true);
        break;
      case 'Space':
        updateInput('jump', true);
        break;
      case 'ShiftLeft':
        updateInput('shift', true);
        break;
    }
  }, [updateInput]);

  const handleKeyUp = useCallback((e) => {
    switch (e.code) {
      case 'KeyW':
      case 'ArrowUp':
        updateInput('forward', false);
        break;
      case 'KeyS':
      case 'ArrowDown':
        updateInput('backward', false);
        break;
      case 'KeyA':
      case 'ArrowLeft':
        updateInput('left', false);
        break;
      case 'KeyD':
      case 'ArrowRight':
        updateInput('right', false);
        break;
      case 'Space':
        updateInput('jump', false);
        break;
      case 'ShiftLeft':
        updateInput('shift', false);
        break;
    }
  }, [updateInput]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  return (
    <InputContext.Provider value={{ input, updateInput }}>
      {children}
    </InputContext.Provider>
  );
};

export const useInput = () => useContext(InputContext);