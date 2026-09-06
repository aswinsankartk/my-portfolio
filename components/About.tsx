import SectionTitle from "./SectionTitle";
import Link from "next/link";
import { MdOutlineFileDownload } from "react-icons/md";

export default function About() {
  return (
    <section
      id="about"
      className=" px-8 py-6 xl:px-40 xl:py-9 lg:px-30 border-b border-border-sand md:px-15 md:py-8"
    >
      <SectionTitle counter={"02"} text={"ABOUT ME"} />
      <h1 className="lg:px-6 font-barlowcondensed font-bold text-5xl tracking-tight pt-3 text-brown md:text-6xl lg:text-7xl md:w-160 lg:w-full ">
        I LIKE BUILDING THINGS THAT MAKE AN IMPACT
        <span className="text-xl text-yellow ml-1 md:text-2xl lg:text-4xl">
          &#9632;
        </span>
      </h1>
      <div className="lg:px-6 text-brown font-manrope font-bold text-[1rem] md:text-xl pt-3 flex flex-col gap-2 pb-2 md:gap-3">
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
        <p className="mt-3">
          Get a complete overview of my{" "}
          <span className="bg-yellow px-1">experience, skills, projects</span>{" "}
          and <span className="bg-yellow px-1">education.</span> Always updated
          with my latest work.
        </p>
      </div>
      <Link href={"Aswin-Sankar-Resume.pdf"} download target="_blank">
        <button className=" flex items-center gap-2 text-brown pt-5 pb-2 text-lg font-extrabold font-manrope lg:pl-6 cursor-pointer hover:scale-101 active:scale-98 transition-all hover:text-tan">
          <MdOutlineFileDownload size={25} /> DOWNLOAD RESUME
        </button>
      </Link>
    </section>
  );
}
