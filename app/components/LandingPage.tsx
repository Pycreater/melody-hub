"use client";

import React, { useState, useEffect } from "react";
import { useScroll, useTransform } from "framer-motion";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import TextRevealSection from "./TextRevealSection";
import CommunitySection from "./CommunitySection";
import TeamSection from "./TeamSection";
import RevolutionSection from "./RevolutionSection";
import Footer from "./Footer";
import Header from "./Header";

const fontUrl =
  "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap";

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
      <Header isScrolled={isScrolled} />
      <main className="flex-1">
        <HeroSection opacity={opacity} scale={scale} />
        <FeaturesSection />
        <TextRevealSection />
        <CommunitySection />
        <TeamSection />
        <RevolutionSection />
      </main>
      <Footer />
    </div>
  );
}
