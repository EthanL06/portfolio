import Link from "next/link";

type Props = {};
const Footer = (props: Props) => {
  return (
    <div className="flex h-[2000vh] flex-col items-center justify-end font-semibold text-text-gray">
      <div className="mb-[300rem]">Why are you still scrolling...</div>
      <div className="flex flex-col items-center gap-y-1">
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
