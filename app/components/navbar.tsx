"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Music } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const session = useSession();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      <motion.header
        className={`px-4 lg:px-6 h-16 flex items-center fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-lg m-4 rounded-2xl"
            : "bg-transparent"
        }`}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link className="flex items-center justify-center" href="#">
          <Music
            className={`h-8 w-8 mr-2 ${
              isScrolled ? "text-primary" : "text-black"
            }`}
          />
          <span
            className={`font-bold text-xl ${
              isScrolled ? "text-primary" : "text-black"
            }`}
          >
            MelodyHub
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          {["Features", "Pricing", "About"].map((item) => (
            <Link
              key={item}
              className={`text-sm font-medium ${
                isScrolled
                  ? "text-gray-600 hover:text-primary"
                  : "text-gray-500 hover:text-gray-900"
              } transition-colors`}
              href="#"
            >
              {item}
            </Link>
          ))}
          {session.data?.user && (
            <Button
              variant={isScrolled ? "default" : "outline"}
              className={
                isScrolled
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "text-gray-900 border-gray-200 hover:bg-gray-100"
              }
            >
              Sign In
            </Button>
          )}
          {!session.data?.user && (
            <Button
              variant={isScrolled ? "default" : "outline"}
              className={
                isScrolled
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "text-gray-900 border-gray-200 hover:bg-gray-100"
              }
            >
              Logout
            </Button>
          )}
        </nav>
      </motion.header>
    </AnimatePresence>
  );
}
