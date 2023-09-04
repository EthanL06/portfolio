import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

type Props = {
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
  reverse?: boolean;
};

const Project: React.FC<Props> = ({
  title,
  description,
  image,
  link,
  technologies,
  reverse = false,
}: Props) => {
  const router = useRouter();

  return (
    <div
      className={`grid w-full max-w-none grid-cols-1 grid-rows-2 place-items-center rounded-md bg-[#383c4e]  sm:max-w-xl lg:min-h-[25rem] lg:max-w-none lg:grid-cols-2 lg:grid-rows-1 lg:gap-8`}
    >
      <div
        className={`${
          reverse
            ? "lg:col-start-2 lg:col-end-2 lg:row-start-1 lg:row-end-1"
            : ""
        } h-full w-full overflow-clip rounded-lg`}
      >
        <Link href={image}>
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-all duration-1000 ease-in-out hover:scale-110"
          />
        </Link>
      </div>
      <div
        className={`${
          reverse ? "lg:pl-12" : "lg:pr-12"
        } flex h-full w-full flex-col gap-y-4 px-8 py-8 lg:px-0 lg:px-12 `}
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

        <div className="flex gap-x-4">
          <motion.button
            onClick={() => {
              router.push(link);
            }}
            whileTap={{ scale: 0.95 }}
            className="rounded-md bg-purple-accent px-6 py-4 text-lg font-bold transition-shadow duration-200 hover:shadow-[0_0_100px_100px_rgba(255,255,255,0.1)_inset]"
          >
            View Project
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.95 }}
            className="rounded-md border-purple-accent bg-transparent px-6 py-4 text-lg font-bold transition-shadow duration-200 hover:shadow-[0_0_100px_100px_rgba(255,255,255,0.15)_inset] active:scale-95"
          >
            View Code
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Project;
