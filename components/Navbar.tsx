"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const links = [
  {
    name: "Home",
    href: "/#home",
  },
  {
    name: "Projects",
    href: "/#projects",
  },
  {
    name: "Contact",
    href: "/#contact",
  },
];

type Props = {};
const Navbar = (props: Props) => {
  return (
    <>
      <nav className="pointer-events-none fixed top-0 z-10 flex w-full flex-col items-center justify-center border-gray-600  md:pointer-events-auto  ">
        <div className="pointer-events-auto flex w-full  items-center justify-between border-gray-600  px-10 py-4 backdrop-blur-md md:border-none 2xl:px-44 ">
          <div className="flex items-center gap-x-32">
            <Link className="purple" href="/">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
              >
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  className="h-20 w-20"
                  width={300}
                  height={300}
                  priority={true}
                />
              </motion.div>
            </Link>
            <ul className=" hidden items-center gap-x-16 text-lg font-semibold text-nav-gray transition-all duration-100 ease-in-out md:flex">
              {links.map((link, index) => (
                <motion.ul
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    ease: "easeInOut",
                    delay: 0.3 * (index + 1),
                    duration: 0.5,
                  }}
                  className="purple transition-colors duration-[250ms] before:mr-2 before:inline-block before:h-0 before:w-0 before:rounded-full before:bg-purple-accent before:align-middle before:transition-all before:duration-[250ms] before:content-[''] hover:scale-110 hover:cursor-pointer hover:font-extrabold hover:text-light-white hover:before:h-2 hover:before:w-2"
                  key={link.name}
                  onClick={() => {
                    const element = document.getElementById(
                      link.name.toLowerCase(),
                    );

                    if (element) {
                      window.scrollTo({
                        top: element.offsetTop - 112,
                        behavior: "smooth",
                      });

                      window.history.pushState({}, "", link.href);
                    }
                  }}
                >
                  {link.name}
                </motion.ul>
              ))}
            </ul>
          </div>

          <Link
            className="purple"
            href={"https://github.com/EthanL06"}
            target="_blank"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", delay: 0.3 * 4, duration: 0.5 }}
              className=""
            >
              <svg
                className="h-12 w-12 fill-light-white transition-all duration-200 ease-in-out hover:cursor-pointer hover:fill-purple-700"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
            </motion.div>
          </Link>

          {/* <button className="scale-100 rounded-lg p-2 transition-all duration-200 ease-in-out hover:bg-gray-900/10 active:scale-90 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button> */}
        </div>

        {/* <MobileNavbar /> */}
      </nav>

      <MobileBar />
    </>
  );
};

const MobileNavbar = () => {
  return (
    <div className=" flex min-h-[calc(100vh-112px)] w-full flex-col backdrop-blur-3xl md:hidden">
      {links.map((link, index) => (
        <button
          className="w-full border-b border-gray-700 px-10 py-12 text-center text-2xl font-bold transition-all duration-200 ease-in-out hover:bg-gray-900/40"
          key={index}
        >
          {link.name}
        </button>
      ))}
    </div>
  );
};

const MobileBar = () => {
  return (
    <div className="pointer-events-none fixed bottom-0 left-0 z-10 w-full md:hidden">
      <div className="pointer-events-auto grid w-full grid-cols-3  grid-rows-1 border-t border-gray-600/50 backdrop-blur-3xl">
        <button
          onClick={() => {
            // smooth scroll to top
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className="group relative flex flex-col items-center justify-center gap-y-2 border-r border-gray-600/50 pb-2 pt-6 hover:bg-gray-900/40"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6 transition-colors duration-200 group-hover:stroke-purple-accent "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>

          <div className="h-8 overflow-hidden">
            <span
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className="relative top-4 text-sm font-bold text-purple-accent opacity-0 transition-all duration-200 ease-in-out group-hover:top-0 group-hover:opacity-100 "
            >
              Home
            </span>
          </div>
        </button>

        <button
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
          className="group flex flex-col items-center justify-center gap-y-2 border-r border-gray-600/50 pb-2 pt-6 hover:bg-gray-900/40"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6 transition-colors duration-200 group-hover:stroke-purple-accent "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
            />
          </svg>

          <div className="h-8 overflow-hidden">
            <span className="relative top-4 text-sm font-bold text-purple-accent opacity-0 transition-all duration-200 ease-in-out group-hover:top-0 group-hover:opacity-100">
              Projects
            </span>
          </div>
        </button>

        <button
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
          className="group flex flex-col items-center justify-center gap-y-2 pb-2 pt-6 hover:bg-gray-900/40"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6 transition-colors duration-200 group-hover:stroke-purple-accent "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>

          <div className="h-8 overflow-hidden">
            <span className="relative top-4 text-sm font-bold text-purple-accent opacity-0 transition-all duration-200 ease-in-out group-hover:top-0 group-hover:opacity-100">
              Contact
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
