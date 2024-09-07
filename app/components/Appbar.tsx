"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const Appbar = () => {
  const session = useSession();
  return (
    <nav className="flex justify-between items-center mx-auto bg-[#E4E4E7] rounded-b-3xl p-6">
      <div className="text-3xl">
        <span className="text-blue-500 font-semibold">Melody</span>Hub
      </div>
      <div>
        {session.data?.user && (
          <button
            className="bg-blue-500 text-white hover:cursor-pointer hover:bg-blue-600 rounded-xl p-3 hover:shadow-xl"
            onClick={() => signOut()}
          >
            Logout
          </button>
        )}
        {!session.data?.user && (
          <button
            className="bg-blue-500 text-white hover:cursor-pointer hover:bg-blue-600 rounded-xl p-3"
            onClick={() => signIn()}
          >
            Sign In
          </button>
        )}
      </div>
    </nav>
  );
};

export default Appbar;
