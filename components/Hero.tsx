"use client";

import { motion } from "framer-motion";

const Hero = (props: Props) => {
  return (
    <div className="flex min-h-[calc(100vh-350px)] w-full items-center justify-between">
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
          className="text-text-gray mt-1 max-w-[37.5rem] text-left text-xl font-medium "
        >
          Hi, I&apos;m <span className="font-bold text-light-white">Ethan</span>
          . A web developer from Texas.
        </motion.div>

        <div className="mt-4 flex w-full gap-x-4">
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", delay: 1.2, duration: 0.5 }}
            className="relative bottom-0 mt-8 rounded-md bg-purple-accent px-6 py-4 text-lg font-bold transition-all duration-200 hover:shadow-[0_0_100px_100px_rgba(255,255,255,0.1)_inset] active:scale-95 "
          >
            Explore my Projects
          </motion.button>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", delay: 1.5, duration: 0.5 }}
            className="relative bottom-0 mt-8 rounded-md border-purple-accent bg-transparent px-6 py-4 text-lg font-bold transition-all duration-200 hover:shadow-[0_0_100px_100px_rgba(255,255,255,0.15)_inset] active:scale-95 "
          >
            Contact Me
          </motion.button>
        </div>
      </div>

      <motion.img
        initial={{ opacity: 0, y: 45 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        src="/hero.svg"
        alt="hero"
        className="hidden lg:block lg:w-[24rem] xl:w-[30rem]  2xl:w-[40rem]"
      />
    </div>
  );
};
export default Hero;
