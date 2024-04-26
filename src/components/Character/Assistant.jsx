
import React, { useRef , useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Assistant(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Assist.glb')
  const { actions } = useAnimations(animations, group)  
  //  console.log(actions);


  useEffect(() => {
    props.onActionsReady(actions);
  }, [actions, props]);


  // useEffect(() => {
  //   // Check if the "Idle" animation exists before playing it
  //   if (animations && animations.Namaskar) {
  //     console.log('hello')
  //     actions.Namaskar.play();
  //   }
  // },);

  return (
    <group ref={props.reference} {...props} dispose={null}>
      {/* <group name="Scene">
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
          <primitive object={nodes.lips_top_refx} />
          <primitive object={nodes.lips_bot_refx} />
          <primitive object={nodes.lips_roll_top_refx} />
          <primitive object={nodes.lips_roll_bot_refx} />
          <primitive object={nodes.jaw_refx} />
          <primitive object={nodes.teeth_bot_refx} />
          <primitive object={nodes.teeth_top_refx} />
          <primitive object={nodes.tong_01_refx} />
          <primitive object={nodes.chin_02_refx} />
          <primitive object={nodes.nose_01_refx} />
          <primitive object={nodes.eye_offset_refl} />
          <primitive object={nodes.c_eye_targetx} />
          <primitive object={nodes.eye_offset_refr} />
          <primitive object={nodes.eyebrow_full_refl} />
          <primitive object={nodes.eyebrow_full_refr} />
          <primitive object={nodes.cheek_smile_refl} />
          <primitive object={nodes.cheek_smile_refr} />
          <skinnedMesh name="rp_claudia_rigged_002_geo" geometry={nodes.rp_claudia_rigged_002_geo.geometry} material={materials.rp_claudia_rigged_002_mat} skeleton={nodes.rp_claudia_rigged_002_geo.skeleton} />
        </group>
      </group> */}
    </group>
  )
}

useGLTF.preload('/Assist.glb')
