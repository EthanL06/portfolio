import { motion } from "framer-motion";

type Props = {};
const About = (props: Props) => {
  return (
    <div className="full flex min-h-[30rem]  w-full justify-center ">
      <div className="grid w-full max-w-[70rem] grid-cols-1 grid-rows-2  gap-x-8 px-10 py-12 lg:grid-cols-2 lg:grid-rows-1 2xl:px-4">
        <div>
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
            className="text-xl font-extrabold uppercase text-purple-accent"
          >
            ABOUT ME
          </motion.div>

          <div className="flex flex-col gap-y-4">
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
              A Self-taught Developer
            </motion.div>
            <p className=" mt-2 max-w-[50ch] text-lg text-text-gray">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.5, type: "spring" },
                }}
                viewport={{
                  once: true,
                }}
              >
                Hey there! I&apos;m Ethan Lanting. I currently attend high
                school as a senior, and I am looking to pursue a career in web
                development.
              </motion.span>
              <br />
              <br />
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.6, type: "spring" },
                }}
                viewport={{
                  once: true,
                }}
              >
                I have been working with web development for about 2 years now
                and I have learned a lot. I have worked with many different
                technologies and frameworks such as React, Next.js, Tailwind
                CSS, and more. I am currently working on a few projects that I
                hope to release soon.
              </motion.span>
              <br />
              <br />
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.6, type: "spring" },
                }}
                viewport={{
                  once: true,
                }}
              >
                Also, I am looking for a job as a web developer. If you are
                interested in hiring me, please contact me through the contact
                page. I would love to work with you!
              </motion.span>
              <br />
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{
            once: true,
          }}
          className="flex w-full justify-center"
        >
          <img
            src="/images/about.svg"
            alt="about"
            className="w-[30rem] lg:h-full lg:w-full"
          />
        </motion.div>
      </div>
    </div>
  );
};
export default About;
