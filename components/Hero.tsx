"use client";

import { motion } from "framer-motion";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-between">
      <div className="flex w-full flex-col justify-center lg:w-auto">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ ease: "easeInOut", delay: 0.5, duration: 0.7 }}
          className="gradient-text overflow-hidden text-center text-5xl font-extrabold  leading-normal tracking-normal lg:whitespace-nowrap lg:text-left lg:text-[3.6875rem] "
        >
          Bringing Ideas
          <br className="block sm:hidden" />
          to Life.
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", delay: 0.8, duration: 0.5 }}
          className="mt-1 w-full text-center text-xl font-medium text-text-gray lg:max-w-[37.5rem] lg:text-left"
        >
          Hi, I&apos;m <span className="font-bold text-light-white">Ethan</span>
          . <br className="block sm:hidden" />A web developer from Texas.
        </motion.div>

        <div className="mt-8 flex w-full flex-wrap justify-center gap-x-4 gap-y-4 sm:mt-4 lg:justify-start">
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
            className=" w-full max-w-xs rounded-md bg-purple-accent px-6 py-4 text-lg font-bold transition-shadow duration-200 hover:shadow-[0_0_100px_100px_rgba(255,255,255,0.1)_inset] sm:mt-8 sm:w-auto"
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
            className=" w-full max-w-xs rounded-md border-purple-accent bg-transparent px-6 py-4 text-lg font-bold transition-shadow duration-200 hover:shadow-[0_0_100px_100px_rgba(255,255,255,0.15)_inset] active:scale-95 sm:mt-8 sm:w-auto"
          >
            Contact Me
          </motion.button>
        </div>
      </div>

      <HeroImage />
    </div>
  );
};
export default Hero;
