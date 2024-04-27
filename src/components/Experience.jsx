import { RigidBody } from "@react-three/rapier";
import { Platform} from "./Platform";
import {Exovee} from "./Exovee";
import { CharacterController } from "./CharacterController/CharacterController";
import { Manager } from "../hooks/useYuka";
import { JacobNpc } from "./Npcs";
import { YukaMesh } from "./Yuka/YukaMesh";
import { Environment } from '@react-three/drei'

export const Experience = ({ heroRef }) => {
  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight position={[0, 20, 20]} intensity={1} />
      {/* YUKA manager */}
      <Manager>
        {/* Hero character controller component */}
        <Environment background files="/scene.hdr" />
        <CharacterController reference={heroRef} position={[50,0,0]} />
        {/* Convai NPC Jacob component */}
        <JacobNpc name="Jacob" position={[0, 0, 0]} heroRef={heroRef} />
        {/* <YukaMesh /> */}
        <group>
          {/* Rapier triangler collider for stage */}
          {/* <RigidBody friction={2} colliders="trimesh" type="fixed"> */}
            <Exovee />
            
          {/* </RigidBody> */}
        </group>
      </Manager>
    </>
  );
};
