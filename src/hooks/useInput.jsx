// src/hooks/useInput.js
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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleKeyDown = useCallback((e) => {
    if (e.code === 'KeyW') setInput((prev) => ({ ...prev, forward: true }));
    if (e.code === 'KeyS') setInput((prev) => ({ ...prev, backward: true }));
    if (e.code === 'KeyA') setInput((prev) => ({ ...prev, left: true }));
    if (e.code === 'KeyD') setInput((prev) => ({ ...prev, right: true }));
    if (e.code === 'Space') setInput((prev) => ({ ...prev, jump: true }));
    if (e.code === 'ShiftLeft') setInput((prev) => ({ ...prev, shift: true }));
  }, []);

  const handleKeyUp = useCallback((e) => {
    if (e.code === 'KeyW') setInput((prev) => ({ ...prev, forward: false }));
    if (e.code === 'KeyS') setInput((prev) => ({ ...prev, backward: false }));
    if (e.code === 'KeyA') setInput((prev) => ({ ...prev, left: false }));
    if (e.code === 'KeyD') setInput((prev) => ({ ...prev, right: false }));
    if (e.code === 'Space') setInput((prev) => ({ ...prev, jump: false }));
    if (e.code === 'ShiftLeft') setInput((prev) => ({ ...prev, shift: false }));
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  return { input, setInput, isMobile };
};