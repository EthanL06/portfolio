import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};
const Contact = (props: Props) => {
  const url =
    "https://script.google.com/macros/s/AKfycbwLN0Ir3ADcA67rqYCXhMpTavSExEJtQC4QzgVm-sOzLaQEcrHLnreq6GKqR0hsqizTGw/exec";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const data = {
      name: (document.getElementById("input-name") as HTMLInputElement).value,
      email: (document.getElementById("input-email") as HTMLInputElement).value,
      message: (document.getElementById("input-message") as HTMLInputElement)
        .value,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        alert("Message sent successfully!");
      })
      .catch((err) => {
        console.log(err);
        alert("There was an error submitting the form.");
      });

    e.preventDefault();

    (document.getElementById("input-name") as HTMLInputElement).value = "";
    (document.getElementById("input-email") as HTMLInputElement).value = "";
    (document.getElementById("input-message") as HTMLInputElement).value = "";
  };

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

      <div className="w-full grid-cols-2 grid-rows-1 text-lg font-medium text-text-gray md:grid">
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
          className="mb-8 flex w-full flex-col gap-y-2 text-center md:text-left"
        >
          <span>Want to work with me?</span>
          <span>
            Send a message to{" "}
            <Link
              href="mailto:ethanlanting@gmail.com"
              target="_blank"
              className="purple font-bold text-purple-accent underline underline-offset-[6px]"
            >
              ethanlanting@gmail.com
            </Link>
          </span>
          <span>or use the contact form.</span>
        </motion.div>
        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-y-8">
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
          >
            <label htmlFor="input-name" className="block pb-2 text-white">
              Name
            </label>
            <input
              type="text"
              id="input-name"
              className=" gray w-full rounded-md border-transparent bg-[#272a36] px-5 py-4 font-medium outline-none outline-2 outline-offset-0 outline-[#383c4e] transition-colors focus:border-transparent focus:outline-2 focus:outline-purple-accent"
              placeholder="John Doe"
            />
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
          >
            <label htmlFor="input-email" className="block pb-2 text-white">
              Email
            </label>
            <input
              type="email"
              id="input-email"
              className=" gray w-full rounded-md border-transparent bg-[#272a36] px-5 py-4 font-medium outline-none outline-2 outline-offset-0 outline-[#383c4e] transition-colors focus:border-transparent focus:outline-2 focus:outline-purple-accent"
              placeholder="john.doe@example.com"
            />
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
          >
            <label htmlFor="input-message" className="block pb-2 text-white">
              Message
            </label>
            <textarea
              id="input-message"
              className=" gray min-h-[10rem] w-full rounded-md border-transparent bg-[#272a36] px-5 py-4 font-medium outline-none outline-2 outline-offset-0 outline-[#383c4e] transition-colors focus:border-transparent focus:outline-2 focus:outline-purple-accent"
              placeholder="Hi there!"
            ></textarea>
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
            className="flex w-full justify-end"
          >
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.2, duration: 0.5, ease: "easeInOut" },
              }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className=" purple w-full rounded-md bg-purple-accent px-6 py-4 text-lg font-bold text-white transition-shadow duration-200 hover:shadow-[0_0_100px_100px_rgba(255,255,255,0.1)_inset] md:max-w-[10rem]  "
            >
              Submit
            </motion.button>
          </motion.div>
        </form>
      </div>
    </div>
  );
};
export default Contact;
