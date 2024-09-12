import React from "react";
import { motion } from "framer-motion";
import { Headphones, Radio, Mic2 } from "lucide-react";
import { WavyBackground } from "./wavy-background";

const FeaturesSection: React.FC = () => {
  return (
    <section className="w-full py-20 md:py-28 lg:py-36 relative overflow-hidden">
      <WavyBackground className="w-full h-full absolute inset-0" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-3 items-center">
          <FeatureCard
            icon={<Headphones className="h-12 w-12 mb-4 text-white" />}
            title="Unlimited Listening"
            description="Stream any song, anytime, anywhere."
            delay={0}
          />
          <FeatureCard
            icon={<Radio className="h-12 w-12 mb-4 text-white" />}
            title="Personalized Playlists"
            description="Discover new music tailored to your taste."
            delay={0.2}
          />
          <FeatureCard
            icon={<Mic2 className="h-12 w-12 mb-4 text-white" />}
            title="High-Quality Audio"
            description="Experience crystal-clear sound quality."
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  delay,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center text-center"
    >
      {icon}
      <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "Poppins" }}>
        {title}
      </h2>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

export default FeaturesSection;
