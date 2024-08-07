// src/components/CharacterController/CharacterController.jsx
import React, { useEffect, useRef, useState } from 'react';
import { OrbitControls, useAnimations, useFBX } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { CapsuleCollider, RigidBody } from "@react-three/rapier";
import { Becky } from "../Character/Becky";
import { Mal } from "../Character/Mal";
import { useInput } from "../../hooks/useInput";
import { directionOffset } from "../../helpers/directionOffset";
import * as THREE from "three";

// Character Movement constants (Rapier)
const JUMP_FORCE = 2;
const MOVEMENT_SPEED = 2;
const MAX_VEL = 1;
const MAX_SHIFT_VEL = 3;

// Movement constants for third person
let walkDirection = new THREE.Vector3();
let rotateAngle = new THREE.Vector3(0, 1, 0);
let cameraTarget = new THREE.Vector3();
let rotateQuartenion = new THREE.Quaternion();
let beckyPrevPosition = new THREE.Vector3();

export const CharacterController = ({ reference }) => {
  const [maleCharActions, setMaleCharActions] = useState(null);

  const camera = useThree((state) => state.camera);
  const controlsRef = useRef();
  const rigidBody = useRef();
  const beckyRef = useRef();
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
    [
      standingAnimation[0],
      walkingAnimation[0],
      runningAnimation[0],
      jumpAnimation[0],
    ],
    beckyRef
  );

  const handleActionsReady = (actions) => {
    setMaleCharActions(actions);
  };

  const currentAction = useRef("");

  useEffect(() => {
    beckyRef.current.getWorldPosition(beckyPrevPosition);
  }, []);

  useEffect(() => {
    if (!maleCharActions) return;
    let action = "";
    
    if (forward || backward || left || right) {
      action = "walking";
      maleCharActions.Idle.stop();
      maleCharActions.Walk.play();
     
      if (shift) {
        action = "running";
      }
    } else if (jump) {
      action = "jump";
    } else {
      action = "idle";
      maleCharActions.Idle.play();
      maleCharActions.Walk.stop();
    }

    if (currentAction.current != action) {
      const nextActionToPlay = actions[action];
      const current = actions[currentAction.current];
      current?.fadeOut(0.2);
      nextActionToPlay?.reset().fadeIn(0.2).play();
      currentAction.current = action;
    }
  }, [forward, backward, left, right, jump, shift, maleCharActions, actions]);

  const updateCamera = (moveX, moveZ) => {
    const beckyWorldPosition = beckyRef.current.getWorldPosition(
      new THREE.Vector3()
    );

    camera.position.x += beckyWorldPosition.x - moveX;
    camera.position.z += beckyWorldPosition.z - moveZ;
    beckyPrevPosition.copy(beckyWorldPosition);
    cameraTarget.x = beckyWorldPosition.x;
    cameraTarget.z = beckyWorldPosition.z;
    cameraTarget.y = beckyWorldPosition.y + 0.8;

    if (controlsRef.current) controlsRef.current.target = cameraTarget;
  };

  useFrame((state, delta) => {
    const impulse = { x: 0, y: 0, z: 0 };
    if (jump && isOnFloor.current) {
      impulse.y = JUMP_FORCE;
      isOnFloor.current = false;

      rigidBody.current?.applyImpulse(impulse, true);
    }

    const linvel = rigidBody.current?.linvel();

    if (
      currentAction.current === "walking" ||
      currentAction.current === "running"
    ) {
      const beckyWorldPosition = beckyRef.current.getWorldPosition(
        new THREE.Vector3()
      );
      let camAngle = Math.atan2(
        state.camera.position.x - beckyWorldPosition.x,
        state.camera.position.z - beckyWorldPosition.z
      );

      let newDirectionOffset = directionOffset({
        forward,
        backward,
        left,
        right,
      });

      rotateQuartenion.setFromAxisAngle(
        rotateAngle,
        camAngle + Math.PI + newDirectionOffset
      );
      beckyRef.current.quaternion.rotateTowards(rotateQuartenion, 0.2);

      state.camera.getWorldDirection(walkDirection);
      walkDirection.y = 0;
      walkDirection.normalize();
      walkDirection.applyAxisAngle(rotateAngle, newDirectionOffset);
      const moveX = MOVEMENT_SPEED * walkDirection.x * 0.5;
      const moveZ = MOVEMENT_SPEED * walkDirection.z * 0.5;

      if (
        currentAction.current === "walking" &&
        Math.abs(linvel.x) < MAX_VEL &&
        Math.abs(linvel.z) < MAX_VEL
      ) {
        impulse.z += moveZ;
        impulse.x += moveX;
      }

      if (
        currentAction.current === "running" &&
        Math.abs(linvel.x) < MAX_SHIFT_VEL &&
        Math.abs(linvel.z) < MAX_SHIFT_VEL
      ) {
        impulse.z += moveZ * 2;
        impulse.x += moveX * 2;
      }
    }

    rigidBody.current?.applyImpulse(impulse, true);
    updateCamera(beckyPrevPosition.x, beckyPrevPosition.z);
  });

  return (
    <group position={[30, 0, 0]}>
      <OrbitControls
        enablePan={false}
        enableDamping={true}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
        minDistance={2}
        maxDistance={4}
        ref={controlsRef}
      />
      <RigidBody
        ref={rigidBody}
        colliders={false}
        enabledRotations={[false, false, false]}
        mass={1}
        type="dynamic"
        onCollisionEnter={() => {
          isOnFloor.current = true;
        }}
      >
        <CapsuleCollider args={[0.8, 0.4]} position={[0, 1.2, 0]} />
        <group ref={beckyRef}>
          <Becky reference={reference} />
          <Mal reference={reference} onActionsReady={handleActionsReady} />
        </group>
      </RigidBody>
    </group>
  );
};