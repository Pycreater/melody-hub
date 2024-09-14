"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "./navbar";
import {
  Music,
  Play,
  Headphones,
  Radio,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LandingPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
      </div>
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center space-y-4 text-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-black"
                variants={itemVariants}
              >
                Welcome to MelodyHub
              </motion.h1>
              <motion.p
                className="mx-auto max-w-[700px] text-gray-500 md:text-xl"
                variants={itemVariants}
              >
                Your personal symphony of sounds. Stream, discover, and enjoy
                your favorite music anytime, anywhere.
              </motion.p>
              <motion.div className="space-x-4" variants={itemVariants}>
                <Button
                  size="lg"
                  className="bg-black text-white hover:bg-gray-800 transition-colors rounded-xl"
                >
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-black border-gray-200 hover:bg-gray-100 transition-colors rounded-xl"
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <motion.div
              className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                {
                  icon: Play,
                  title: "Instant Playback",
                  description:
                    "Start listening to your favorite tracks with just one click.",
                },
                {
                  icon: Headphones,
                  title: "Personalized Playlists",
                  description:
                    "Discover new music tailored to your unique taste.",
                },
                {
                  icon: Radio,
                  title: "Offline Mode",
                  description:
                    "Download your music and listen even without an internet connection.",
                },
              ].map((item, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 rounded-xl hover:shadow-lg transform hover:-translate-y-1">
                    <CardContent className="flex flex-col items-center space-y-2 p-6">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <item.icon className="h-12 w-12 mb-2 text-black" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-black">
                        {item.title}
                      </h3>
                      <p className="text-center text-gray-500">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-black">
                  Experience MelodyHub
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Try our intuitive music player and feel the difference.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <motion.div
                  className="rounded-lg bg-white border border-gray-200 p-4 shadow-sm"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-black">
                      Now Playing
                    </h3>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="text-black hover:text-gray-700 transition-colors"
                    >
                      <Play className="h-4 w-4" />
                      <span className="sr-only">Play</span>
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <motion.div
                        className="h-2 rounded-full bg-black"
                        initial={{ width: "0%" }}
                        animate={{ width: "60%" }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      ></motion.div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>1:23</span>
                      <span>3:45</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 px-4 md:px-6 border-t border-gray-200">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © 2023 MelodyHub. All rights reserved.
          </p>
          <nav className="flex gap-6">
            <Link
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
              href="#"
            >
              Privacy Policy
            </Link>
          </nav>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link
              href="https://github.com/Pycreater"
              className="text-gray-400 hover:text-gray-900 transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/pratikyadav3949/"
              className="text-gray-400 hover:text-gray-900 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://www.instagram.com/prat_ik389/"
              className="text-gray-400 hover:text-gray-900 transition-colors"
            >
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
