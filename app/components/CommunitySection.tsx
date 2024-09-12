"use client";

import React from "react";
import { motion } from "framer-motion";
import { SparklesCore } from "./sparkles";

const CommunitySection: React.FC = () => {
  return (
    <section className="w-full py-20 md:py-28 lg:py-36 relative overflow-hidden">
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
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-8 text-center"
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Join the MelodyHub Community
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Sign up now and get 3 months free premium access. Dive into a
              world of unlimited music and connect with music lovers worldwide.
            </p>
          </div>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition duration-300 ease-in-out hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 shadow-lg">
            Start Your Free Trial
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;
