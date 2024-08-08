import { useState, useEffect, useCallback } from 'react';

export const useInput = () => {
  const [input, setInput] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    jump: false,
    shift: false,
  });

  const handleKeyDown = useCallback((e) => {
    switch (e.code) {
      case 'KeyW':
      case 'ArrowUp':
        setInput((prev) => ({ ...prev, forward: true }));
        break;
      case 'KeyS':
      case 'ArrowDown':
        setInput((prev) => ({ ...prev, backward: true }));
        break;
      case 'KeyA':
      case 'ArrowLeft':
        setInput((prev) => ({ ...prev, left: true }));
        break;
      case 'KeyD':
      case 'ArrowRight':
        setInput((prev) => ({ ...prev, right: true }));
        break;
      case 'Space':
        setInput((prev) => ({ ...prev, jump: true }));
        break;
      case 'ShiftLeft':
        setInput((prev) => ({ ...prev, shift: true }));
        break;
    }
  }, []);

  const handleKeyUp = useCallback((e) => {
    switch (e.code) {
      case 'KeyW':
      case 'ArrowUp':
        setInput((prev) => ({ ...prev, forward: false }));
        break;
      case 'KeyS':
      case 'ArrowDown':
        setInput((prev) => ({ ...prev, backward: false }));
        break;
      case 'KeyA':
      case 'ArrowLeft':
        setInput((prev) => ({ ...prev, left: false }));
        break;
      case 'KeyD':
      case 'ArrowRight':
        setInput((prev) => ({ ...prev, right: false }));
        break;
      case 'Space':
        setInput((prev) => ({ ...prev, jump: false }));
        break;
      case 'ShiftLeft':
        setInput((prev) => ({ ...prev, shift: false }));
        break;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  const updateInput = useCallback((inputName, value) => {
    setInput((prev) => ({ ...prev, [inputName]: value }));
  }, []);

  return { ...input, setInput: updateInput };
};