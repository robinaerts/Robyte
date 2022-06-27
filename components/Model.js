import { Suspense, useEffect, useRef, useState } from "react";
import {
  Canvas,
  extend,
  useFrame,
  useLoader,
  useThree,
} from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

extend({ OrbitControls });

const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  const controls = useRef();
  useFrame(() => controls.current.update());
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      enableDamping={true}
    />
  );
};

export default function Model(props) {
  const gltf = useLoader(GLTFLoader, props.glb);

  return (
    <Canvas style={{ width: "100vw", height: "100vh", background: "black" }}>
      <CameraControls />
      <Suspense fallback={null}>
        <primitive object={gltf.scene} />
      </Suspense>
    </Canvas>
  );
}
