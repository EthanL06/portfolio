import { motion } from "framer-motion";
import Project from "./Project";

import data from "../data/projects.json";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center gap-y-12">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.3, type: "spring" },
          }}
          viewport={{
            once: true,
          }}
          id="projects"
          className="text-xl font-extrabold uppercase text-purple-accent"
        >
          Projects
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.4, type: "spring" },
          }}
          viewport={{
            once: true,
          }}
          className="text-4xl font-bold"
        >
          {" "}
          What I&apos;ve Worked On.
        </motion.div>
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-y-8">
        {data.map((project, index) => {
          return (
            <Project
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              repo={project.repo}
              technologies={project.technologies}
              reverse={index % 2 === 0}
              index={index + 1}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Projects;
