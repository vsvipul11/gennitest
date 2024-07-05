import React from 'react';
import { useVideoTexture } from '@react-three/drei';


const VideoTexture = ({ url }) => {

  const texture = useVideoTexture(url);

  return <meshBasicMaterial map={texture} toneMapped={false} />;
};

export default VideoTexture; 
