"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./text-reveal-card";

const TextRevealSection: React.FC = () => {
  return (
    <section className="w-full py-20 md:py-28 lg:py-36 bg-gradient-to-b from-purple-900 to-black">
      <div className="container mx-auto px-4 md:px-6">
        <TextRevealCard
          text="Discover. Listen. Enjoy."
          revealText="Your Music Journey Starts Here"
        >
          <TextRevealCardTitle>
            Elevate Your Music Experience
          </TextRevealCardTitle>
          <TextRevealCardDescription>
            With TrendFusion, immerse yourself in a world of endless musical
            possibilities. Our cutting-edge technology and vast library ensure
            you always have the perfect soundtrack for every moment.
          </TextRevealCardDescription>
        </TextRevealCard>
      </div>
    </section>
  );
};

export default TextRevealSection;
