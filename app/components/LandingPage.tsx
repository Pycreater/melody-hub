"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  Play,
  Music,
  Headphones,
  Radio,
  Mic2,
  Disc,
  Shuffle,
  Volume2,
} from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Text } from "@react-three/drei";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./text-reveal-card";
import { WavyBackground } from "./wavy-background";
import { SparklesCore } from "./sparkles";
import { BackgroundBeams } from "./background-beams";
import { AnimatedTooltip } from "./animated-tooltip";

const fontUrl =
  "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap";

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

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
];

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-hidden">
      <style jsx global>{`
        @import url("${fontUrl}");
      `}</style>
      <header
        className={`${
          isScrolled ? "bg-gray-900 shadow-lg" : ""
        } sticky top-0 z-50 px-4 lg:px-6 h-14 flex items-center transition-all duration-300 ease-in-out`}
      >
        <Link className="flex items-center justify-center" href="#">
          <Music className="h-6 w-6 mr-2 text-white" />
          <span className="font-bold text-lg" style={{ fontFamily: "Poppins" }}>
            TrendFusion
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
            style={{ fontFamily: "Poppins" }}
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
            style={{ fontFamily: "Poppins" }}
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
            style={{ fontFamily: "Poppins" }}
          >
            About
          </Link>
          <Link
            className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full transition duration-300 ease-in-out hover:bg-gray-200"
            href="#"
            style={{ fontFamily: "Poppins" }}
          >
            Sign In
          </Link>
          <Link
            className="text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full transition duration-300 ease-in-out hover:from-purple-600 hover:to-pink-600"
            href="#"
            style={{ fontFamily: "Poppins" }}
          >
            Sign Up
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative">
          <motion.div
            style={{ opacity, scale }}
            className="container px-4 md:px-6 relative z-10"
          >
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-2"
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
                  Stream millions of songs, create playlists, and explore new
                  music tailored to your taste.
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
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <WavyBackground className="w-full h-full absolute inset-0" />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-3 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center text-center"
              >
                <Headphones className="h-12 w-12 mb-4 text-white" />
                <h2
                  className="text-2xl font-bold"
                  style={{ fontFamily: "Poppins" }}
                >
                  Unlimited Listening
                </h2>
                <p className="text-gray-400">
                  Stream any song, anytime, anywhere.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <Radio className="h-12 w-12 mb-4 text-white" />
                <h2
                  className="text-2xl font-bold"
                  style={{ fontFamily: "Poppins" }}
                >
                  Personalized Playlists
                </h2>
                <p className="text-gray-400">
                  Discover new music tailored to your taste.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col items-center text-center"
              >
                <Mic2 className="h-12 w-12 mb-4 text-white" />
                <h2
                  className="text-2xl font-bold"
                  style={{ fontFamily: "Poppins" }}
                >
                  High-Quality Audio
                </h2>
                <p className="text-gray-400">
                  Experience crystal-clear sound quality.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-900 to-black">
          <div className="container px-4 md:px-6">
            <TextRevealCard
              text="Discover. Listen. Enjoy."
              revealText="Your Music Journey Starts Here"
            >
              <TextRevealCardTitle>
                Elevate Your Music Experience
              </TextRevealCardTitle>
              <TextRevealCardDescription>
                With TrendFusion, immerse yourself in a world of endless musical
                possibilities. Our cutting-edge technology and vast library
                ensure you always have the perfect soundtrack for every moment.
              </TextRevealCardDescription>
            </TextRevealCard>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 z-0">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <h2
                  className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
                  style={{ fontFamily: "Poppins" }}
                >
                  Join the TrendFusion Community
                </h2>
                <p
                  className="mx-auto max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                  style={{ fontFamily: "Poppins" }}
                >
                  Sign up now and get 3 months free premium access. Dive into a
                  world of unlimited music and connect with music lovers
                  worldwide.
                </p>
              </div>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition duration-300 ease-in-out hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 shadow-lg">
                Start Your Free Trial
              </button>
            </motion.div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-black to-purple-900">
          <div className="container px-4 md:px-6">
            <h2
              className="text-3xl font-bold text-center mb-12"
              style={{ fontFamily: "Poppins" }}
            >
              Meet Our Team
            </h2>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
              <AnimatedTooltip items={people} />
            </div>
            <p className="text-center text-gray-400 max-w-2xl mx-auto">
              Our diverse team of music enthusiasts and tech experts work
              tirelessly to bring you the best music streaming experience
              possible.
            </p>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 relative">
          <BackgroundBeams />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 items-center">
              <div className="flex flex-col justify-center space-y-8 text-center">
                <div className="space-y-2">
                  <h1
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Revolutionize Your Music Experience
                  </h1>
                  <p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">
                    Join millions of music lovers who have already discovered
                    the power of TrendFusion. Your perfect soundtrack awaits.
                  </p>
                </div>
                <div className="w-full max-w-full space-y-4 mx-auto">
                  <div className="grid grid-cols-3 gap-8">
                    <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                      <div className="p-2 bg-black bg-opacity-50 rounded-full">
                        <Disc className="h-6 w-6 text-white" />
                      </div>
                      <h2 className="text-xl font-bold text-white">
                        Vast Library
                      </h2>
                      <p className="text-zinc-200 dark:text-zinc-100">
                        Millions of tracks at your fingertips
                      </p>
                    </div>
                    <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                      <div className="p-2 bg-black bg-opacity-50 rounded-full">
                        <Shuffle className="h-6 w-6 text-white" />
                      </div>
                      <h2 className="text-xl font-bold text-white">
                        Smart Playlists
                      </h2>
                      <p className="text-zinc-200 dark:text-zinc-100">
                        Personalized recommendations
                      </p>
                    </div>
                    <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                      <div className="p-2 bg-black bg-opacity-50 rounded-full">
                        <Volume2 className="h-6 w-6 text-white" />
                      </div>
                      <h2 className="text-xl font-bold text-white">HD Audio</h2>
                      <p className="text-zinc-200 dark:text-zinc-100">
                        Crystal clear sound quality
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full max-w-md space-y-2 mx-auto">
                  <form className="flex space-x-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1 bg-zinc-800 text-white"
                      placeholder="Enter your email"
                      type="email"
                    />
                    <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                      Subscribe
                    </button>
                  </form>
                  <p className="text-xs text-zinc-200 dark:text-zinc-100">
                    Sign up for our newsletter to get the latest updates and
                    offers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Follow Us</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm" style={{ fontFamily: "Poppins" }}>
              © {new Date().getFullYear()} TrendFusion. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
