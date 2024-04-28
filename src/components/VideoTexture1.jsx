import React from 'react';
import { useVideoTexture } from '@react-three/drei';
import url from './video2.mp4'

const VideoTexture1 = () => {
  const texture = useVideoTexture(url);

  return <meshBasicMaterial map={texture} toneMapped={false} />;
};

export default VideoTexture1;