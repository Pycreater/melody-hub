"use client";

import React from "react";
import { Disc, Shuffle, Volume2 } from "lucide-react";
import { BackgroundBeams } from "./background-beams";
import { signIn } from "next-auth/react";

const RevolutionSection: React.FC = () => {
  return (
    <section className="w-full py-20 md:py-28 lg:py-36 relative overflow-hidden">
      <BackgroundBeams />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid gap-12 items-center">
          <div className="flex flex-col justify-center space-y-8 text-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Revolutionize Your Music Experience
              </h1>
              <p className="max-w-[600px] text-gray-300 md:text-xl mx-auto">
                Join millions of music lovers who have already discovered the
                power of MelodyHub. Your perfect soundtrack awaits.
              </p>
            </div>
            <div className="w-full max-w-full space-y-4 mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FeatureCard
                  icon={<Disc className="h-8 w-8 text-pink-500" />}
                  title="Vast Library"
                  description="Millions of tracks at your fingertips"
                />
                <FeatureCard
                  icon={<Shuffle className="h-8 w-8 text-purple-500" />}
                  title="Smart Playlists"
                  description="Personalized recommendations"
                />
                <FeatureCard
                  icon={<Volume2 className="h-8 w-8 text-indigo-500" />}
                  title="HD Audio"
                  description="Crystal clear sound quality"
                />
              </div>
            </div>
            <div className="w-full max-w-md space-y-4 mx-auto">
              <form className="flex space-x-2">
                <input
                  className="flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1 bg-white bg-opacity-10 text-white"
                  placeholder="Enter your email"
                  type="email"
                />
                <button
                  className="inline-flex items-center justify-center rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                  onClick={() => signIn()}
                  type="button"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-gray-400">
                Sign up for our newsletter to get the latest updates and offers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center space-y-2 bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="p-2 bg-black bg-opacity-50 rounded-full">{icon}</div>
      <h2 className="text-xl font-bold text-white">{title}</h2>
      <p className="text-gray-300 text-center">{description}</p>
    </div>
  );
};

export default RevolutionSection;
