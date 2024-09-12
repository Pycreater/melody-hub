"use client";

import React, { useRef, useEffect, useState } from "react";
import { Play, Music, Headphones, Radio, Mic2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

// Font Import
const fontUrl =
  "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap";

// Animated Sphere Component
const AnimatedSphere = () => {
  const meshRef = useRef<ThreeElements["mesh"]>(null);
  useFrame(() => {
    if (meshRef.current) {
      //@ts-ignore
      meshRef.current.rotation.x += 0.01;
      //@ts-ignore
      meshRef.current.rotation.y += 0.01;
    }
  });
  return (
    //@ts-ignore
    <Sphere args={[1, 100, 200]} scale={2.5} ref={meshRef}>
      <MeshDistortMaterial
        color="#ffffff"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0}
      />
    </Sphere>
  );
};

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Sticky Navbar with Scroll Effect
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
        <nav className="ml-auto flex gap-4 sm:gap-6">
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
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-2"
              >
                <h1
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none"
                  style={{ fontFamily: "Poppins" }}
                >
                  Discover Your Sound with TrendFusion
                </h1>
                <p
                  className="mx-auto max-w-[700px] text-gray-400 md:text-xl"
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
                <button className="bg-white text-black hover:bg-gray-200 px-4 py-2 rounded-lg flex items-center transition duration-300 ease-in-out">
                  Get Started
                  <Play className="ml-2 h-4 w-4" />
                </button>
                <button className="border border-white text-white hover:bg-white hover:text-black px-4 py-2 rounded-lg transition duration-300 ease-in-out">
                  Learn More
                </button>
              </motion.div>
            </div>
          </div>
          <div className="absolute inset-0 z-0">
            <Canvas>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <AnimatedSphere />
            </Canvas>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-black to-gray-900">
          <div className="container px-4 md:px-6">
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
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <h2
                  className="text-3xl font-bold tracking-tighter md:text-4xl"
                  style={{ fontFamily: "Poppins" }}
                >
                  Join the TrendFusion Community
                </h2>
                <p
                  className="mx-auto max-w-[600px] text-gray-400 md:text-xl"
                  style={{ fontFamily: "Poppins" }}
                >
                  Sign up now and get 3 months free premium access.
                </p>
              </div>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg transition duration-300 ease-in-out hover:scale-105">
                Start Free Trial
              </button>
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-900 text-white text-center">
        <p className="text-sm" style={{ fontFamily: "Poppins" }}>
          © {new Date().getFullYear()} TrendFusion. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
