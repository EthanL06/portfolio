import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  image: string;
  link: string;
  repo: string;
  technologies: string[];
  reverse?: boolean;
  index: number;
};

const Project: React.FC<Props> = ({
  title,
  description,
  image,
  link,
  repo,
  technologies,
  reverse = false,
  index,
}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.1 * (index + 1), type: "spring" },
      }}
      viewport={{
        once: true,
      }}
      className={` flex w-full max-w-none grid-cols-1 grid-rows-2 flex-col place-items-center rounded-md border-4 border-[#383c4e] bg-[#383c4e]  sm:max-w-xl  lg:grid lg:min-h-[25rem] lg:max-w-none lg:grid-cols-2 lg:grid-rows-1 lg:gap-8`}
    >
      <div
        className={`${
          reverse
            ? "lg:col-start-2 lg:col-end-2 lg:row-start-1 lg:row-end-1 lg:rounded-br-lg lg:rounded-tr-lg"
            : "lg:rounded-bl-lg lg:rounded-tl-lg "
        } h-full w-full overflow-clip rounded-b-none`}
      >
        <Link className="gray" href={link} target="_blank">
          <Image
            loading="lazy"
            src={image}
            alt={title}
            className="h-full w-full select-none object-cover transition-all duration-1000 ease-in-out hover:scale-110"
            width={524 * 2}
            height={420 * 2}
          />
        </Link>
      </div>
      <div
        className={`${
          reverse ? "lg:pl-12" : "lg:pr-12"
        } flex h-full w-full flex-col gap-y-4 px-8 py-8 lg:px-12 `}
      >
        <div className="text-4xl font-bold">{title}</div>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="rounded-md bg-[#272a36] px-3 py-2 font-medium"
            >
              {tech}
            </div>
          ))}
        </div>

        <div
          className="flex-grow whitespace-pre-line font-medium text-text-gray"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />

        <div className="flex flex-wrap gap-4 md:flex-row">
          <Link className="purple w-full md:w-auto" href={link} target="_blank">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className=" w-full rounded-md bg-purple-accent px-6 py-4 text-lg font-bold transition-shadow duration-200 hover:shadow-[0_0_100px_100px_rgba(255,255,255,0.1)_inset] "
            >
              View Project
            </motion.button>
          </Link>

          {repo.length > 0 && (
            <Link className="gray w-full md:w-auto" href={repo} target="_blank">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className=" w-full rounded-md border-purple-accent bg-transparent px-6 py-4 text-lg font-bold transition-shadow duration-200 hover:shadow-[0_0_100px_100px_rgba(255,255,255,0.15)_inset] active:scale-95 lg:w-auto"
              >
                View Code
              </motion.button>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
