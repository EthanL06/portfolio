import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Project from "./Project";

type Props = {};

const Projects = (props: Props) => {
  const router = useRouter();

  return (
    <div className="flex min-h-screen w-full flex-col items-center gap-y-12">
      <div className="text-center">
        <div
          id="projects"
          className="text-xl font-extrabold uppercase text-purple-accent"
        >
          Projects
        </div>
        <div className="text-4xl font-bold">
          {" "}
          What I&apos;ve been working on.
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-y-8">
        <Project
          title="Galaxy Adventures"
          description="Built for the 2023 Webmasters Competition for the Technology
              Student Association. Won 2nd place in the state of Texas and 4th
              in the nation.
              <br/> <br/>
              Simulates a space tourism agency with a comprehensive booking
              system to plan your next trip to space destinations.
              "
          image="/images/galaxy_adventures.png"
          link="https://galaxyadventures.vercel.app/"
          technologies={["Next.js", "Tailwind CSS", "Framer Motion"]}
        />

        <Project
          title="Galaxy Adventures"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              consectetur, leo nec aliquam blandit, risus ipsum aliquet<br/>
              <br/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              "
          image="/images/galaxy_adventures.png"
          link="https://galaxyadventures.vercel.app/"
          technologies={["Next.js", "Tailwind CSS", "Framer Motion"]}
          reverse={true}
        />
      </div>
    </div>
  );
};
export default Projects;
