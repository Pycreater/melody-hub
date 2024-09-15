"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Music, Menu, X } from "lucide-react"; // Import hamburger and close icons
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const session = useSession();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            ? "bg-slate-100 backdrop-blur-xl shadow-lg m-4 rounded-2xl"
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

        {/* Hamburger for small screens */}
        <div className="ml-auto block lg:hidden">
          <Button
            variant="ghost"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Navigation for medium and large screens */}
        <nav className="hidden lg:flex ml-auto gap-4 sm:gap-6 items-center">
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
          {!session.data?.user && (
            <Button
              variant={isScrolled ? "default" : "outline"}
              className={
                isScrolled
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "text-gray-900 border-gray-200 hover:bg-gray-100"
              }
              onClick={() => signIn()}
            >
              Sign In
            </Button>
          )}
          {session.data?.user && (
            <Button
              variant={isScrolled ? "default" : "outline"}
              className={
                isScrolled
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "text-gray-900 border-gray-200 hover:bg-gray-100"
              }
              onClick={() => signOut()}
            >
              Logout
            </Button>
          )}
        </nav>

        {/* Dropdown menu for small screens */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="absolute top-16 left-0 right-0 bg-white shadow-lg z-50 lg:hidden"
            >
              <nav className="flex flex-col items-center gap-4 p-4">
                {["Features", "Pricing", "About"].map((item) => (
                  <Link
                    key={item}
                    className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
                    href="#"
                  >
                    {item}
                  </Link>
                ))}
                {!session.data?.user && (
                  <Button
                    variant="default"
                    className="w-full"
                    onClick={() => {
                      signIn();
                      setIsMenuOpen(false); // Close the menu after sign in
                    }}
                  >
                    Sign In
                  </Button>
                )}
                {session.data?.user && (
                  <Button
                    variant="default"
                    className="w-full"
                    onClick={() => {
                      signOut();
                      setIsMenuOpen(false); // Close the menu after sign out
                    }}
                  >
                    Logout
                  </Button>
                )}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </AnimatePresence>
  );
}
