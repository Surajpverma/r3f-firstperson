import { usePlane } from '@react-three/cannon';
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { MeshReflectorMaterial } from "@react-three/drei";
import { useEffect, useRef } from "react";

const Floor = (props) => {
  const [ref] = usePlane((index) => ({ type: 'Static', mass: 0, ...props }));

  const gridMap = useLoader(
    TextureLoader,
    "assets/textures/grid.png"
  );

  return (
    <mesh receiveShadow rotation-x={-Math.PI * 0.5} ref={ref} position={[0, -0.01, 0]}>
      <planeGeometry args={[40, 40]} />
      <meshStandardMaterial 
      opacity={0.325} alphaMap={gridMap} transparent={true} color={'white'} />
    </mesh>
  );
};

export default Floor;