"use client";

import React from "react";
import Link from "next/link";
import { Music } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const session = useSession();
  return (
    <header
      className={`${
        isScrolled ? "bg-gray-900 shadow-lg" : ""
      } sticky top-0 z-50 px-4 lg:px-6 h-16 flex items-center transition-all duration-300 ease-in-out`}
    >
      <Link className="flex items-center justify-center" href="#">
        <Music className="h-6 w-6 mr-2 text-white" />
        <span className="font-bold text-lg" style={{ fontFamily: "Poppins" }}>
          MelodyHub
        </span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
          style={{ fontFamily: "Poppins" }}
        >
          Features
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
          style={{ fontFamily: "Poppins" }}
        >
          Pricing
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
          style={{ fontFamily: "Poppins" }}
        >
          About
        </Link>
        {session.data?.user && (
          <button
            className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full transition duration-300 ease-in-out hover:bg-gray-200"
            onClick={() => signOut()}
            style={{ fontFamily: "Poppins" }}
          >
            Sign In
          </button>
        )}
        {!session.data?.user && (
          <button
            className="text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full transition duration-300 ease-in-out hover:from-purple-600 hover:to-pink-600"
            onClick={() => signIn()}
            style={{ fontFamily: "Poppins" }}
          >
            Sign Up
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
