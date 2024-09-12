"use client";
import React from "react";
import { AnimatedTooltip } from "./animated-tooltip";

const creator = {
  id: 1,
  name: "Pratik Yadav",
  designation: "Software Engineer",
  image: "https://avatars.githubusercontent.com/u/114671066?v=4",
};

const SoloSection: React.FC = () => {
  return (
    <section className="w-full py-20 md:py-28 lg:py-36 bg-gradient-to-b from-black to-purple-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2
          className="text-3xl font-bold text-center mb-12"
          style={{ fontFamily: "Poppins" }}
        >
          Meet the Creator
        </h2>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={[creator]} />
        </div>
        <p className="text-center text-gray-400 max-w-2xl mx-auto">
          As a Software Engineer and the sole creator of this platform, I am
          dedicated to delivering the best music streaming experience through
          innovative design and technology.
        </p>
      </div>
    </section>
  );
};

export default SoloSection;
