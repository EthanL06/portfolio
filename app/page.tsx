"use client";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import { useEffect, useState } from "react";

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    document.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log(mousePos);
  }, [mousePos]);

  useEffect(() => {
    console.log(scrollPos);
  }, [scrollPos]);

  const gradientX = mousePos.x;
  const gradientY = mousePos.y + scrollPos; // Adjust for scroll position

  return (
    <div
      style={{
        background: `radial-gradient(600px at ${gradientX}px ${gradientY}px, rgba(134, 69, 175, 0.15), transparent 80%)`,
      }}
    >
      <div className="  mx-auto flex min-h-screen max-w-[90rem] flex-col items-center px-10 2xl:px-4">
        <Navbar />

        <div className="min-h-[calc(100vh-152px)] w-full">
          <Hero />
        </div>
        <Projects />
      </div>
    </div>
  );
}
