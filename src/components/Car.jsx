import { useBox } from '@react-three/cannon';
import { useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function Car(props) {
  let result = useLoader(
    GLTFLoader,
    "assets/models/car.glb"
  ).scene;

  const [ref] = useBox((index) => ({
    type: 'Static',
    mass: 1,
    args: props.args,
    position: props.position,
    ...props,
  }));

  useEffect(() => {

    let mesh = result;
    mesh.scale.set(0.01, 0.01, 0.01);

    mesh.children[0].position.set(-365, -18, -67);
  }, [result]);

  return (

        <primitive ref={ref} {...props} dispose={null} object={result} rotation-y={Math.PI} position={[10, 0, 0]} />

  );
}
