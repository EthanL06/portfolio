"use client";

import { motion } from "framer-motion";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-between">
      <div className="flex flex-col justify-center">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ ease: "easeInOut", delay: 0.5, duration: 0.7 }}
          className="gradient-text overflow-hidden text-left text-6xl font-extrabold leading-tight tracking-normal lg:whitespace-nowrap "
        >
          Bringing Ideas to Life.
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", delay: 0.8, duration: 0.5 }}
          className="mt-1 max-w-[37.5rem] text-left text-xl font-medium text-text-gray "
        >
          Hi, I&apos;m <span className="font-bold text-light-white">Ethan</span>
          . A web developer from Texas.
        </motion.div>

        <div className="mt-4 flex w-full gap-x-4">
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 1.2, duration: 0.5, ease: "easeInOut" },
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              // smooth scroll to #projects but with a little offset to account for the navbar
              const projects = document.getElementById("projects");
              if (projects) {
                window.scrollTo({
                  top: projects.offsetTop - 112,
                  behavior: "smooth",
                });

                window.history.pushState({}, "", "#projects");
              }
            }}
            className=" mt-8 rounded-md bg-purple-accent px-6 py-4 text-lg font-bold transition-shadow duration-200 hover:shadow-[0_0_100px_100px_rgba(255,255,255,0.1)_inset] "
          >
            Explore my Projects
          </motion.button>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 1.5, duration: 0.5, ease: "easeInOut" },
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              // smooth scroll to #projects but with a little offset to account for the navbar
              const projects = document.getElementById("contact");
              if (projects) {
                window.scrollTo({
                  top: projects.offsetTop - 112,
                  behavior: "smooth",
                });

                window.history.pushState({}, "", "#contact");
              }
            }}
            className=" mt-8 rounded-md border-purple-accent bg-transparent px-6 py-4 text-lg font-bold transition-shadow duration-200 hover:shadow-[0_0_100px_100px_rgba(255,255,255,0.15)_inset] active:scale-95 "
          >
            Contact Me
          </motion.button>
        </div>
      </div>

      {/* <motion.img
        initial={{ opacity: 0, y: 45 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        src="/hero.svg"
        alt="hero"
        className="hidden lg:block lg:w-[24rem] xl:w-[30rem]  2xl:w-[40rem]"
      /> */}

      <HeroImage />
    </div>
  );
};
export default Hero;
