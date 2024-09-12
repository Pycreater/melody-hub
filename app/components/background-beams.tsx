"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      if (canvas && canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      }
    };

    const createBeam = () => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.floor(Math.random() * 200) + 100,
        opacity: Math.random() / 2 + 0.5,
        width: Math.random() * 4 + 2,
      };
    };

    const beams = Array(20).fill(null).map(createBeam);

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      beams.forEach((beam) => {
        ctx.beginPath();
        ctx.moveTo(beam.x, beam.y);
        ctx.lineTo(beam.x, beam.y + beam.length);
        ctx.strokeStyle = `rgba(255, 255, 255, ${beam.opacity})`;
        ctx.lineWidth = beam.width;
        ctx.stroke();

        beam.y -= 2;

        if (beam.y + beam.length < 0) {
          Object.assign(beam, createBeam(), { y: canvas.height });
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn(
        "absolute top-0 left-0 w-full h-full bg-black opacity-50",
        className
      )}
    />
  );
};
