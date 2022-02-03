import type { NextPage } from "next";
import { Color, PointLightHelper } from "three";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { OrbitControls, useHelper } from "@react-three/drei";
import Bedroom from "../models/Bedroom";

const Light = () => {
  const ref = useRef();
  useHelper(ref, PointLightHelper, 1);

  return (
    <pointLight ref={ref} args={[`white`, 2, 100]} position={[5, 8, -4]} />
  );
};

const cup: NextPage = () => {
  return (
    <Canvas
      mode="concurrent"
      gl={{ alpha: false }}
      camera={{ fov: 50, position: [10, 10, 25] }}
      style={{ height: "calc(100vh - 50px)", width: "100%" }}
      onCreated={({ scene }) => (scene.background = new Color("black"))}
    >
      <Light />
      <Suspense fallback={null}>
        <Bedroom />
      </Suspense>
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      <axesHelper scale={[10, 10, 10]} />
    </Canvas>
  );
};

export default cup;
