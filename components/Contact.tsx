import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {};
const Contact = (props: Props) => {
  const [submitDisabled, setSubmitDisabled] = useState(false);

  const url =
    "https://script.google.com/macros/s/AKfycbwLN0Ir3ADcA67rqYCXhMpTavSExEJtQC4QzgVm-sOzLaQEcrHLnreq6GKqR0hsqizTGw/exec";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      name: (document.getElementById("input-name") as HTMLInputElement).value,
      email: (document.getElementById("input-email") as HTMLInputElement).value,
      message: (document.getElementById("input-message") as HTMLInputElement)
        .value,
    };

    setSubmitDisabled(true);

    try {
      // Use toast.promise to show a loading message while waiting for the promise
      const response = await toast.promise(
        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify(data),
        }).then((res) => res.json()),
        {
          pending: "Sending message...",
          success: "Message sent successfully!",
          error: "Error sending the message. Please try again.",
        },
      );

      (document.getElementById("input-name") as HTMLInputElement).value = "";
      (document.getElementById("input-email") as HTMLInputElement).value = "";
      (document.getElementById("input-message") as HTMLInputElement).value = "";

      console.log("data", response);
    } catch (err) {
      console.error(err);
    } finally {
      // Reset form values and button state

      setSubmitDisabled(false);
    }
  };

  useEffect(() => {
    console.log(submitDisabled);
  }, [submitDisabled]);

  return (
    <div
      id="contact"
      className="flex min-h-screen w-full flex-col items-center gap-y-12"
    >
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { type: "spring" },
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
            transition: { type: "spring" },
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
            transition: { type: "spring" },
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
              transition: { type: "spring" },
            }}
            viewport={{
              once: true,
            }}
          >
            <label htmlFor="input-name" className="block pb-2 text-white">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="input-name"
              required={true}
              autoComplete="off"
              className=" gray w-full rounded-md border-transparent bg-[#272a36] px-5 py-4 font-medium outline-none outline-2 outline-offset-0 outline-[#383c4e] transition-colors focus:border-transparent focus:outline-2 focus:outline-purple-accent"
              placeholder="John Doe"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { type: "spring" },
            }}
            viewport={{
              once: true,
            }}
          >
            <label htmlFor="input-email" className="block pb-2 text-white">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="input-email"
              required={true}
              pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
              className=" gray w-full rounded-md border-transparent bg-[#272a36] px-5 py-4 font-medium outline-none outline-2 outline-offset-0 outline-[#383c4e] transition-colors focus:border-transparent focus:outline-2 focus:outline-purple-accent"
              placeholder="john.doe@example.com"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { type: "spring" },
            }}
            viewport={{
              once: true,
            }}
          >
            <label htmlFor="input-message" className="block pb-2 text-white">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="input-message"
              required={true}
              autoComplete="false"
              className=" gray min-h-[10rem] w-full rounded-md border-transparent bg-[#272a36] px-5 py-4 font-medium outline-none outline-2 outline-offset-0 outline-[#383c4e] transition-colors focus:border-transparent focus:outline-2 focus:outline-purple-accent"
              placeholder="Hi there!"
            ></textarea>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { type: "spring" },
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
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={submitDisabled}
              className=" purple w-full rounded-md bg-purple-accent px-6 py-4 text-lg font-bold text-white transition-shadow duration-200 hover:shadow-[0_0_100px_100px_rgba(255,255,255,0.1)_inset] disabled:cursor-not-allowed disabled:bg-purple-accent/50 disabled:text-white/50 disabled:shadow-none disabled:hover:shadow-none md:max-w-[10rem]"
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
