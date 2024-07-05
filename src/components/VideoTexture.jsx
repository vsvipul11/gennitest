import React, { useRef, useEffect } from 'react';
import { useVideoTexture } from '@react-three/drei';

const VideoTexture = ({ url }) => {
  const videoRef = useRef();
  const texture = useVideoTexture(videoRef);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.crossOrigin = 'Anonymous'; // Ensure cross-origin permissions if needed
      video.loop = true; // Loop the video
      video.muted = false; // Ensure audio is not muted
      video.autoplay = true; // Autoplay the video
    }
  }, []);

  return (
    <>
      <video ref={videoRef} src={url} style={{ display: 'none' }} />
      <meshBasicMaterial map={texture} toneMapped={false} />
    </>
  );
};

export default VideoTexture;
