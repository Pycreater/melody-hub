"use client";
import React from "react";
import { Disc, Shuffle, Volume2 } from "lucide-react";
import { BackgroundBeams } from "./background-beams";
import { signIn } from "next-auth/react";

const RevolutionSection: React.FC = () => {
  return (
    <section className="w-full py-20 md:py-28 lg:py-36 relative">
      <BackgroundBeams />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid gap-12 items-center">
          <div className="flex flex-col justify-center space-y-8 text-center">
            <div className="space-y-4">
              <h1
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
                style={{ fontFamily: "Poppins" }}
              >
                Revolutionize Your Music Experience
              </h1>
              <p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">
                Join millions of music lovers who have already discovered the
                power of TrendFusion. Your perfect soundtrack awaits.
              </p>
            </div>
            <div className="w-full max-w-full space-y-4 mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FeatureCard
                  icon={<Disc className="h-6 w-6 text-white" />}
                  title="Vast Library"
                  description="Millions of tracks at your fingertips"
                />
                <FeatureCard
                  icon={<Shuffle className="h-6 w-6 text-white" />}
                  title="Smart Playlists"
                  description="Personalized recommendations"
                />
                <FeatureCard
                  icon={<Volume2 className="h-6 w-6 text-white" />}
                  title="HD Audio"
                  description="Crystal clear sound quality"
                />
              </div>
            </div>
            <div className="w-full max-w-md space-y-4 mx-auto">
              <form className="flex space-x-2">
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1 bg-zinc-800 text-white"
                  placeholder="Enter your email"
                  type="email"
                />
                <button
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                  onClick={() => signIn()}
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-zinc-200 dark:text-zinc-100">
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
    <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
      <div className="p-2 bg-black bg-opacity-50 rounded-full">{icon}</div>
      <h2 className="text-xl font-bold text-white">{title}</h2>
      <p className="text-zinc-200 dark:text-zinc-100 text-center">
        {description}
      </p>
    </div>
  );
};

export default RevolutionSection;
