/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ./public/Extra3.glb 
*/

import React, { useRef , useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Extra3(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Extra3.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions.Idle.play();
    console.log(animations);
  });

  useEffect(() => {
    if (group.current) {
      group.current.rotation.y = Math.PI; // Rotate the group by 180 degrees (pi radians)
    }
  }, []);
  return (
    <group ref={group} {...props} dispose={null} >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes.c_pos} />
          <primitive object={nodes.c_arms_polel} />
          <primitive object={nodes.c_arms_poler} />
          <primitive object={nodes.c_foot_ikr} />
          <primitive object={nodes.c_leg_poler} />
          <primitive object={nodes.c_foot_ikl} />
          <primitive object={nodes.c_leg_polel} />
          <primitive object={nodes.c_hand_ikr} />
          <primitive object={nodes.c_hand_ikl} />
          <primitive object={nodes.root_refx} />
          <skinnedMesh name="rp_manuel_rigged_001_geo" geometry={nodes.rp_manuel_rigged_001_geo.geometry} material={materials['Material.001']} skeleton={nodes.rp_manuel_rigged_001_geo.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Extra3.glb')
