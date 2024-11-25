"use client";

import { useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useFBX, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import Introduction from "@/ui/components/Introduction";

// Hook to get window dimensions
function useWindowSize() {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    function handleResize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}

function WavingAvatar({ scale }: { scale: number }) {
  const { scene } = useGLTF("/673da94d127dfd8f54d7527b.glb");
  const { animations } = useFBX("/Waving.fbx");
  const mixer = useRef<THREE.AnimationMixer | null>(null);

  useEffect(() => {
    scene.rotation.set(0.4, 0, 0); // Example tilt: 0.4 rad on X-axis
    scene.position.set(0, -2.2, 0); // Adjust position to fit the platform

    if (animations.length) {
      mixer.current = new THREE.AnimationMixer(scene);

      const action = mixer.current.clipAction(animations[0]);
      if (!action) {
        console.error("Animation clip action could not be created!");
      } else {
        action.setLoop(THREE.LoopOnce, 1); // Set animation to play once
        action.clampWhenFinished = true; // Stop at the last frame
        action.play();
      }
    }
  }, [animations, scene]);

  useFrame((_, delta) => {
    if (mixer.current) mixer.current.update(delta);
  });

  return <primitive raycast={null} object={scene} scale={scale} />;
}

function Platform({ theme }: { theme: string }) {
  return (
    <mesh position={[0, -2.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <circleGeometry args={[2, 64]} />
      <meshStandardMaterial color={theme === "dark" ? "#333" : "#ccc"} />
    </mesh>
  );
}

export default function WavingAvatarScene() {
  const [isClient, setIsClient] = useState(false);
  const [theme, setTheme] = useState("dark");
  const { width } = useWindowSize();

  useEffect(() => {
    setIsClient(true);

    // Simulate theme detection; replace with your actual theme logic
    const userTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    setTheme(userTheme);
  }, []);

  if (!isClient) return null;

  // Calculate scale based on screen width
  const avatarScale = width > 1200 ? 2.5 : width > 768 ? 2.3 : 2;

  return (
    <div className="flex min-h-screen items-center text-black dark:text-white sm:items-start">
      <div
        className="z-0 inline-block h-full w-full p-32 xl:p-24 lg:p-16 
      md:p-12 sm:p-8 !pt-0 md:!pt-16 sm:!pt-16"
      >
        <div className="flex w-full items-start justify-between lg:flex-row md:flex-col">
          <div style={{ width: "100%", maxWidth: "400px", height: "500px" }} className="flex-grow">
            <Canvas>
              <ambientLight intensity={0.8} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <Platform theme={theme} />
              <WavingAvatar scale={avatarScale} />
              <OrbitControls enableRotate={false} enableZoom={false} enablePan={false} />
            </Canvas>
          </div>
          <div className="flex w-1/2 flex-col items-center lg:w-full lg:text-center">
            <div className="py-2 w-full mx-auto flex flex-col items-center justify-center  text-center   overflow-hidden sm:py-0">
              <Introduction/>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
}
