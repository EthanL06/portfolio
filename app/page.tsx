"use client";

import About from "@/components/About";
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

  const gradientX = mousePos.x;
  const gradientY = mousePos.y + scrollPos; // Adjust for scroll position

  return (
    <div
      style={{
        background: `radial-gradient(600px at ${gradientX}px ${gradientY}px, rgba(134, 69, 175, 0.15), transparent 80%)`,
      }}
    >
      <div className="  mx-auto flex min-h-screen  flex-col items-center  pb-[14rem]">
        <Navbar />

        <div className="min-h-[calc(100vh-152px)] w-full max-w-[70rem] px-10 2xl:px-4 ">
          <Hero />
        </div>
        <div className="w-full">
          <About />
        </div>
        <div className="mt-40 w-full max-w-[70rem] px-10 sm:mt-80 2xl:px-4">
          <Projects />
        </div>
      </div>
    </div>
  );
}
