"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextRevealCard = ({
  text,
  revealText,
  children,
  className,
}: {
  text: string;
  revealText: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseEnter = () => {
      setIsMouseOver(true);
      setTimeout(() => {
        if (isMouseOver) {
          setIsHovered(true);
        }
      }, 100);
    };

    const handleMouseLeave = () => {
      setIsMouseOver(false);
      setTimeout(() => {
        if (!isMouseOver) {
          setIsHovered(false);
        }
      }, 100);
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isMouseOver]);

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative overflow-hidden w-full max-w-xl rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 p-8",
        className
      )}
    >
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-100 mb-4"
        >
          {text}
        </motion.div>
        {children}
      </div>
      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? "0%" : "100%" }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 z-20 flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-500"
      >
        <div className="text-4xl font-bold text-white">{revealText}</div>
      </motion.div>
    </div>
  );
};

export const TextRevealCardTitle = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <h2 className="text-2xl font-bold text-gray-100 mb-2">{children}</h2>;
};

export const TextRevealCardDescription = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <p className="text-gray-300">{children}</p>;
};
