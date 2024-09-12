"use client";

import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

export const SparklesCore = (props: {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  particleColor?: string;
  particleSpeed?: number;
  particleBlur?: number;
  [key: string]: any;
}) => {
  const {
    id,
    className,
    background = "transparent",
    minSize = 0.4,
    maxSize = 1,
    particleDensity = 100,
    particleColor = "#FFF",
    particleSpeed = 0.5,
    particleBlur = 0,
    ...rest
  } = props;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      if (canvas && canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles: Particle[] = [];

    const createParticle = () => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = Math.random() * (maxSize - minSize) + minSize;
      const speedX = Math.random() * particleSpeed * 2 - particleSpeed;
      const speedY = Math.random() * particleSpeed * 2 - particleSpeed;

      particles.push({ x, y, size, speedX, speedY });
    };

    for (let i = 0; i < particleDensity; i++) {
      createParticle();
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX = -particle.speedX;
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY = -particle.speedY;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        if (particleBlur > 0) {
          ctx.filter = `blur(${particleBlur}px)`;
        }
        ctx.fill();
        ctx.filter = "none";
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [
    background,
    minSize,
    maxSize,
    particleDensity,
    particleColor,
    particleSpeed,
    particleBlur,
  ]);

  return (
    <canvas
      ref={canvasRef}
      id={id}
      className={cn("absolute inset-0 z-0", className)}
      {...rest}
    />
  );
};

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
}
