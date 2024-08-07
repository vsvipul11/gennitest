import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Loader, OrbitControls, Stats } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { useZustStore } from "./hooks/useStore";
import { Suspense, useRef } from "react";
import ChatBubble from "./components/chat/Chat";
import MobileControlsOverlay from './components/CharacterController/MobileControlsOverlay';

const testing = false;

function App() {
  const actions = useZustStore((state) => state.actions);
  const clientState = useZustStore((state) => state.clientState);
  const heroRef = useRef();
  actions.updateHeroRef(heroRef);

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <Suspense fallback={null}>
        <Canvas
          shadows
          camera={{ position: [300, 25, 25], fov: 55 }}
          onCreated={() => {
            actions.loadNavMesh("/platform_navmesh.glb");
          }}
        >
          <color attach="background" args={["#ececec"]} />
          {testing && <Stats />}
          {testing && <axesHelper args={[2]} />}
          <Physics debug={testing}>
            <Experience heroRef={heroRef} />
          </Physics>
        </Canvas>
      </Suspense>
      <Loader />
      {clientState && (
        <ChatBubble chatHistory={"Show"} client={clientState} />
      )}
      <MobileControlsOverlay />
    </div>
  );
}

export default App;