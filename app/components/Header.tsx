"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Music } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Menu, X } from "lucide-react"; // Hamburger and close icons

const Header: React.FC = () => {
  const { data: session } = useSession();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adjust scroll trigger value as needed
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle menu for mobile view
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-16 flex items-center transition-all duration-300 ease-in-out rounded-b-2xl
        ${
          isScrolled
            ? "bg-purple-900 bg-opacity-80 backdrop-blur-md shadow-lg rounded-2xl m-3"
            : "bg-transparent"
        }`}
    >
      <Link className="flex items-center justify-center" href="#">
        <Music className="h-8 w-8 mr-2 text-pink-500" />
        <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          MelodyHub
        </span>
      </Link>

      {/* Desktop Navigation (Hidden on smaller screens) */}
      <nav className="ml-auto hidden lg:flex gap-4 sm:gap-6 items-center ">
        {["Features", "Pricing", "About"].map((item) => (
          <Link
            key={item}
            className="text-sm font-medium hover:text-pink-500 transition-colors"
            href="#"
          >
            {item}
          </Link>
        ))}
        {session?.user ? (
          <button
            className="text-sm font-medium bg-pink-500 text-white px-4 py-2 rounded-full transition duration-300 ease-in-out hover:bg-pink-600 transform hover:scale-105"
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        ) : (
          <button
            className="text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full transition duration-300 ease-in-out hover:from-purple-600 hover:to-pink-600 transform hover:scale-105"
            onClick={() => signIn()}
          >
            Sign Up
          </button>
        )}
      </nav>

      {/* Hamburger Menu for Mobile (Only visible on smaller screens) */}
      <div className="ml-auto lg:hidden">
        <button onClick={toggleMenu} className="focus:outline-none text-white">
          {menuOpen ? (
            <X className="w-8 h-8" /> // Close icon when the menu is open
          ) : (
            <Menu className="w-8 h-8" /> // Hamburger icon
          )}
        </button>
      </div>

      {/* Mobile Menu (Visible when hamburger is clicked) */}
      {menuOpen && (
        <nav className="absolute top-16 left-0 right-0 bg-purple-900 bg-opacity-90 backdrop-blur-md rounded-b-2xl shadow-lg py-4 px-6 flex flex-col items-center space-y-4 text-white">
          {["Features", "Pricing", "About"].map((item) => (
            <Link
              key={item}
              className="text-sm font-medium hover:text-pink-500 transition-colors"
              href="#"
            >
              {item}
            </Link>
          ))}
          {session?.user ? (
            <button
              className="text-sm font-medium bg-pink-500 text-white px-4 py-2 rounded-full transition duration-300 ease-in-out hover:bg-pink-600"
              onClick={() => signOut()}
            >
              Sign Out
            </button>
          ) : (
            <button
              className="text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full transition duration-300 ease-in-out hover:from-purple-600 hover:to-pink-600"
              onClick={() => signIn()}
            >
              Sign Up
            </button>
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;
