import { motion } from "framer-motion";

type Props = {};
const Contact = (props: Props) => {
  return (
    <div
      id="contact"
      className="flex min-h-screen w-full flex-col items-center gap-y-12"
    >
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
          Contact
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
          Get in Touch.
        </motion.div>
      </div>

      <div className="text-lg font-medium text-text-gray">Coming Soon...</div>
    </div>
  );
};
export default Contact;
