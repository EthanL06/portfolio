import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="  mx-auto flex min-h-screen max-w-[90rem] flex-col items-center px-10  2xl:px-4">
      <Navbar />

      <div className="min-h-[calc(100vh-152px)] w-full">
        <Hero />
      </div>
      <Projects />
    </div>
  );
}
