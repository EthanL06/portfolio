import { motion, useInView } from "framer-motion";
import Image from "next/image";

import Link from "next/link";
import { useEffect, useRef } from "react";

type Props = {};
const Footer = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.6 });

  useEffect(() => {
    if (isInView) {
      ref.current?.setAttribute("style", "opacity: 1");
    }
  }, [isInView]);

  return (
    <div className="flex h-[2000vh] w-full flex-col items-center justify-end font-semibold text-text-gray">
      <div className="mb-[500vh] mt-[300vh]">
        Why are you still scrolling...
      </div>
      <div
        style={{
          opacity: 0,
        }}
        ref={ref}
      >
        <Image
          loading="lazy"
          alt="scary image"
          src="/images/scary_image.webp"
          className="h-[1000px] w-[2000px] "
          width={900}
          height={600}
        />
      </div>

      <div className="mt-[100vh] flex flex-col items-center gap-y-1">
        <span className="block text-xl">You&apos;ve reached the end!</span>
        <div
          className="purple text-lg font-bold text-purple-accent underline underline-offset-[6px]"
          onClick={() => {
            const element = document.getElementById("home");

            if (element) {
              window.scrollTo({
                top: element.offsetTop - 112,
                behavior: "smooth",
              });

              window.history.pushState({}, "", "/#home");
            }
          }}
        >
          Go back to top
        </div>
      </div>
    </div>
  );
};
export default Footer;
