"use client";
import React from "react";
import { AnimatedTooltip } from "./animated-tooltip";

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

const TeamSection: React.FC = () => {
  return (
    <section className="w-full py-20 md:py-28 lg:py-36 bg-gradient-to-b from-black to-purple-900">
      <div className="container mx-auto px-4 md:px-6">
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
          Our diverse team of music enthusiasts and tech experts work tirelessly
          to bring you the best music streaming experience possible.
        </p>
      </div>
    </section>
  );
};

export default TeamSection;
