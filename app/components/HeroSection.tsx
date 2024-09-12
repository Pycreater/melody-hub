import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Canvas, ThreeElements, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Text } from "@react-three/drei";

const AnimatedSphere = () => {
  const meshRef = useRef<ThreeElements["mesh"]>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime) * 0.2;
    }
  });
  return (
    <Sphere args={[1, 100, 200]} scale={2.5} ref={meshRef}>
      <MeshDistortMaterial
        color="#4B0082"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0}
      />
    </Sphere>
  );
};

interface HeroSectionProps {
  opacity: any;
  scale: any;
}

const HeroSection: React.FC<HeroSectionProps> = ({ opacity, scale }) => {
  return (
    <section className="w-full py-20 md:py-28 lg:py-36 xl:py-44 relative">
      <motion.div
        style={{ opacity, scale }}
        className="container mx-auto px-4 md:px-6 relative z-10"
      >
        <div className="flex flex-col items-center space-y-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h1
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
              style={{ fontFamily: "Poppins" }}
            >
              Discover Your Sound with TrendFusion
            </h1>
            <p
              className="mx-auto max-w-[700px] text-gray-400 md:text-xl lg:text-2xl"
              style={{ fontFamily: "Poppins" }}
            >
              Stream millions of songs, create playlists, and explore new music
              tailored to your taste.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-x-4"
          >
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 px-6 py-3 rounded-full flex items-center transition duration-300 ease-in-out transform hover:scale-105">
              Get Started
              <Play className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
              Learn More
            </button>
          </motion.div>
        </div>
      </motion.div>
      <div className="absolute inset-0 z-0">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <AnimatedSphere />
          <FloatingNotes />
        </Canvas>
      </div>
    </section>
  );
};

const FloatingNotes = () => {
  const notesRef = useRef<ThreeElements["group"]>(null);
  useFrame((state) => {
    if (notesRef.current) {
      notesRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.2;
      notesRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
  });
  return (
    <group ref={notesRef}>
      <Text
        color="white"
        fontSize={0.5}
        maxWidth={200}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="center"
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorX="center"
        anchorY="middle"
        position={[2, 0, 0]}
      >
        ♪
      </Text>
      <Text
        color="white"
        fontSize={0.3}
        maxWidth={200}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="center"
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorX="center"
        anchorY="middle"
        position={[-1.5, 1, 0]}
      >
        ♫
      </Text>
      <Text
        color="white"
        fontSize={0.4}
        maxWidth={200}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="center"
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorX="center"
        anchorY="middle"
        position={[-2, -1, 0]}
      >
        ♩
      </Text>
    </group>
  );
};

export default HeroSection;
