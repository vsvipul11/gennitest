
import React, { Suspense, useState } from "react";
import { Box,useGLTF, PerspectiveCamera , useAspect, useVideoTexture, useTexture } from '@react-three/drei'
import { Physics, RigidBody, CuboidCollider } from '@react-three/rapier'
import url from './vid.mp4'; 


// import {Char1} from "./Character/Char1";




export default function Exoverse(props) {
  
  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = url;
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.play();
    return vid;
  });


  const { nodes, materials } = useGLTF('/Exoverse.glb')
  return (
    // <RigidBody type="fixed" colliders="trimesh">
    <group {...props} dispose={null}>

<RigidBody type="fixed" name="floor">
        <Box position={[0, -12, 0]} args={[100, 10, 100]}>
          <meshStandardMaterial color="springgreen" />
        </Box>
      </RigidBody>
      <group position={[-17.093, 1.677, -14.211]} rotation={[-Math.PI / 2, 0, 0.938]} scale={[50.954, 34.351, 27.559]}>
        <mesh geometry={nodes.Battery001.geometry} material={materials.Battery_01} position={[0, 0, -0.01]} scale={[0.674, 1, 1.246]} />
        <group position={[0, 0, 0.006]} scale={[0.674, 1, 1.246]}>
          <mesh geometry={nodes.Cylinder006_1.geometry} material={materials['Knob+ive']} />
          <mesh geometry={nodes.Cylinder006_2.geometry} material={materials['Knob-ive']} />
        </group>
        <mesh geometry={nodes.Logo.geometry} material={materials.BatterySticker} position={[0, 0, -0.011]} scale={[0.888, 1, 1.41]} />
      </group>
      <group position={[-14.553, 1.677, -17.676]} rotation={[-Math.PI / 2, 0, 0.938]} scale={[50.954, 34.351, 27.559]}>
        <mesh geometry={nodes.Battery002.geometry} material={materials.Battery_01} position={[0, 0, -0.01]} scale={[0.597, 1, 1.246]} />
        <group position={[0, 0, 0.006]} scale={[0.597, 1, 1.246]}>
          <mesh geometry={nodes.Cylinder007_1.geometry} material={materials['Knob+ive']} />
          <mesh geometry={nodes.Cylinder007_2.geometry} material={materials['Knob-ive']} />
        </group>
        <mesh geometry={nodes.Logo001.geometry} material={materials['BatterySticker.001']} position={[0, 0, -0.011]} scale={[0.747, 1, 1.41]} />
      </group>
      <group position={[-14.553, 3.477, -17.676]} rotation={[-Math.PI / 2, 0, 0.938]} scale={[50.954, 34.351, 27.559]}>
        <mesh geometry={nodes.Battery003.geometry} material={materials.Battery_01} position={[0, 0, -0.01]} scale={[0.674, 1, 1.246]} />
        <group position={[0, 0, 0.006]} scale={[0.674, 1, 1.246]}>
          <mesh geometry={nodes.Cylinder008_1.geometry} material={materials['Knob+ive']} />
          <mesh geometry={nodes.Cylinder008_2.geometry} material={materials['Knob-ive']} />
        </group>
        <mesh geometry={nodes.Logo002.geometry} material={materials['BatterySticker.002']} position={[0, 0, -0.011]} scale={[0.864, 1, 1.41]} />
      </group>
      <group position={[-9.906, 1.677, -24.014]} rotation={[-Math.PI / 2, 0, 0.938]} scale={[50.954, 34.351, 27.559]}>
        <group position={[0, 0, -0.01]} scale={[0.674, 1, 1.246]}>
          <mesh geometry={nodes.Battery004_1.geometry} material={materials['Battery_01.002']} />
          <mesh geometry={nodes.Battery004_2.geometry} material={materials['Battery_01.001']} />
        </group>
        <mesh geometry={nodes.Battery005.geometry} material={materials['Battery_01.001']} position={[0, 0, -0.01]} scale={[0.674, 1, 1.246]} />
        <group position={[0, 0, 0.006]} scale={[0.674, 1, 1.246]}>
          <mesh geometry={nodes.Cylinder009_1.geometry} material={materials['Knob+ive']} />
          <mesh geometry={nodes.Cylinder009_2.geometry} material={materials['Knob-ive']} />
        </group>
        <mesh geometry={nodes.Logo003.geometry} material={materials['BatterySticker.003']} position={[0, 0, -0.011]} scale={[0.888, 1, 1.41]} />
      </group>
      <group position={[-12.426, 1.677, -20.576]} rotation={[-Math.PI / 2, 0, 0.938]} scale={[50.954, 34.351, 27.559]}>
        <group position={[0, 0, -0.01]} scale={[0.538, 1, 1.246]}>
          <mesh geometry={nodes.Battery006_1.geometry} material={materials['Battery_01.001']} />
          <mesh geometry={nodes.Battery006_2.geometry} material={materials['Battery_01.003']} />
        </group>
        <group position={[0, 0, 0.006]} scale={[0.538, 1, 1.246]}>
          <mesh geometry={nodes.Cylinder010_1.geometry} material={materials['Knob+ive']} />
          <mesh geometry={nodes.Cylinder010_2.geometry} material={materials['Knob-ive']} />
        </group>
        <mesh geometry={nodes.Logo004.geometry} material={materials['BatterySticker.004']} position={[0, 0, -0.011]} scale={[0.674, 1, 1.41]} />
      </group>
      <group position={[-19.551, 1.683, -11.057]} rotation={[-Math.PI / 2, 0, 0.926]} scale={[50.954, 34.351, 27.559]}>
        <mesh geometry={nodes.Battery007.geometry} material={materials['Battery_01.001']} position={[0, 0, -0.01]} scale={[0.674, 1, 1.246]} />
        <mesh geometry={nodes.Battery008.geometry} material={materials['Battery_01.002']} position={[0, 0, -0.01]} scale={[0.674, 1, 1.246]} />
        <group position={[0, 0, 0.006]} scale={[0.674, 1, 1.246]}>
          <mesh geometry={nodes.Cylinder011_1.geometry} material={materials['Knob+ive']} />
          <mesh geometry={nodes.Cylinder011_2.geometry} material={materials['Knob-ive']} />
        </group>
        <mesh geometry={nodes.Logo005.geometry} material={materials['BatterySticker.005']} position={[0, 0, -0.011]} scale={[0.888, 1, 1.41]} />
      </group>
      <group position={[-17.176, 3.453, -14.216]} rotation={[-Math.PI / 2, 0, 0.926]} scale={[50.954, 34.351, 27.559]}>
        <mesh geometry={nodes.Battery009.geometry} material={materials['Battery_01.001']} position={[0, 0, -0.01]} scale={[0.674, 1, 1.246]} />
        <mesh geometry={nodes.Battery010.geometry} material={materials['Battery_01.002']} position={[0, 0, -0.01]} scale={[0.674, 1, 1.246]} />
        <group position={[0, 0, 0.006]} scale={[0.674, 1, 1.246]}>
          <mesh geometry={nodes.Cylinder011_1.geometry} material={materials['Knob+ive']} />
          <mesh geometry={nodes.Cylinder011_2.geometry} material={materials['Knob-ive']} />
        </group>
        <mesh geometry={nodes.Logo006.geometry} material={materials['BatterySticker.005']} position={[0, 0, -0.011]} scale={[0.888, 1, 1.41]} />
      </group>
      <group position={[-19.504, 3.477, -10.924]} rotation={[-Math.PI / 2, 0, 0.938]} scale={[50.954, 34.351, 27.559]}>
        <mesh geometry={nodes.Battery011.geometry} material={materials.Battery_01} position={[0, 0, -0.01]} scale={[0.597, 1, 1.246]} />
        <group position={[0, 0, 0.006]} scale={[0.597, 1, 1.246]}>
          <mesh geometry={nodes.Cylinder007_1.geometry} material={materials['Knob+ive']} />
          <mesh geometry={nodes.Cylinder007_2.geometry} material={materials['Knob-ive']} />
        </group>
        <mesh geometry={nodes.Logo007.geometry} material={materials['BatterySticker.001']} position={[0, 0, -0.011]} scale={[0.747, 1, 1.41]} />
      </group>
      <group position={[-19.504, 5.262, -10.924]} rotation={[-Math.PI / 2, 0, 0.938]} scale={[50.954, 34.351, 27.559]}>
        <mesh geometry={nodes.Battery012.geometry} material={materials.Battery_01} position={[0, 0, -0.01]} scale={[0.674, 1, 1.246]} />
        <group position={[0, 0, 0.006]} scale={[0.674, 1, 1.246]}>
          <mesh geometry={nodes.Cylinder006_1.geometry} material={materials['Knob+ive']} />
          <mesh geometry={nodes.Cylinder006_2.geometry} material={materials['Knob-ive']} />
        </group>
        <mesh geometry={nodes.Logo008.geometry} material={materials.BatterySticker} position={[0, 0, -0.011]} scale={[0.888, 1, 1.41]} />
      </group>
      <group position={[-9.906, 3.46, -24.014]} rotation={[-Math.PI / 2, 0, 0.938]} scale={[50.954, 34.351, 27.559]}>
        <group position={[0, 0, -0.01]} scale={[0.538, 1, 1.246]}>
          <mesh geometry={nodes.Battery006_1.geometry} material={materials['Battery_01.001']} />
          <mesh geometry={nodes.Battery006_2.geometry} material={materials['Battery_01.003']} />
        </group>
        <group position={[0, 0, 0.006]} scale={[0.538, 1, 1.246]}>
          <mesh geometry={nodes.Cylinder010_1.geometry} material={materials['Knob+ive']} />
          <mesh geometry={nodes.Cylinder010_2.geometry} material={materials['Knob-ive']} />
        </group>
        <mesh geometry={nodes.Logo009.geometry} material={materials['BatterySticker.004']} position={[0, 0, -0.011]} scale={[0.674, 1, 1.41]} />
      </group>
      <group position={[-9.856, 5.258, -24.082]} rotation={[-Math.PI / 2, 0, 0.938]} scale={[50.954, 34.351, 27.559]}>
        <mesh geometry={nodes.Battery014.geometry} material={materials.Battery_01} position={[0, 0, -0.01]} scale={[0.674, 1, 1.246]} />
        <group position={[0, 0, 0.006]} scale={[0.674, 1, 1.246]}>
          <mesh geometry={nodes.Cylinder006_1.geometry} material={materials['Knob+ive']} />
          <mesh geometry={nodes.Cylinder006_2.geometry} material={materials['Knob-ive']} />
        </group>
        <mesh geometry={nodes.Logo010.geometry} material={materials.BatterySticker} position={[0, 0, -0.011]} scale={[0.888, 1, 1.41]} />
      </group>
      <group position={[-12.426, 5.259, -20.576]} rotation={[-Math.PI / 2, 0, 0.938]} scale={[50.954, 34.351, 27.559]}>
        <mesh geometry={nodes.Battery015.geometry} material={materials.Battery_01} position={[0, 0, -0.01]} scale={[0.674, 1, 1.246]} />
        <group position={[0, 0, 0.006]} scale={[0.674, 1, 1.246]}>
          <mesh geometry={nodes.Cylinder008_1.geometry} material={materials['Knob+ive']} />
          <mesh geometry={nodes.Cylinder008_2.geometry} material={materials['Knob-ive']} />
        </group>
        <mesh geometry={nodes.Logo011.geometry} material={materials['BatterySticker.002']} position={[0, 0, -0.011]} scale={[0.864, 1, 1.41]} />
      </group>
      <group position={[-17.167, 5.252, -14.11]} rotation={[-Math.PI / 2, 0, 0.938]} scale={[50.954, 34.351, 27.559]}>
        <mesh geometry={nodes.Battery016.geometry} material={materials.Battery_01} position={[0, 0, -0.01]} scale={[0.597, 1, 1.246]} />
        <group position={[0, 0, 0.006]} scale={[0.597, 1, 1.246]}>
          <mesh geometry={nodes.Cylinder007_1.geometry} material={materials['Knob+ive']} />
          <mesh geometry={nodes.Cylinder007_2.geometry} material={materials['Knob-ive']} />
        </group>
        <mesh geometry={nodes.Logo012.geometry} material={materials['BatterySticker.001']} position={[0, 0, -0.011]} scale={[0.747, 1, 1.41]} />
      </group>
      <group position={[-12.426, 3.467, -20.576]} rotation={[-Math.PI / 2, 0, 0.938]} scale={[50.954, 34.351, 27.559]}>
        <mesh geometry={nodes.Battery017.geometry} material={materials.Battery_01} position={[0, 0, -0.01]} scale={[0.597, 1, 1.246]} />
        <group position={[0, 0, 0.006]} scale={[0.597, 1, 1.246]}>
          <mesh geometry={nodes.Cylinder007_1.geometry} material={materials['Knob+ive']} />
          <mesh geometry={nodes.Cylinder007_2.geometry} material={materials['Knob-ive']} />
        </group>
        <mesh geometry={nodes.Logo013.geometry} material={materials['BatterySticker.001']} position={[0, 0, -0.011]} scale={[0.747, 1, 1.41]} />
      </group>
      <group position={[-14.545, 5.263, -17.687]} rotation={[-Math.PI / 2, 0, 0.938]} scale={[50.954, 34.351, 27.559]}>
        <group position={[0, 0, -0.01]} scale={[0.674, 1, 1.246]}>
          <mesh geometry={nodes.Battery004_1.geometry} material={materials['Battery_01.002']} />
          <mesh geometry={nodes.Battery004_2.geometry} material={materials['Battery_01.001']} />
        </group>
        <mesh geometry={nodes.Battery019.geometry} material={materials['Battery_01.001']} position={[0, 0, -0.01]} scale={[0.674, 1, 1.246]} />
        <group position={[0, 0, 0.006]} scale={[0.674, 1, 1.246]}>
          <mesh geometry={nodes.Cylinder009_1.geometry} material={materials['Knob+ive']} />
          <mesh geometry={nodes.Cylinder009_2.geometry} material={materials['Knob-ive']} />
        </group>
        <mesh geometry={nodes.Logo014.geometry} material={materials['BatterySticker.003']} position={[0, 0, -0.011]} scale={[0.888, 1, 1.41]} />
      </group>
      <group position={[5.173, 1.322, -25.288]} rotation={[-Math.PI / 2, 0, 0.011]} scale={[94.621, 63.789, 51.177]}>
        <mesh geometry={nodes.Battery020.geometry} material={materials['Battery_01.001']} position={[0, 0, -0.01]} scale={[0.674, 1, 1.246]} />
        <mesh geometry={nodes.Battery021.geometry} material={materials['Battery_01.002']} position={[0, 0, -0.01]} scale={[0.674, 1, 1.246]} />
        <group position={[0, 0, 0.006]} scale={[0.674, 1, 1.246]}>
          <mesh geometry={nodes.Cylinder021_1.geometry} material={materials['Knob+ive']} />
          <mesh geometry={nodes.Cylinder021_2.geometry} material={materials['Knob-ive']} />
        </group>
        <mesh geometry={nodes.Logo015.geometry} material={materials['BatterySticker.005']} position={[0, 0, -0.011]} scale={[0.888, 1, 1.41]} />
      </group>
      <group position={[-14.622, 1.677, 17.498]} rotation={[-Math.PI / 2, 0, 2.217]} scale={[50.954, 34.351, 27.559]}>
        <mesh geometry={nodes.Battery022.geometry} material={materials.Battery_01} position={[0, 0, -0.01]} scale={[0.674, 1, 1.246]} />
        <group position={[0, 0, 0.006]} scale={[0.674, 1, 1.246]}>
          <mesh geometry={nodes.Cylinder006_1.geometry} material={materials['Knob+ive']} />
          <mesh geometry={nodes.Cylinder006_2.geometry} material={materials['Knob-ive']} />
        </group>
        <mesh geometry={nodes.Logo016.geometry} material={materials.BatterySticker} position={[0, 0, -0.011]} scale={[0.888, 1, 1.41]} />
      </group>
      <group position={[-9.582, 1.677, 24.183]} rotation={[-Math.PI / 2, 0, 2.217]} scale={[50.954, 34.351, 27.559]}>
        <mesh geometry={nodes.Battery023.geometry} material={materials.Battery_01} position={[0, 0, -0.01]} scale={[0.597, 1, 1.246]} />
        <group position={[0, 0, 0.006]} scale={[0.597, 1, 1.246]}>
          <mesh geometry={nodes.Cylinder007_1.geometry} material={materials['Knob+ive']} />
          <mesh geometry={nodes.Cylinder007_2.geometry} material={materials['Knob-ive']} />
        </group>
        <mesh geometry={nodes.Logo017.geometry} material={materials['BatterySticker.001']} position={[0, 0, -0.011]} scale={[0.747, 1, 1.41]} />
      </group>
      <group position={[-14.622, 3.477, 17.498]} rotation={[-Math.PI / 2, 0, 2.217]} scale={[50.954, 34.351, 27.559]}>
        <mesh geometry={nodes.Battery024.geometry} material={materials.Battery_01} position={[0, 0, -0.01]} scale={[0.674, 1, 1.246]} />
        <group position={[0, 0, 0.006]} scale={[0.674, 1, 1.246]}>
          <mesh geometry={nodes.Cylinder008_1.geometry} material={materials['Knob+ive']} />
          <mesh geometry={nodes.Cylinder008_2.geometry} material={materials['Knob-ive']} />
        </group>
        <mesh geometry={nodes.Logo018.geometry} material={materials['BatterySticker.002']} position={[0, 0, -0.011]} scale={[0.864, 1, 1.41]} />
      </group>
      <group position={[-12.036, 1.677, 20.928]} rotation={[-Math.PI / 2, 0, 2.217]} scale={[50.954, 34.351, 27.559]}>
        <group position={[0, 0, -0.01]} scale={[0.674, 1, 1.246]}>
          <mesh geometry={nodes.Battery004_1.geometry} material={materials['Battery_01.002']} />
          <mesh geometry={nodes.Battery004_2.geometry} material={materials['Battery_01.001']} />
        </group>
        <mesh geometry={nodes.Battery026.geometry} material={materials['Battery_01.001']} position={[0, 0, -0.01]} scale={[0.674, 1, 1.246]} />
        <group position={[0, 0, 0.006]} scale={[0.674, 1, 1.246]}>
          <mesh geometry={nodes.Cylinder009_1.geometry} material={materials['Knob+ive']} />
          <mesh geometry={nodes.Cylinder009_2.geometry} material={materials['Knob-ive']} />
        </group>
        <mesh geometry={nodes.Logo019.geometry} material={materials['BatterySticker.003']} position={[0, 0, -0.011]} scale={[0.888, 1, 1.41]} />
      </group>
      <group position={[-16.787, 1.677, 14.626]} rotation={[-Math.PI / 2, 0, 2.217]} scale={[50.954, 34.351, 27.559]}>
        <group position={[0, 0, -0.01]} scale={[0.538, 1, 1.246]}>
          <mesh geometry={nodes.Battery006_1.geometry} material={materials['Battery_01.001']} />
          <mesh geometry={nodes.Battery006_2.geometry} material={materials['Battery_01.003']} />
        </group>
        <group position={[0, 0, 0.006]} scale={[0.538, 1, 1.246]}>
          <mesh geometry={nodes.Cylinder010_1.geometry} material={materials['Knob+ive']} />
          <mesh geometry={nodes.Cylinder010_2.geometry} material={materials['Knob-ive']} />
        </group>
        <mesh geometry={nodes.Logo020.geometry} material={materials['BatterySticker.004']} position={[0, 0, -0.011]} scale={[0.674, 1, 1.41]} />
      </group>
      <group position={[-19.353, 1.677, 11.222]} rotation={[-Math.PI / 2, 0, 2.205]} scale={[50.954, 34.351, 27.559]}>
        <mesh geometry={nodes.Battery028.geometry} material={materials['Battery_01.001']} position={[0, 0, -0.01]} scale={[0.674, 1, 1.246]} />
        <mesh geometry={nodes.Battery029.geometry} material={materials['Battery_01.002']} position={[0, 0, -0.01]} scale={[0.674, 1, 1.246]} />
        <group position={[0, 0, 0.006]} scale={[0.674, 1, 1.246]}>
          <mesh geometry={nodes.Cylinder011_1.geometry} material={materials['Knob+ive']} />
          <mesh geometry={nodes.Cylinder011_2.geometry} material={materials['Knob-ive']} />
        </group>
        <mesh geometry={nodes.Logo021.geometry} material={materials['BatterySticker.005']} position={[0, 0, -0.011]} scale={[0.888, 1, 1.41]} />
      </group>
      <group position={[-12.078, 3.459, 20.987]} rotation={[-Math.PI / 2, 0, 2.205]} scale={[50.954, 34.351, 27.559]}>
        <mesh geometry={nodes.Battery030.geometry} material={materials['Battery_01.001']} position={[0, 0, -0.01]} scale={[0.674, 1, 1.246]} />
        <mesh geometry={nodes.Battery031.geometry} material={materials['Battery_01.002']} position={[0, 0, -0.01]} scale={[0.674, 1, 1.246]} />
        <group position={[0, 0, 0.006]} scale={[0.674, 1, 1.246]}>
          <mesh geometry={nodes.Cylinder011_1.geometry} material={materials['Knob+ive']} />
          <mesh geometry={nodes.Cylinder011_2.geometry} material={materials['Knob-ive']} />
        </group>
        <mesh geometry={nodes.Logo022.geometry} material={materials['BatterySticker.005']} position={[0, 0, -0.011]} scale={[0.888, 1, 1.41]} />
      </group>
      <group position={[-9.582, 5.262, 24.183]} rotation={[-Math.PI / 2, 0, 2.217]} scale={[50.954, 34.351, 27.559]}>
        <group position={[0, 0, -0.01]} scale={[0.538, 1, 1.246]}>
          <mesh geometry={nodes.Battery006_1.geometry} material={materials['Battery_01.001']} />
          <mesh geometry={nodes.Battery006_2.geometry} material={materials['Battery_01.003']} />
        </group>
        <group position={[0, 0, 0.006]} scale={[0.538, 1, 1.246]}>
          <mesh geometry={nodes.Cylinder010_1.geometry} material={materials['Knob+ive']} />
          <mesh geometry={nodes.Cylinder010_2.geometry} material={materials['Knob-ive']} />
        </group>
        <mesh geometry={nodes.Logo023.geometry} material={materials['BatterySticker.004']} position={[0, 0, -0.011]} scale={[0.674, 1, 1.41]} />
      </group>
      <group position={[-9.582, 3.459, 24.183]} rotation={[-Math.PI / 2, 0, 2.217]} scale={[50.954, 34.351, 27.559]}>
        <mesh geometry={nodes.Battery033.geometry} material={materials.Battery_01} position={[0, 0, -0.01]} scale={[0.674, 1, 1.246]} />
        <group position={[0, 0, 0.006]} scale={[0.674, 1, 1.246]}>
          <mesh geometry={nodes.Cylinder006_1.geometry} material={materials['Knob+ive']} />
          <mesh geometry={nodes.Cylinder006_2.geometry} material={materials['Knob-ive']} />
        </group>
        <mesh geometry={nodes.Logo024.geometry} material={materials.BatterySticker} position={[0, 0, -0.011]} scale={[0.888, 1, 1.41]} />
      </group>
      <group position={[-19.353, 3.46, 11.222]} rotation={[-Math.PI / 2, 0, 2.217]} scale={[50.954, 34.351, 27.559]}>
        <group position={[0, 0, -0.01]} scale={[0.538, 1, 1.246]}>
          <mesh geometry={nodes.Battery006_1.geometry} material={materials['Battery_01.001']} />
          <mesh geometry={nodes.Battery006_2.geometry} material={materials['Battery_01.003']} />
        </group>
        <group position={[0, 0, 0.006]} scale={[0.538, 1, 1.246]}>
          <mesh geometry={nodes.Cylinder010_1.geometry} material={materials['Knob+ive']} />
          <mesh geometry={nodes.Cylinder010_2.geometry} material={materials['Knob-ive']} />
        </group>
        <mesh geometry={nodes.Logo025.geometry} material={materials['BatterySticker.004']} position={[0, 0, -0.011]} scale={[0.674, 1, 1.41]} />
      </group>
      <group position={[-19.404, 5.258, 11.154]} rotation={[-Math.PI / 2, 0, 2.217]} scale={[50.954, 34.351, 27.559]}>
        <mesh geometry={nodes.Battery035.geometry} material={materials.Battery_01} position={[0, 0, -0.01]} scale={[0.674, 1, 1.246]} />
        <group position={[0, 0, 0.006]} scale={[0.674, 1, 1.246]}>
          <mesh geometry={nodes.Cylinder006_1.geometry} material={materials['Knob+ive']} />
          <mesh geometry={nodes.Cylinder006_2.geometry} material={materials['Knob-ive']} />
        </group>
        <mesh geometry={nodes.Logo026.geometry} material={materials.BatterySticker} position={[0, 0, -0.011]} scale={[0.888, 1, 1.41]} />
      </group>
      <group position={[-16.787, 5.259, 14.626]} rotation={[-Math.PI / 2, 0, 2.217]} scale={[50.954, 34.351, 27.559]}>
        <mesh geometry={nodes.Battery036.geometry} material={materials.Battery_01} position={[0, 0, -0.01]} scale={[0.674, 1, 1.246]} />
        <group position={[0, 0, 0.006]} scale={[0.674, 1, 1.246]}>
          <mesh geometry={nodes.Cylinder008_1.geometry} material={materials['Knob+ive']} />
          <mesh geometry={nodes.Cylinder008_2.geometry} material={materials['Knob-ive']} />
        </group>
        <mesh geometry={nodes.Logo027.geometry} material={materials['BatterySticker.002']} position={[0, 0, -0.011]} scale={[0.864, 1, 1.41]} />
      </group>
      <group position={[-11.961, 5.252, 21.028]} rotation={[-Math.PI / 2, 0, 2.217]} scale={[50.954, 34.351, 27.559]}>
        <mesh geometry={nodes.Battery037.geometry} material={materials.Battery_01} position={[0, 0, -0.01]} scale={[0.597, 1, 1.246]} />
        <group position={[0, 0, 0.006]} scale={[0.597, 1, 1.246]}>
          <mesh geometry={nodes.Cylinder007_1.geometry} material={materials['Knob+ive']} />
          <mesh geometry={nodes.Cylinder007_2.geometry} material={materials['Knob-ive']} />
        </group>
        <mesh geometry={nodes.Logo028.geometry} material={materials['BatterySticker.001']} position={[0, 0, -0.011]} scale={[0.747, 1, 1.41]} />
      </group>
      <group position={[-16.787, 3.467, 14.626]} rotation={[-Math.PI / 2, 0, 2.217]} scale={[50.954, 34.351, 27.559]}>
        <mesh geometry={nodes.Battery038.geometry} material={materials.Battery_01} position={[0, 0, -0.01]} scale={[0.597, 1, 1.246]} />
        <group position={[0, 0, 0.006]} scale={[0.597, 1, 1.246]}>
          <mesh geometry={nodes.Cylinder007_1.geometry} material={materials['Knob+ive']} />
          <mesh geometry={nodes.Cylinder007_2.geometry} material={materials['Knob-ive']} />
        </group>
        <mesh geometry={nodes.Logo029.geometry} material={materials['BatterySticker.001']} position={[0, 0, -0.011]} scale={[0.747, 1, 1.41]} />
      </group>
      <group position={[-14.631, 5.263, 17.487]} rotation={[-Math.PI / 2, 0, 2.217]} scale={[50.954, 34.351, 27.559]}>
        <group position={[0, 0, -0.01]} scale={[0.674, 1, 1.246]}>
          <mesh geometry={nodes.Battery004_1.geometry} material={materials['Battery_01.002']} />
          <mesh geometry={nodes.Battery004_2.geometry} material={materials['Battery_01.001']} />
        </group>
        <mesh geometry={nodes.Battery040.geometry} material={materials['Battery_01.001']} position={[0, 0, -0.01]} scale={[0.674, 1, 1.246]} />
        <group position={[0, 0, 0.006]} scale={[0.674, 1, 1.246]}>
          <mesh geometry={nodes.Cylinder009_1.geometry} material={materials['Knob+ive']} />
          <mesh geometry={nodes.Cylinder009_2.geometry} material={materials['Knob-ive']} />
        </group>
        <mesh geometry={nodes.Logo030.geometry} material={materials['BatterySticker.003']} position={[0, 0, -0.011]} scale={[0.888, 1, 1.41]} />
      </group>
      <group position={[-7.955, 5.252, -26.674]} rotation={[-Math.PI / 2, 0, 0.938]} scale={[50.954, 34.351, 27.559]}>
        <mesh geometry={nodes.Battery041.geometry} material={materials.Battery_01} position={[0, 0, -0.01]} scale={[0.597, 1, 1.246]} />
        <group position={[0, 0, 0.006]} scale={[0.597, 1, 1.246]}>
          <mesh geometry={nodes.Cylinder007_1.geometry} material={materials['Knob+ive']} />
          <mesh geometry={nodes.Cylinder007_2.geometry} material={materials['Knob-ive']} />
        </group>
        <mesh geometry={nodes.Logo031.geometry} material={materials['BatterySticker.001']} position={[0, 0, -0.011]} scale={[0.747, 1, 1.41]} />
      </group>
      <group position={[-7.842, 1.659, -26.631]} rotation={[-Math.PI / 2, 0, 0.926]} scale={[50.954, 34.351, 27.559]}>
        <mesh geometry={nodes.Battery042.geometry} material={materials['Battery_01.001']} position={[0, 0, -0.01]} scale={[0.674, 1, 1.246]} />
        <mesh geometry={nodes.Battery043.geometry} material={materials['Battery_01.002']} position={[0, 0, -0.01]} scale={[0.674, 1, 1.246]} />
        <group position={[0, 0, 0.006]} scale={[0.674, 1, 1.246]}>
          <mesh geometry={nodes.Cylinder011_1.geometry} material={materials['Knob+ive']} />
          <mesh geometry={nodes.Cylinder011_2.geometry} material={materials['Knob-ive']} />
        </group>
        <mesh geometry={nodes.Logo032.geometry} material={materials['BatterySticker.005']} position={[0, 0, -0.011]} scale={[0.888, 1, 1.41]} />
      </group>
      <group position={[-7.928, 3.477, -26.712]} rotation={[-Math.PI / 2, 0, 0.938]} scale={[50.954, 34.351, 27.559]}>
        <mesh geometry={nodes.Battery044.geometry} material={materials.Battery_01} position={[0, 0, -0.01]} scale={[0.674, 1, 1.246]} />
        <group position={[0, 0, 0.006]} scale={[0.674, 1, 1.246]}>
          <mesh geometry={nodes.Cylinder008_1.geometry} material={materials['Knob+ive']} />
          <mesh geometry={nodes.Cylinder008_2.geometry} material={materials['Knob-ive']} />
        </group>
        <mesh geometry={nodes.Logo033.geometry} material={materials['BatterySticker.002']} position={[0, 0, -0.011]} scale={[0.864, 1, 1.41]} />
      </group>
      <group position={[-7.623, 1.677, 26.783]} rotation={[-Math.PI / 2, 0, 2.217]} scale={[50.954, 34.351, 27.559]}>
        <group position={[0, 0, -0.01]} scale={[0.538, 1, 1.246]}>
          <mesh geometry={nodes.Battery006_1.geometry} material={materials['Battery_01.001']} />
          <mesh geometry={nodes.Battery006_2.geometry} material={materials['Battery_01.003']} />
        </group>
        <group position={[0, 0, 0.006]} scale={[0.538, 1, 1.246]}>
          <mesh geometry={nodes.Cylinder010_1.geometry} material={materials['Knob+ive']} />
          <mesh geometry={nodes.Cylinder010_2.geometry} material={materials['Knob-ive']} />
        </group>
        <mesh geometry={nodes.Logo034.geometry} material={materials['BatterySticker.004']} position={[0, 0, -0.011]} scale={[0.674, 1, 1.41]} />
      </group>
      <group position={[-7.623, 3.461, 26.783]} rotation={[-Math.PI / 2, 0, 2.217]} scale={[50.954, 34.351, 27.559]}>
        <group position={[0, 0, -0.01]} scale={[0.674, 1, 1.246]}>
          <mesh geometry={nodes.Battery004_1.geometry} material={materials['Battery_01.002']} />
          <mesh geometry={nodes.Battery004_2.geometry} material={materials['Battery_01.001']} />
        </group>
        <mesh geometry={nodes.Battery047.geometry} material={materials['Battery_01.001']} position={[0, 0, -0.01]} scale={[0.674, 1, 1.246]} />
        <group position={[0, 0, 0.006]} scale={[0.674, 1, 1.246]}>
          <mesh geometry={nodes.Cylinder009_1.geometry} material={materials['Knob+ive']} />
          <mesh geometry={nodes.Cylinder009_2.geometry} material={materials['Knob-ive']} />
        </group>
        <mesh geometry={nodes.Logo035.geometry} material={materials['BatterySticker.003']} position={[0, 0, -0.011]} scale={[0.888, 1, 1.41]} />
      </group>
      <group position={[-7.636, 5.261, 26.765]} rotation={[-Math.PI / 2, 0, 2.217]} scale={[50.954, 34.351, 27.559]}>
        <mesh geometry={nodes.Battery048.geometry} material={materials.Battery_01} position={[0, 0, -0.01]} scale={[0.597, 1, 1.246]} />
        <group position={[0, 0, 0.006]} scale={[0.597, 1, 1.246]}>
          <mesh geometry={nodes.Cylinder007_1.geometry} material={materials['Knob+ive']} />
          <mesh geometry={nodes.Cylinder007_2.geometry} material={materials['Knob-ive']} />
        </group>
        <mesh geometry={nodes.Logo036.geometry} material={materials['BatterySticker.001']} position={[0, 0, -0.011]} scale={[0.747, 1, 1.41]} />
      </group>
      {/* <Assistant position={[6.806, 0.719, 14.473]} /> */}
      <group position={[6.806, 0.719, 14.473]} rotation={[-Math.PI / 2, 0, 0]} scale={[39.773, 43.941, 67.529]}>
        <mesh geometry={nodes.Chai.geometry} material={materials.Metal} position={[0.005, 0, -0.011]} scale={[2.514, 2.276, 1.481]} />
        <mesh geometry={nodes.Plane001.geometry} material={materials.Chair} position={[0.008, 0, -0.001]} scale={[1.622, 1.468, 0.955]} />
      </group>
      <group position={[2.88, 0.719, 14.473]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[39.773, 43.941, 67.529]}>
        <mesh geometry={nodes.Plane003.geometry} material={materials.Chair} position={[0.008, 0, -0.001]} scale={[1.622, 1.468, 0.955]} />
        <mesh geometry={nodes.Chai001.geometry} material={materials.Metal} position={[0.005, 0, -0.011]} scale={[2.514, 2.276, 1.481]} />
      </group>
      <group position={[4.788, 0.719, 12.286]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[39.773, 43.941, 67.529]}>
        <mesh geometry={nodes.Plane004.geometry} material={materials.Chair} position={[0.008, 0, -0.001]} scale={[1.622, 1.468, 0.955]} />
        <mesh geometry={nodes.Chai002.geometry} material={materials.Metal} position={[0.005, 0, -0.011]} scale={[2.514, 2.276, 1.481]} />
      </group>
      <group position={[4.788, 0.719, 16.683]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[39.773, 43.941, 67.529]}>
        <mesh geometry={nodes.Plane005.geometry} material={materials.Chair} position={[0.008, 0, -0.001]} scale={[1.622, 1.468, 0.955]} />
        <mesh geometry={nodes.Chai003.geometry} material={materials.Metal} position={[0.005, 0, -0.011]} scale={[2.514, 2.276, 1.481]} />
      </group>
      {/* <Assistant position={[-17.231, 0, 0]} rotation={[0, Math.PI / 2, 0]}  /> */}
      <group position={[-17.931, 0.719, 0]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[39.773, 43.941, 67.529]}>
        <mesh geometry={nodes.Plane006.geometry} material={materials.Chair} position={[0.008, 0, -0.001]} scale={[1.622, 1.468, 0.955]} />
        <mesh geometry={nodes.Chai004.geometry} material={materials.Metal} position={[0.005, 0, -0.011]} scale={[2.514, 2.276, 1.481]} />
      </group>
      <group position={[15.602, 0, 23.048]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Circle005.geometry} material={materials.Windows} />
        <mesh geometry={nodes.Circle006.geometry} material={materials.Plinth} />
      </group>
      <group position={[15.602, 0, 14.514]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100}>
        <mesh geometry={nodes.Circle008.geometry} material={materials.Windows} />
        <mesh geometry={nodes.Circle009.geometry} material={materials.Plinth} />
      </group>
      <group position={[14.177, 3.139, -28.25]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={147.762}>
        <mesh geometry={nodes.Plane017.geometry} material={materials.PhotoFrame} position={[0, 0.001, 0]} />
      </group>
      <group position={[-2.2, 3.137, -28.349]} rotation={[-Math.PI / 2, 0, 0]} scale={140.741}>
        <mesh geometry={nodes.Founder_1.geometry} material={materials.photo} />
        <mesh geometry={nodes.Founder_2.geometry} material={materials.PhotoFrame} />
      </group>
      <group position={[5.1, 7.125, -17.064]} rotation={[Math.PI, 0, 0]} scale={220}>
        <group position={[0, 0.009, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.001}>
          <group position={[-0.07, -0.019, 5.286]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[0.068, -5.245, 0.017]} rotation={[-Math.PI, -Math.PI / 3, -Math.PI]}>
              <mesh geometry={nodes['111_Tros_0'].geometry} material={materials.Tros} position={[0, 0.478, 0]} />
            </group>
            <group position={[0.068, 5.064, 0.017]} rotation={[Math.PI / 2, 0, Math.PI / 6]} scale={0.731}>
              <group position={[5.677, 0, 0]}>
                <mesh geometry={nodes.Egg003_Diod_light_0.geometry} material={materials.Diod_light} />
                <mesh geometry={nodes.Egg003_Gold_polish_0.geometry} material={materials.Gold_polish} />
              </group>
            </group>
            <group position={[0.068, 2.621, 0.017]} rotation={[Math.PI / 2, 0, 2.077]} scale={0.731}>
              <group position={[5.677, 0, 0]}>
                <mesh geometry={nodes.Egg004_Diod_light_0.geometry} material={materials.Diod_light} />
                <mesh geometry={nodes.Egg004_Gold_polish_0.geometry} material={materials.Gold_polish} />
              </group>
            </group>
            <group position={[0.068, -4.154, 0.017]} rotation={[-Math.PI, -Math.PI / 3, -Math.PI]} scale={[0.819, 1, 0.819]}>
              <mesh geometry={nodes.Object001_Gold_polish_0.geometry} material={materials.Gold_polish} position={[0, 0.478, 0]} />
            </group>
            <mesh geometry={nodes.Cylinder001_Gold_polish_0.geometry} material={materials.Gold_polish} position={[0.068, -3.71, 0.017]} rotation={[0, -Math.PI / 6, 0]} scale={[0.776, 1, 0.776]} />
          </group>
        </group>
      </group>
      <group position={[5.1, 7.125, 14.578]} rotation={[Math.PI, 0, 0]} scale={220}>
        <group position={[0, 0.009, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.001}>
          <group position={[-0.07, -0.019, 5.286]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[0.068, -5.245, 0.017]} rotation={[-Math.PI, -Math.PI / 3, -Math.PI]}>
              <mesh geometry={nodes['111_Tros_0001'].geometry} material={materials.Tros} position={[0, 0.478, 0]} />
            </group>
            <group position={[0.068, 5.064, 0.017]} rotation={[Math.PI / 2, 0, Math.PI / 6]} scale={0.731}>
              <group position={[5.677, 0, 0]}>
                <mesh geometry={nodes.Egg003_Diod_light_0001.geometry} material={materials.Diod_light} />
                <mesh geometry={nodes.Egg003_Gold_polish_0001.geometry} material={materials.Gold_polish} />
              </group>
            </group>
            <group position={[0.068, 2.621, 0.017]} rotation={[Math.PI / 2, 0, 2.077]} scale={0.731}>
              <group position={[5.677, 0, 0]}>
                <mesh geometry={nodes.Egg004_Diod_light_0001.geometry} material={materials.Diod_light} />
                <mesh geometry={nodes.Egg004_Gold_polish_0001.geometry} material={materials.Gold_polish} />
              </group>
            </group>
            <group position={[0.068, -4.154, 0.017]} rotation={[-Math.PI, -Math.PI / 3, -Math.PI]} scale={[0.819, 1, 0.819]}>
              <mesh geometry={nodes.Object001_Gold_polish_0001.geometry} material={materials.Gold_polish} position={[0, 0.478, 0]} />
            </group>
            <mesh geometry={nodes.Cylinder001_Gold_polish_0001.geometry} material={materials.Gold_polish} position={[0.068, -3.71, 0.017]} rotation={[0, -Math.PI / 6, 0]} scale={[0.776, 1, 0.776]} />
          </group>
        </group>
      </group>
      <group position={[-10.823, 7.125, 0]} rotation={[Math.PI, 0, 0]} scale={220}>
        <group position={[0, 0.009, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.001}>
          <group position={[-0.07, -0.019, 5.286]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[0.068, -5.245, 0.017]} rotation={[-Math.PI, -Math.PI / 3, -Math.PI]}>
              <mesh geometry={nodes['111_Tros_0002'].geometry} material={materials.Tros} position={[0, 0.478, 0]} />
            </group>
            <group position={[0.068, 5.064, 0.017]} rotation={[Math.PI / 2, 0, Math.PI / 6]} scale={0.731}>
              <group position={[5.677, 0, 0]}>
                <mesh geometry={nodes.Egg003_Diod_light_0002.geometry} material={materials.Diod_light} />
                <mesh geometry={nodes.Egg003_Gold_polish_0002.geometry} material={materials.Gold_polish} />
              </group>
            </group>
            <group position={[0.068, 2.621, 0.017]} rotation={[Math.PI / 2, 0, 2.077]} scale={0.731}>
              <group position={[5.677, 0, 0]}>
                <mesh geometry={nodes.Egg004_Diod_light_0002.geometry} material={materials.Diod_light} />
                <mesh geometry={nodes.Egg004_Gold_polish_0002.geometry} material={materials.Gold_polish} />
              </group>
            </group>
            <group position={[0.068, -4.154, 0.017]} rotation={[-Math.PI, -Math.PI / 3, -Math.PI]} scale={[0.819, 1, 0.819]}>
              <mesh geometry={nodes.Object001_Gold_polish_0002.geometry} material={materials.Gold_polish} position={[0, 0.478, 0]} />
            </group>
            <mesh geometry={nodes.Cylinder001_Gold_polish_0002.geometry} material={materials.Gold_polish} position={[0.068, -3.71, 0.017]} rotation={[0, -Math.PI / 6, 0]} scale={[0.776, 1, 0.776]} />
          </group>
        </group>
      </group>
      <group position={[5.041, 7.204, 0]} rotation={[Math.PI, 0, 0]} scale={220}>
        <group position={[0, 0.011, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.001}>
          <group position={[-0.07, -0.019, 5.286]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[-0.017, -5.245, -0.029]} rotation={[Math.PI, -0.873, -Math.PI]}>
              <mesh geometry={nodes['111_Tros_0003'].geometry} material={materials['Tros.001']} position={[0, 0.478, 0]} />
            </group>
            <group position={[-0.017, 5.064, -0.029]} rotation={[Math.PI / 2, 0, 0.698]} scale={0.731}>
              <group position={[5.677, 0, 0]}>
                <mesh geometry={nodes.Egg003_Diod_light_0003.geometry} material={materials['Diod_light.001']} />
                <mesh geometry={nodes.Egg003_Gold_polish_0003.geometry} material={materials['Gold_polish.001']} />
              </group>
            </group>
            <group position={[-0.017, 2.621, -0.029]} rotation={[Math.PI / 2, 0, 2.251]} scale={0.731}>
              <group position={[5.677, 0, 0]}>
                <mesh geometry={nodes.Egg004_Diod_light_0003.geometry} material={materials['Diod_light.001']} />
                <mesh geometry={nodes.Egg004_Gold_polish_0003.geometry} material={materials['Gold_polish.001']} />
              </group>
            </group>
            <group position={[-0.017, 0.193, -0.029]} rotation={[Math.PI / 2, 0, 2.862]} scale={0.731}>
              <group position={[5.677, 0, 0]}>
                <mesh geometry={nodes.Egg005_Diod_light_0.geometry} material={materials['Diod_light.001']} />
                <mesh geometry={nodes.Egg005_Gold_polish_0.geometry} material={materials['Gold_polish.001']} />
              </group>
            </group>
            <group position={[-0.017, -5.229, -0.029]} rotation={[Math.PI, -0.873, -Math.PI]}>
              <mesh geometry={nodes.Object001_Gold_polish_0003.geometry} material={materials['Gold_polish.001']} position={[0, 0.478, 0]} />
            </group>
            <mesh geometry={nodes.Cylinder001_Gold_polish_0003.geometry} material={materials['Gold_polish.001']} position={[-0.017, -4.785, -0.029]} rotation={[0, -0.698, 0]} />
          </group>
        </group>
      </group>
      <group position={[2.484, 0.022, -23.174]} rotation={[Math.PI, 0.976, -Math.PI]} scale={2000}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh geometry={nodes.polySurface3_inicio_spot_0.geometry} material={materials.inicio_spot} />
          <mesh geometry={nodes.polySurface3_luz_0.geometry} material={materials.material} position={[0, 0.009, 0.005]} />
          <mesh geometry={nodes.polySurface3_spot_0.geometry} material={materials.spot} />
          <mesh geometry={nodes.polySurface3_suporte_0.geometry} material={materials.suporte} />
        </group>
      </group>
      <group position={[7.824, 0.022, -23.174]} rotation={[Math.PI, -0.857, Math.PI]} scale={[2000.001, 2000, 2000]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh geometry={nodes.polySurface3_luz_0001.geometry} material={materials.material} position={[0, 0.01, 0.004]} />
          <mesh geometry={nodes.polySurface3_inicio_spot_0001.geometry} material={materials.inicio_spot} />
          <mesh geometry={nodes.polySurface3_spot_0001.geometry} material={materials.spot} />
          <mesh geometry={nodes.polySurface3_suporte_0001.geometry} material={materials.suporte} />
        </group>
      </group>
      <group position={[-16.375, 1.024, -3.235]} rotation={[Math.PI, Math.PI / 2, 0]} scale={162.617}>
        <mesh geometry={nodes['macpro-material'].geometry} material={materials['macpro.001']} />
        <mesh geometry={nodes['macpro_keybord_and_mouse-material'].geometry} material={materials['macpro_keybord_and_mouse.001']} />
        <mesh geometry={nodes['macpro_monitor_001-material'].geometry} material={materials['macpro_monitor.002']} rotation={[0, -Math.PI / 9, 0]} />
        <mesh geometry={nodes['macpro_keybord_and_mouse-material001'].geometry} material={materials['macpro_keybord_and_mouse.001']} />
      </group>
      <group position={[-16.375, 1.024, 3.659]} rotation={[0, -Math.PI / 2, 0]} scale={-162.617}>
        <mesh geometry={nodes['macpro-material001'].geometry} material={materials['Image_0.004']} />
        <mesh geometry={nodes['macpro_keybord_and_mouse-material002'].geometry} material={materials['macpro_keybord_and_mouse.001']} />
        <mesh geometry={nodes['macpro_monitor_001-material001'].geometry} material={materials['macpro_monitor.002']} rotation={[0, -Math.PI / 9, 0]} />
        <mesh geometry={nodes['macpro_keybord_and_mouse-material003'].geometry} material={materials['macpro_keybord_and_mouse.001']} />
      </group>
      <group position={[20.352, 0.701, 27.941]} rotation={[Math.PI, 0, 0]} scale={100}>
        <mesh geometry={nodes.Object_4.geometry} material={materials.arch_books__3} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.arch_books_front} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.arch_books__4} />
        <mesh geometry={nodes.Object_7004.geometry} material={materials.arch_books_rear} />
      </group>
      <group position={[20.165, 1.373, 28.174]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={22.429}>
        <group position={[0, 0, -0.003]}>
          <mesh geometry={nodes.Buku1_0.geometry} material={materials.BookPaper} />
          <mesh geometry={nodes.Buku1_0001.geometry} material={materials.BookPaper} position={[0.011, -0.032, -0.014]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
          <mesh geometry={nodes.Buku1_1.geometry} material={materials.BookCover1} />
          <mesh geometry={nodes.Buku1_1001.geometry} material={materials.BookCover1} position={[0.011, -0.032, -0.014]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
        </group>
        <group position={[-0.001, 0, -0.001]}>
          <mesh geometry={nodes.Buku2_0.geometry} material={materials.BookPaper} />
          <mesh geometry={nodes.Buku2_0001.geometry} material={materials.BookPaper} position={[0.042, -0.031, -0.017]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
          <mesh geometry={nodes.Buku2_1.geometry} material={materials.BookCover2} />
          <mesh geometry={nodes.Buku2_1001.geometry} material={materials.BookCover2} position={[0.042, -0.031, -0.017]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
        </group>
        <group position={[0, 0, 0.001]}>
          <mesh geometry={nodes.Buku3_0.geometry} material={materials.BookPaper} />
          <mesh geometry={nodes.Buku3_0001.geometry} material={materials.BookPaper} position={[0.011, -0.03, -0.017]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
          <mesh geometry={nodes.Buku3_1.geometry} material={materials.BookCover3} />
          <mesh geometry={nodes.Buku3_1001.geometry} material={materials.BookCover3} position={[0.011, -0.03, -0.017]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
        </group>
        <group position={[-0.001, 0, 0.028]}>
          <mesh geometry={nodes.Buku4_0.geometry} material={materials.BookPaper} />
          <mesh geometry={nodes.Buku4_1.geometry} material={materials.BookCover4} />
        </group>
        <group position={[-0.001, 0, 0.026]}>
          <mesh geometry={nodes.Buku5_0.geometry} material={materials.BookPaper} />
          <mesh geometry={nodes.Buku5_1.geometry} material={materials.BookCover5} />
        </group>
        <group position={[0, 0, 0.024]}>
          <mesh geometry={nodes.Buku6_0.geometry} material={materials.BookPaper} />
          <mesh geometry={nodes.Buku6_1.geometry} material={materials.BookCover6} />
        </group>
        <group position={[-0.001, 0, 0.009]} rotation={[-Math.PI, 0, -Math.PI]}>
          <mesh geometry={nodes.Buku7_0.geometry} material={materials.BookPaper} />
          <mesh geometry={nodes.Buku7_0001.geometry} material={materials.BookPaper} position={[0, 0.03, -0.022]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Buku7_1.geometry} material={materials.BookCover7} />
          <mesh geometry={nodes.Buku7_1001.geometry} material={materials.BookCover7} position={[0, 0.03, -0.022]} rotation={[Math.PI / 2, 0, 0]} />
        </group>
        <group position={[0, 0, 0.01]}>
          <mesh geometry={nodes.Buku8_0.geometry} material={materials.BookPaper} />
          <mesh geometry={nodes.Buku8_1.geometry} material={materials.BookCover8} />
        </group>
        <group position={[0, 0, 0.012]}>
          <mesh geometry={nodes.Buku9_0.geometry} material={materials.BookPaper} />
          <mesh geometry={nodes.Buku9_1.geometry} material={materials.BookCover9} />
        </group>
        <group position={[-0.001, 0, 0.011]}>
          <mesh geometry={nodes.Buku10_0.geometry} material={materials.BookPaper} />
          <mesh geometry={nodes.Buku10_1.geometry} material={materials.BookCover10} />
        </group>
        <group position={[0, 0, 0.021]}>
          <mesh geometry={nodes.Buku11_0.geometry} material={materials.BookPaper} />
          <mesh geometry={nodes.Buku11_0001.geometry} material={materials.BookPaper} position={[0.034, 0, -0.04]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
          <mesh geometry={nodes.Buku11_1.geometry} material={materials.BookCover11} />
          <mesh geometry={nodes.Buku11_1001.geometry} material={materials.BookCover11} position={[0.034, 0, -0.04]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
        </group>
        <group position={[-0.001, 0, -0.005]} scale={[1, 1, 1.459]}>
          <mesh geometry={nodes.Buku12_0.geometry} material={materials.BookPaper} />
          <mesh geometry={nodes.Buku12_1.geometry} material={materials.BookCover12} />
        </group>
      </group>
      <group position={[19.854, 0, 6.865]} rotation={[Math.PI, 0, 0]} scale={100}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={0.01}>
            <mesh geometry={nodes.potTall_aglaonema_phong1_0.geometry} material={materials.phong1} />
            <mesh geometry={nodes.potTall_aglaonema_phong2_0.geometry} material={materials.phong2} />
            <mesh geometry={nodes.potTall_aglaonema_phong4_0.geometry} material={materials.phong4} />
          </group>
        </group>
      </group>
      <group position={[19.854, 0, -6.77]} rotation={[Math.PI, 0, 0]} scale={100}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={0.01}>
            <mesh geometry={nodes.potTall_aglaonema_phong4_0001.geometry} material={materials.phong4} />
            <mesh geometry={nodes.potTall_aglaonema_phong1_0001.geometry} material={materials.phong1} />
            <mesh geometry={nodes.potTall_aglaonema_phong2_0001.geometry} material={materials.phong2} />
          </group>
        </group>
      </group>
      <group position={[-19.789, 0, -7.918]} rotation={[Math.PI, 0, 0]} scale={100}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={0.01}>
            <mesh geometry={nodes.potTall_aglaonema_phong4_0002.geometry} material={materials.phong4} />
            <mesh geometry={nodes.potTall_aglaonema_phong1_0002.geometry} material={materials.phong1} />
            <mesh geometry={nodes.potTall_aglaonema_phong2_0002.geometry} material={materials.phong2} />
          </group>
        </group>
      </group>
      <group position={[-19.775, 0, 8.326]} rotation={[Math.PI, 0, 0]} scale={100}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={0.01}>
            <mesh geometry={nodes.potTall_aglaonema_phong4_0003.geometry} material={materials.phong4} />
            <mesh geometry={nodes.potTall_aglaonema_phong1_0003.geometry} material={materials.phong1} />
            <mesh geometry={nodes.potTall_aglaonema_phong2_0003.geometry} material={materials.phong2} />
          </group>
        </group>
      </group>
      <group position={[10.012, 0.937, -8.861]} rotation={[-Math.PI / 2, 0, 0]} scale={72.02}>
        <group position={[0, 0, 0.006]} rotation={[-Math.PI / 2, 0, -1.041]} scale={0.043}>
          <mesh geometry={nodes.Object_2002.geometry} material={materials['image-screen']} />
          <mesh geometry={nodes.Object_3.geometry} material={materials.tablet} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.007}>
          <mesh geometry={nodes.Object_2003.geometry} material={materials['Scene_-_Root.001']} position={[0, -0.287, 0]} />
        </group>
      </group>
      <group position={[10.899, 0.937, -9.737]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={72.02}>
        <group position={[0, 0, 0.006]} rotation={[-Math.PI / 2, 0, -1.041]} scale={0.043}>
          <mesh geometry={nodes.Object_2004.geometry} material={materials['image-screen']} />
          <mesh geometry={nodes.Object_3001.geometry} material={materials.tablet} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.007}>
          <mesh geometry={nodes.Object_2005.geometry} material={materials['Scene_-_Root.001']} position={[0, -0.287, 0]} />
        </group>
      </group>
      <group position={[11.68, 0.937, -8.911]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={72.02}>
        <group position={[0, 0, 0.006]} rotation={[-Math.PI / 2, 0, -1.041]} scale={0.043}>
          <mesh geometry={nodes.Object_2006.geometry} material={materials['image-screen']} />
          <mesh geometry={nodes.Object_3002.geometry} material={materials.tablet} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.007}>
          <mesh geometry={nodes.Object_2007.geometry} material={materials['Scene_-_Root.001']} position={[0, -0.287, 0]} />
        </group>
      </group>
      <group position={[10.899, 0.937, -8.102]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={72.02}>
        <group position={[0, 0, 0.006]} rotation={[-Math.PI / 2, 0, -1.041]} scale={0.043}>
          <mesh geometry={nodes.Object_2008.geometry} material={materials['image-screen']} />
          <mesh geometry={nodes.Object_3003.geometry} material={materials.tablet} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.007}>
          <mesh geometry={nodes.Object_2009.geometry} material={materials['Scene_-_Root.001']} position={[0, -0.287, 0]} />
        </group>
      </group>
      <group position={[-7.146, 0.937, -8.861]} rotation={[-Math.PI / 2, 0, 0]} scale={72.02}>
        <group position={[0, 0, 0.006]} rotation={[-Math.PI / 2, 0, -1.041]} scale={0.043}>
          <mesh geometry={nodes.Object_2010.geometry} material={materials['image-screen']} />
          <mesh geometry={nodes.Object_3006.geometry} material={materials.tablet} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.007}>
          <mesh geometry={nodes.Object_2015.geometry} material={materials['Scene_-_Root.001']} position={[0, -0.287, 0]} />
        </group>
      </group>
      <group position={[-6.259, 0.937, -9.737]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={72.02}>
        <group position={[0, 0, 0.006]} rotation={[-Math.PI / 2, 0, -1.041]} scale={0.043}>
          <mesh geometry={nodes.Object_2016.geometry} material={materials['image-screen']} />
          <mesh geometry={nodes.Object_3007.geometry} material={materials.tablet} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.007}>
          <mesh geometry={nodes.Object_2017.geometry} material={materials['Scene_-_Root.001']} position={[0, -0.287, 0]} />
        </group>
      </group>
      <group position={[-5.478, 0.937, -8.911]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={72.02}>
        <group position={[0, 0, 0.006]} rotation={[-Math.PI / 2, 0, -1.041]} scale={0.043}>
          <mesh geometry={nodes.Object_2011.geometry} material={materials['image-screen']} />
          <mesh geometry={nodes.Object_3004.geometry} material={materials.tablet} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.007}>
          <mesh geometry={nodes.Object_2014.geometry} material={materials['Scene_-_Root.001']} position={[0, -0.287, 0]} />
        </group>
      </group>
      <group position={[-6.259, 0.937, -8.102]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={72.02}>
        <group position={[0, 0, 0.006]} rotation={[-Math.PI / 2, 0, -1.041]} scale={0.043}>
          <mesh geometry={nodes.Object_2012.geometry} material={materials['image-screen']} />
          <mesh geometry={nodes.Object_3005.geometry} material={materials.tablet} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.007}>
          <mesh geometry={nodes.Object_2013.geometry} material={materials['Scene_-_Root.001']} position={[0, -0.287, 0]} />
        </group>
      </group>
      <group position={[-7.185, 0.937, 8.906]} rotation={[-Math.PI / 2, 0, 0]} scale={72.02}>
        <group position={[0, 0, 0.006]} rotation={[-Math.PI / 2, 0, -1.041]} scale={0.043}>
          <mesh geometry={nodes.Object_2018.geometry} material={materials['image-screen']} />
          <mesh geometry={nodes.Object_3010.geometry} material={materials.tablet} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.007}>
          <mesh geometry={nodes.Object_2023.geometry} material={materials['Scene_-_Root.001']} position={[0, -0.287, 0]} />
        </group>
      </group>
      <group position={[-6.298, 0.937, 8.031]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={72.02}>
        <group position={[0, 0, 0.006]} rotation={[-Math.PI / 2, 0, -1.041]} scale={0.043}>
          <mesh geometry={nodes.Object_2024.geometry} material={materials['image-screen']} />
          <mesh geometry={nodes.Object_3011.geometry} material={materials.tablet} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.007}>
          <mesh geometry={nodes.Object_2025.geometry} material={materials['Scene_-_Root.001']} position={[0, -0.287, 0]} />
        </group>
      </group>
      <group position={[-5.517, 0.937, 8.856]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={72.02}>
        <group position={[0, 0, 0.006]} rotation={[-Math.PI / 2, 0, -1.041]} scale={0.043}>
          <mesh geometry={nodes.Object_2019.geometry} material={materials['image-screen']} />
          <mesh geometry={nodes.Object_3008.geometry} material={materials.tablet} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.007}>
          <mesh geometry={nodes.Object_2022.geometry} material={materials['Scene_-_Root.001']} position={[0, -0.287, 0]} />
        </group>
      </group>
      <group position={[-6.298, 0.937, 9.665]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={72.02}>
        <group position={[0, 0, 0.006]} rotation={[-Math.PI / 2, 0, -1.041]} scale={0.043}>
          <mesh geometry={nodes.Object_2020.geometry} material={materials['image-screen']} />
          <mesh geometry={nodes.Object_3009.geometry} material={materials.tablet} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.007}>
          <mesh geometry={nodes.Object_2021.geometry} material={materials['Scene_-_Root.001']} position={[0, -0.287, 0]} />
        </group>
      </group>
      <group position={[9.986, 0.937, 8.906]} rotation={[-Math.PI / 2, 0, 0]} scale={72.02}>
        <group position={[0, 0, 0.006]} rotation={[-Math.PI / 2, 0, -1.041]} scale={0.043}>
          <mesh geometry={nodes.Object_2026.geometry} material={materials['image-screen']} />
          <mesh geometry={nodes.Object_3014.geometry} material={materials.tablet} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.007}>
          <mesh geometry={nodes.Object_2031.geometry} material={materials['Scene_-_Root.001']} position={[0, -0.287, 0]} />
        </group>
      </group>
      <group position={[10.873, 0.937, 8.031]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={72.02}>
        <group position={[0, 0, 0.006]} rotation={[-Math.PI / 2, 0, -1.041]} scale={0.043}>
          <mesh geometry={nodes.Object_2032.geometry} material={materials['image-screen']} />
          <mesh geometry={nodes.Object_3015.geometry} material={materials.tablet} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.007}>
          <mesh geometry={nodes.Object_2033.geometry} material={materials['Scene_-_Root.001']} position={[0, -0.287, 0]} />
        </group>
      </group>
      <group position={[11.654, 0.937, 8.856]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={72.02}>
        <group position={[0, 0, 0.006]} rotation={[-Math.PI / 2, 0, -1.041]} scale={0.043}>
          <mesh geometry={nodes.Object_2027.geometry} material={materials['image-screen']} />
          <mesh geometry={nodes.Object_3012.geometry} material={materials.tablet} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.007}>
          <mesh geometry={nodes.Object_2030.geometry} material={materials['Scene_-_Root.001']} position={[0, -0.287, 0]} />
        </group>
      </group>
      <group position={[10.873, 0.937, 9.665]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={72.02}>
        <group position={[0, 0, 0.006]} rotation={[-Math.PI / 2, 0, -1.041]} scale={0.043}>
          <mesh geometry={nodes.Object_2028.geometry} material={materials['image-screen']} />
          <mesh geometry={nodes.Object_3013.geometry} material={materials.tablet} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.007}>
          
          <mesh geometry={nodes.Object_2029.geometry} material={materials['Scene_-_Root.001']} position={[0, -0.287, 0]} />
        </group>
      </group>
      <group position={[4.832, 0, 14.472]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100}>
        <mesh geometry={nodes.Plane020.geometry} material={materials.Marble} />
        <mesh geometry={nodes.Plane023.geometry} material={materials.Metal} />
      </group>
      <PerspectiveCamera makeDefault={false} far={1000.53} near={0.1} fov={16.568} position={[44.229, 1.965, 0]} rotation={[Math.PI / 2, 1.529, -Math.PI / 2]} scale={100} />
      <spotLight intensity={157079.641} angle={0.829} penumbra={0.2} decay={2} distance={10} position={[54.686, 24.543, -24.577]} rotation={[-2.124, 0.692, -2.373]} scale={538.516} />
      <mesh geometry={nodes.______urtain_Curtain_0.geometry} material={materials.Curtain} position={[5.101, 5.624, -28.144]} rotation={[3.115, 0, 0]} scale={5.189} />

     
      <group position={[4.5, 5.624, -28.144]} rotation={[0, 0,0]}>
  <Box position={[0, 0, 0]} args={[10, 6, 0.1]}>
    <meshStandardMaterial>
      <Suspense fallback={<FallbackMaterial url={url} />}>
        <VideoMaterial url={url} />
      </Suspense>
    </meshStandardMaterial>
  </Box>
</group>



      <group position={[20.649, 2.785, -26.233]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[101.15, 75.236, 101.15]}>
        <mesh geometry={nodes.Ads_1.geometry} material={materials.PhotoFrame} />
        <mesh geometry={nodes.Ads_2.geometry} material={materials.Ads} />
      </group>
      <group position={[20.649, 2.461, -21.886]} rotation={[-Math.PI / 2, 0, 0]} scale={[101.15, 75.236, 101.15]}>
        <mesh geometry={nodes.Ads001_1.geometry} material={materials.PhotoFrame} />
        <mesh geometry={nodes.Ads001_2.geometry} material={materials['Ads.001']} />
      </group>
      <group position={[20.649, 2.785, -17.723]} rotation={[-Math.PI / 2, 0, 0]} scale={[101.15, 75.236, 101.15]}>
        <mesh geometry={nodes.Ads002_1.geometry} material={materials.PhotoFrame} />
        <mesh geometry={nodes.Ads002_2.geometry} material={materials['Ads.002']} />
      </group>
      <group position={[20.649, 2.461, -13.554]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100}>
        <mesh geometry={nodes.Ads003_1.geometry} material={materials.PhotoFrame} />
        <mesh geometry={nodes.Ads003_2.geometry} material={materials['Ads.003']} />
      </group>
      <group position={[20.649, 2.785, -9.47]} rotation={[-Math.PI / 2, 0, 0]} scale={[101.15, 75.236, 101.15]}>
        <mesh geometry={nodes.Ads004_1.geometry} material={materials.PhotoFrame} />
        <mesh geometry={nodes.Ads004_2.geometry} material={materials['Ads.004']} />
      </group>
      <group position={[20.649, 3.376, 8.738]} rotation={[-Math.PI / 2, 0, 0]} scale={[101.15, 75.236, 101.15]}>
        <mesh geometry={nodes.Ads005_1.geometry} material={materials.PhotoFrame} />
        <mesh geometry={nodes.Ads005_2.geometry} material={materials.Awards} />
      </group>
      <group position={[20.649, 3.376, 16.088]} rotation={[-Math.PI / 2, 0, 0]} scale={[101.15, 75.236, 101.15]}>
        <mesh geometry={nodes.Ads006_1.geometry} material={materials.PhotoFrame} />
        <mesh geometry={nodes.Ads006_2.geometry} material={materials['Awards.001']} />
      </group>
      <group position={[14.245, 3.376, 28.28]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[101.15, 75.236, 101.15]}>
        <mesh geometry={nodes.Ads007_1.geometry} material={materials.PhotoFrame} />
        <mesh geometry={nodes.Ads007_2.geometry} material={materials['Awards.002']} />
      </group>
      <group position={[20.649, 3.376, 23.03]} rotation={[-Math.PI / 2, 0, 0]} scale={[101.15, 75.236, 101.15]}>
        <mesh geometry={nodes.Ads008_1.geometry} material={materials.PhotoFrame} />
        <mesh geometry={nodes.Ads008_2.geometry} material={materials['Awards.003']} />
      </group>
      <mesh geometry={nodes.Carpet.geometry} material={materials.CenterPiece} position={[5.218, 1.182, -25.418]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <group position={[5.218, 0, -25.418]} rotation={[-Math.PI / 2, 0, 0]} scale={[162.534, 162.534, 100]}>
        <mesh geometry={nodes.Centertable_1.geometry} material={materials.Marble} />
        <mesh geometry={nodes.Centertable_2.geometry} material={materials.Light} />
      </group>
      <group position={[5.1, 7.149, 14.578]} rotation={[-Math.PI / 2, 0, 0]} scale={541.356}>
        <mesh geometry={nodes.Circle001_1.geometry} material={materials.Marble} />
        <mesh geometry={nodes.Circle001_2.geometry} material={materials.Light} />
      </group>
      <group position={[5.022, 7.192, 0.011]} rotation={[-Math.PI / 2, 0, 0]} scale={541.356}>
        <mesh geometry={nodes.Circle001_1.geometry} material={materials.Marble} />
        <mesh geometry={nodes.Circle001_2.geometry} material={materials.Light} />
      </group>
      <group position={[-10.823, 7.149, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={541.356}>
        <mesh geometry={nodes.Circle001_1.geometry} material={materials.Marble} />
        <mesh geometry={nodes.Circle001_2.geometry} material={materials.Light} />
      </group>
      <group position={[5.1, 7.149, -17.064]} rotation={[-Math.PI / 2, 0, 0]} scale={541.356}>
        <mesh geometry={nodes.Circle001_1.geometry} material={materials.Marble} />
        <mesh geometry={nodes.Circle001_2.geometry} material={materials.Light} />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Cube003_1.geometry} material={materials.Walls} />
        <mesh geometry={nodes.Cube003_2.geometry} material={materials.Plinth} />
        <mesh geometry={nodes.Cube003_3.geometry} material={materials.Pillars} />
        <mesh geometry={nodes.Cube003_4.geometry} material={materials.Ceiling} />
      </group>
      <group position={[0, -0.462, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[2073.289, 2835.3, 100]}>
        <mesh geometry={nodes.Cube004_1.geometry} material={materials.Marble} />
        <mesh geometry={nodes.Cube004_2.geometry} material={materials.Light} />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Cube005_1.geometry} material={materials.header} />
        <mesh geometry={nodes.Cube005_2.geometry} material={materials.Pillars} />
        <mesh geometry={nodes.Cube005_3.geometry} material={materials.Marble} />
      </group>
      <group position={[-16.721, 0, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100}>
        <mesh geometry={nodes.Cube006_1.geometry} material={materials.Marble} />
        <mesh geometry={nodes.Cube006_2.geometry} material={materials.Light} />
        <mesh geometry={nodes.Cube006_3.geometry} material={materials.PhotoFrame} />
      </group>
      <mesh geometry={nodes.Cube007.geometry} material={materials.PhotoFrame} position={[20.733, 2.973, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Cube008.geometry} material={materials.Pillars} position={[29.091, -0.414, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 475.081, 35.988]} />
      <mesh geometry={nodes.Cube009.geometry} material={materials.Light} position={[0, -4.75, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Cube010.geometry} material={materials.Light} position={[0.025, 2.666, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[98.369, 98.434, 100]} />
      <mesh geometry={nodes.Cube013.geometry} material={materials.Light} position={[0.025, 2.151, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[99.934, 100, 100]} />
     <RigidBody colliders="trimesh" type='fixed'>
      <mesh geometry={nodes.Cube011.geometry} material={materials.Floor} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      </RigidBody>
      <mesh geometry={nodes.Cube012.geometry} material={materials.Marble} position={[20.039, 1.346, 27.58]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <group position={[-6.323, 0, 8.912]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Cylinder_1.geometry} material={materials.Pillars} />
        <mesh geometry={nodes.Cylinder_2.geometry} material={materials.Marble} />
        <mesh geometry={nodes.Cylinder_3.geometry} material={materials.Light} />
      </group>
      <group position={[10.85, 0, 8.912]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Cylinder001_1.geometry} material={materials.Pillars} />
        <mesh geometry={nodes.Cylinder001_2.geometry} material={materials.Marble} />
        <mesh geometry={nodes.Cylinder001_3.geometry} material={materials.Light} />
      </group>
      <group position={[-6.323, 0, -8.912]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Cylinder002_1.geometry} material={materials.Pillars} />
        <mesh geometry={nodes.Cylinder002_2.geometry} material={materials.Marble} />
        <mesh geometry={nodes.Cylinder002_3.geometry} material={materials.Light} />
      </group>
      <group position={[10.85, 0, -8.912]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Cylinder003_1.geometry} material={materials.Pillars} />
        <mesh geometry={nodes.Cylinder003_2.geometry} material={materials.Marble} />
        <mesh geometry={nodes.Cylinder003_3.geometry} material={materials.Light} />
      </group>
      <group position={[4.97, 5.604, -28.188]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Cylinder005_1.geometry} material={materials.Gold_polish} />
        <mesh geometry={nodes.Cylinder005_2.geometry} material={materials.spot} />
      </group>
      <group position={[20.745, 1.447, -11.859]} rotation={[Math.PI / 2, 0, Math.PI]} scale={-100}>
        <mesh geometry={nodes.Doors_1.geometry} material={materials.Windows} />
        <mesh geometry={nodes.Doors_2.geometry} material={materials.PhotoFrame} />
      </group>
      <group position={[20.745, 1.447, 11.859]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Doors001_1.geometry} material={materials.Windows} />
        <mesh geometry={nodes.Doors001_2.geometry} material={materials.PhotoFrame} />
      </group>
      <mesh geometry={nodes.Exide.geometry} material={materials['Material.004']} position={[20.832, 6.756, -21.162]} rotation={[0, Math.PI / 2, 0]} scale={[309.694, 91.906, 91.906]} />
      <mesh geometry={nodes.Exide001.geometry} material={materials['Material.004']} position={[-20.717, 3.432, -1.719]} rotation={[0, Math.PI / 2, 0]} scale={[336.97, 100, 100]} />
      <mesh geometry={nodes.ExideLogo.geometry} material={materials['Material.003']} position={[20.861, 6.756, -16.988]} rotation={[0, 1.57, 0]} scale={91.906} />
      <mesh geometry={nodes.ExideLogo001.geometry} material={materials['Material.003']} position={[-20.718, 3.432, 2.823]} rotation={[0, 1.57, 0]} scale={100} />
      <group position={[2.051, 3.108, 28.353]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Plane013_1.geometry} material={materials.TV} />
        <mesh geometry={nodes.Plane013_2.geometry} emissive={"white"} material={materials['Material.002']}>
        <Suspense fallback={<FallbackMaterial url={url} />}>
        <VideoMaterial url={url} />
      </Suspense>

     </mesh>
      </group>
      {/* <Char1 position={[-2, 0.9, 25.353]} /> */}
      <group position={[0, -0.066, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
      <RigidBody colliders="trimesh" type='fixed' >
        <mesh geometry={nodes.Plane016_1.geometry} material={materials.Pillars} />
        <mesh geometry={nodes.Plane016_2.geometry} material={materials.Garden} />
        </RigidBody>
      </group>
      <group position={[27.789, 1.146, -4.597]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]} scale={[-100, -67.765, -100]}>
        <mesh geometry={nodes.Plane024_1.geometry} material={materials['Battery_01.002']} />
        <mesh geometry={nodes.Plane024_2.geometry} material={materials.Metal} />
      </group>
      <group position={[27.789, 1.146, 4.739]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[100, 67.765, 100]}>
        <mesh geometry={nodes.Plane024_1.geometry} material={materials['Battery_01.002']} />
        <mesh geometry={nodes.Plane024_2.geometry} material={materials.Metal} />
      </group>
      <group position={[0, -0.066, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Plane026_1.geometry} material={materials.Hedge} />
        <RigidBody colliders="trimesh" type='fixed' >
        <mesh geometry={nodes.Plane026_2.geometry} material={materials.Garden} />
        <mesh geometry={nodes.Plane026_3.geometry} material={materials.Pillars} />
        </RigidBody>
      </group>
      <mesh geometry={nodes.Plane027.geometry} material={materials['Material.003']} rotation={[0, 1.57, 0]} scale={203.769} />
      <mesh geometry={nodes.Sofa.geometry} material={materials['Scene_-_Root']} position={[19.678, 0, 18.975]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={100} />
      <mesh geometry={nodes.Sofa001.geometry} material={materials['Scene_-_Root']} position={[19.678, 0, 23.548]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={100} />
      <mesh geometry={nodes.Sofa002.geometry} material={materials['Scene_-_Root']} position={[15.936, 0, 26.89]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={100} />
      <mesh geometry={nodes.Sofa003.geometry} material={materials['Scene_-_Root']} position={[19.678, 0, 14.333]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={100} />
      <mesh geometry={nodes.Sofa004.geometry} material={materials['Scene_-_Root']} position={[19.678, 0, 9.636]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={100} />
      <mesh geometry={nodes.Sofa005.geometry} material={materials['Scene_-_Root']} position={[11.01, 0, 26.89]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={100} />
      <mesh geometry={nodes.Text001.geometry} material={materials['Battery_01.002']} position={[20.96, 5.253, 11.262]} rotation={[0, Math.PI / 2, 0]} scale={800.765} />
      <mesh geometry={nodes.Text002.geometry} material={materials['Battery_01.003']} position={[28.059, 0.585, 3.914]} rotation={[0, 1.57, 0]} scale={22.083} />
      <mesh geometry={nodes.Text003.geometry} material={materials['Battery_01.003']} position={[28.065, 1.745, 2.987]} rotation={[0, Math.PI / 2, 0]} scale={[46.626, 46.56, 46.56]} />
      <mesh geometry={nodes.Text004.geometry} material={materials['Battery_01.003']} position={[28.065, 1.745, -2.965]} rotation={[0, Math.PI / 2, 0]} scale={[46.626, 46.56, 46.56]} />
      <mesh geometry={nodes.Text005.geometry} material={materials['Battery_01.003']} position={[28.059, 0.585, -2.065]} rotation={[0, 1.57, 0]} scale={22.083} />
      <mesh geometry={nodes.Text006.geometry} material={materials.Battery_01} position={[28.055, 0.878, 4.137]} rotation={[0, Math.PI / 2, 0]} scale={74.688} />
      <mesh geometry={nodes.Text007.geometry} material={materials.Battery_01} position={[28.06, 0.878, -1.877]} rotation={[0, Math.PI / 2, 0]} scale={74.688} />
      <mesh geometry={nodes.Frame_1.geometry} material={materials['Material.007']} position={[14.175, 3.14, -28.35]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={147.762} />
    </group>
    // </RigidBody>
 
  )
}

function VideoMaterial({ url }) {
  const texture = useVideoTexture(url)
  return <meshBasicMaterial map={texture} toneMapped={false} />
}

function FallbackMaterial({ url }) {
  const texture = useTexture(url)
  return <meshBasicMaterial map={texture} toneMapped={false} />
}


useGLTF.preload('/Exoverse.glb')
