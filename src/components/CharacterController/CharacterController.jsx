import React, { useEffect, useRef, useState } from 'react';
import { OrbitControls, useAnimations, useFBX } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { CapsuleCollider, RigidBody, vec3 } from "@react-three/rapier";
import { Becky } from "../Character/Becky";
import { Mal } from "../Character/Mal";
import { useInput } from "../../contexts/InputContext";
import * as THREE from "three";

// Character Movement constants
const JUMP_FORCE = 5;
const MOVEMENT_SPEED = 3;
const MAX_VEL = 2;
const MAX_SHIFT_VEL = 4;

export const CharacterController = ({ reference }) => {
  const [maleCharActions, setMaleCharActions] = useState(null);

  const camera = useThree((state) => state.camera);
  const controlsRef = useRef();
  const rigidBody = useRef();
  const characterRef = useRef();
  const isOnFloor = useRef(true);

  const { input } = useInput();
  const { forward, backward, left, right, jump, shift } = input;

  // Loading animation files
  const { animations: standingAnimation } = useFBX("animations/Standing.fbx");
  const { animations: walkingAnimation } = useFBX("animations/Walking.fbx");
  const { animations: runningAnimation } = useFBX("animations/Running.fbx");
  const { animations: jumpAnimation } = useFBX("animations/Jump.fbx");
  walkingAnimation[0].name = "walking";
  standingAnimation[0].name = "idle";
  runningAnimation[0].name = "running";
  jumpAnimation[0].name = "jump";

  const { actions } = useAnimations(
    [standingAnimation[0], walkingAnimation[0], runningAnimation[0], jumpAnimation[0]],
    characterRef
  );

  const handleActionsReady = (actions) => {
    setMaleCharActions(actions);
  };

  const currentAction = useRef("");

  useEffect(() => {
    if (characterRef.current) {
      const initialPosition = new THREE.Vector3(0, 0, 0);
      characterRef.current.position.copy(initialPosition);
      camera.position.set(initialPosition.x, initialPosition.y + 2, initialPosition.z + 5);
      camera.lookAt(initialPosition);
      if (controlsRef.current) {
        controlsRef.current.target.copy(initialPosition);
      }
    }
  }, [camera]);

  useEffect(() => {
    if (!maleCharActions) return;
    let action = "";
    
    if (forward || backward || left || right) {
      action = shift ? "running" : "walking";
      maleCharActions.Idle?.stop();
      maleCharActions[action === "running" ? "Run" : "Walk"]?.play();
    } else if (jump) {
      action = "jump";
    } else {
      action = "idle";
      maleCharActions.Idle?.play();
      maleCharActions.Walk?.stop();
      maleCharActions.Run?.stop();
    }

    if (currentAction.current !== action) {
      const nextActionToPlay = actions[action];
      const current = actions[currentAction.current];
      current?.fadeOut(0.2);
      nextActionToPlay?.reset().fadeIn(0.2).play();
      currentAction.current = action;
    }
  }, [forward, backward, left, right, jump, shift, maleCharActions, actions]);

  useFrame((state, delta) => {
    if (!rigidBody.current || !characterRef.current) return;

    const characterPosition = characterRef.current.getWorldPosition(new THREE.Vector3());

    // Movement
    const moveDirection = new THREE.Vector3(0, 0, 0);
    if (forward) moveDirection.z -= 1;
    if (backward) moveDirection.z += 1;
    if (left) moveDirection.x -= 1;
    if (right) moveDirection.x += 1;
    moveDirection.normalize();

    if (moveDirection.length() > 0) {
      // Get camera direction
      const cameraDirection = new THREE.Vector3();
      camera.getWorldDirection(cameraDirection);
      cameraDirection.y = 0;
      cameraDirection.normalize();

      // Rotate move direction to align with camera
      const angle = Math.atan2(cameraDirection.x, cameraDirection.z);
      moveDirection.applyAxisAngle(new THREE.Vector3(0, 1, 0), angle);

      // Apply movement
      const velocity = moveDirection.multiplyScalar(MOVEMENT_SPEED * (shift ? 2 : 1));
      rigidBody.current.setLinvel({ x: velocity.x, y: rigidBody.current.linvel().y, z: velocity.z }, true);

      // Rotate character
      const lookDirection = new THREE.Vector3(velocity.x, 0, velocity.z).normalize();
      if (lookDirection.length() > 0) {
        const targetRotation = new THREE.Quaternion().setFromRotationMatrix(
          new THREE.Matrix4().lookAt(lookDirection, new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 1, 0))
        );
        characterRef.current.quaternion.slerp(targetRotation, 0.1);
      }
    } else {
      rigidBody.current.setLinvel({ x: 0, y: rigidBody.current.linvel().y, z: 0 }, true);
    }

    // Jumping
    if (jump && isOnFloor.current) {
      rigidBody.current.applyImpulse(vec3({ x: 0, y: JUMP_FORCE, z: 0 }));
      isOnFloor.current = false;
    }

    // Apply max velocity
    const currentVel = rigidBody.current.linvel();
    const currentVelVector = new THREE.Vector3(currentVel.x, currentVel.y, currentVel.z);
    const maxVel = shift ? MAX_SHIFT_VEL : MAX_VEL;
    if (currentVelVector.length() > maxVel) {
      currentVelVector.normalize().multiplyScalar(maxVel);
      rigidBody.current.setLinvel({ x: currentVelVector.x, y: currentVel.y, z: currentVelVector.z }, true);
    }

    // Update camera
    if (controlsRef.current) {
      controlsRef.current.target.copy(characterPosition);
      controlsRef.current.target.y += 1;
    }
  });

  return (
    <group>
      <OrbitControls
        ref={controlsRef}
        enablePan={false}
        enableDamping={true}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
        minDistance={2}
        maxDistance={4}
      />
      <RigidBody
        ref={rigidBody}
        colliders={false}
        mass={1}
        type="dynamic"
        position={[0, 0, 0]}
        enabledRotations={[false, false, false]}
        onCollisionEnter={() => {
          isOnFloor.current = true;
        }}
      >
        <CapsuleCollider args={[0.8, 0.4]} position={[0, 1.2, 0]} />
        <group ref={characterRef}>
          <Becky reference={reference} />
          <Mal reference={reference} onActionsReady={handleActionsReady} />
        </group>
      </RigidBody>
    </group>
  );
};