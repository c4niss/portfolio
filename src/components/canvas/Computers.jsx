import React from 'react'
import { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import Loader from '../Loader'
function  Computers({ ismobile }){
  const computer = useGLTF('./desktop_pc/scene.gltf ')
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={50} />
      <spotLight 
      position={[-20, 50,10]}
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024}
      />
      <primitive object={computer.scene}
      scale={ismobile ? 0.65 : 0.75}
      position={ismobile ? [0, -3, -2.2] :[0, -3.25,-1.5]}
      rotation={[-0.01,-0.2,-0.1]}
      />
    </mesh>
  )
}
function ComputersCanvas(){
  const [ismobile, setismobile] = useState(false);

  useEffect(() => {
    const mediaquery = window.matchMedia('( max-width: 638px)');
    setismobile(mediaquery.matches);

    function handelmediaquerychange(event){
      setismobile(event.matches);
    }

    mediaquery.addEventListener('change', handelmediaquerychange);

    return () =>{
      mediaquery.removeEventListener('change', handelmediaquerychange);
    }
  }, [])
  return (
    <Canvas
    frameloop="demand"
    shadows
    camera={{ position: [20, 3,5], fov: 25 }}
    gl={{ preserveDrawingBuffer : true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls 
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        enableZoom={false}
        />
        <Computers ismobile={ismobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas ;