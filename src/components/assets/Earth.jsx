/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 public/models/earth.glb -k 
Author: jstabe (https://sketchfab.com/jstabe)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/hologram-earth-animated-version-2-hexa-9ad98c763c2b48fb8bff191c45621663
Title: Hologram Earth Animated Version 2 Hexa
*/

import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export function Earth(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('models/earth.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions['Animation'].reset().play();

    return () => {
      actions['Animation'].reset().stop();
    };
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <group name='Earth_0' rotation={[0, 0.017, -0.161]}>
          <mesh name='Object_4' geometry={nodes.Object_4.geometry} material={materials.EarthHologram} />
        </group>
        <group name='Clouds_3'>
          <mesh name='Object_11' geometry={nodes.Object_11.geometry} material={materials.Clouds} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('models/earth.glb');