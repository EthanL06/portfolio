"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollPos, setScrollPos] = useState(0);
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );

  useEffect(() => {
    setIsMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    document.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const gradientX = mousePos.x;
  const gradientY = mousePos.y + scrollPos; // Adjust for scroll position

  const shouldApplyGradient = screenWidth > 768; // md breakpoint

  return (
    isMounted && (
      <div
        id="home"
        style={{
          background: shouldApplyGradient
            ? `radial-gradient(600px at ${gradientX}px ${gradientY}px, rgba(134, 69, 175, 0.15), transparent 80%)`
            : "transparent", // Set transparent background for smaller screens
        }}
      >
        <div className="  mx-auto flex min-h-screen  flex-col items-center  pb-[5rem]">
          <Navbar />
          <div className="min-h-[calc(100vh-152px)] w-full max-w-[70rem] px-4 sm:px-10 2xl:px-4 ">
            <Hero />
          </div>
          <div className="w-full">
            <About />
          </div>
          <div className="mt-40 w-full max-w-[70rem] px-6 sm:mt-80 2xl:px-4">
            <Projects />
          </div>
          <div className="mt-40 w-full max-w-[70rem] px-10 sm:mt-80 2xl:px-4">
            <Contact />
          </div>
          <span className="mt-20 text-lg font-bold text-red-400">
            DO NOT SCROLL DOWN!
          </span>
          <Footer />
        </div>
      </div>
    )
  );
}
