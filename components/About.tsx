import SectionTitle from "./SectionTitle";
import Link from "next/link";
import Image from "next/image";
import { FaDownload } from "react-icons/fa6";

export default function About() {
  return (
    <section
      id="about"
      className=" px-8 py-6 xl:px-40 xl:py-9 lg:px-30 lg:py-7 border-b border-border-sand"
    >
      <SectionTitle counter={"02"} text={"ABOUT ME"} />
      <h1 className="lg:px-6 font-barlowcondensed font-bold text-5xl tracking-tight pt-3 text-brown lg:text-6xl">
        I LIKE BUILDING THINGS THAT MAKE AN IMPACT
        <span className="text-xl text-yellow ml-1 lg:text-2xl">&#9632;</span>
      </h1>
      <div className="lg:px-6 text-brown font-manrope font-bold text-[1rem] lg:text-xl pt-3 flex flex-col gap-2 pb-2">
        <p>
          I'm a full-stack developer focused on building practical and scalable
          web applications.
        </p>
        <p>
          I enjoy working with modern technologies like{" "}
          <span className="bg-yellow px-1 ">Next.js</span>
          ,&nbsp;
          <span className="bg-yellow px-1">React</span>,{" "}
          <span className="bg-yellow px-1">Node.js</span> and{" "}
          <span className="bg-yellow px-1">MongoDB</span> to bring ideas to
          life.
        </p>
        <p>
          From personal projects to real-world solutions, I care about clean
          code, great user experience and building{" "}
          <span className="bg-yellow px-1">products that people love.</span>
        </p>
      </div>
    </section>
  );
}
