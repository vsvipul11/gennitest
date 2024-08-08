import React, { useEffect, useState, useRef } from 'react';
import { useInput } from "../../contexts/InputContext";

const MobileControlsOverlay = () => {
  const { updateInput } = useInput();
  const [isMobile, setIsMobile] = useState(false);
  const controlsRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    const controls = controlsRef.current;
    if (!controls || !isMobile) return;

    const handleTouchStart = (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      const target = document.elementFromPoint(touch.clientX, touch.clientY);
      const input = target.dataset.input;
      if (input) {
        updateInput(input, true);
      }
    };

    const handleTouchMove = (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      const target = document.elementFromPoint(touch.clientX, touch.clientY);
      if (target && target.dataset.input) {
        const newInput = target.dataset.input;
        updateInput(newInput, true);
      }
    };

    const handleTouchEnd = (e) => {
      e.preventDefault();
      updateInput('forward', false);
      updateInput('backward', false);
      updateInput('left', false);
      updateInput('right', false);
      updateInput('jump', false);
      updateInput('shift', false);
    };

    controls.addEventListener('touchstart', handleTouchStart, { passive: false });
    controls.addEventListener('touchmove', handleTouchMove, { passive: false });
    controls.addEventListener('touchend', handleTouchEnd, { passive: false });

    return () => {
      controls.removeEventListener('touchstart', handleTouchStart);
      controls.removeEventListener('touchmove', handleTouchMove);
      controls.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isMobile, updateInput]);

  if (!isMobile) return null;

  return (
    <div ref={controlsRef} style={styles.controlsContainer}>
      <div style={styles.button} data-input="forward">↑</div>
      <div style={styles.middleRow}>
        <div style={styles.button} data-input="left">←</div>
        <div style={styles.button} data-input="right">→</div>
      </div>
      <div style={styles.button} data-input="backward">↓</div>
      <div style={styles.jumpButton} data-input="jump">Jump</div>
      <div style={styles.runButton} data-input="shift">Run</div>
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
    touchAction: 'none',
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    userSelect: 'none',
  },
  jumpButton: {
    width: 80,
    height: 40,
    fontSize: 16,
    margin: '10px 5px',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    border: 'none',
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    userSelect: 'none',
  },
  runButton: {
    width: 80,
    height: 40,
    fontSize: 16,
    margin: '5px',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    border: 'none',
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    userSelect: 'none',
  },
};

export default MobileControlsOverlay;