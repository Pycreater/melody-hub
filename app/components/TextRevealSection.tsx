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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TextRevealCard
            text="Discover. Listen. Enjoy."
            revealText="Your Music Journey Starts Here"
          >
            <TextRevealCardTitle>
              Elevate Your Music Experience
            </TextRevealCardTitle>
            <TextRevealCardDescription>
              With MelodyHub, immerse yourself in a world of endless musical
              possibilities. Our cutting-edge technology and vast library ensure
              you always have the perfect soundtrack for every moment. From
              chart-topping hits to hidden gems, your next favorite song is just
              a click away.
            </TextRevealCardDescription>
          </TextRevealCard>

          <TextRevealCard
            text="Personalize. Share. Connect."
            revealText="Your Music, Your Community"
          >
            <TextRevealCardTitle>
              Create Your Musical Universe
            </TextRevealCardTitle>
            <TextRevealCardDescription>
              MelodyHub isn{"'"}t just about listening it{"'"}s about creating
              your own musical identity. Craft personalized playlists, discover
              new artists through our AI-powered recommendations, and connect
              with music lovers worldwide. Share your favorite tracks,
              collaborate on playlists, and be part of a vibrant community that
              celebrates the power of music.
            </TextRevealCardDescription>
          </TextRevealCard>
        </div>
      </div>
    </section>
  );
};

export default TextRevealSection;
