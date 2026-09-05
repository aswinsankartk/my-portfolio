import Link from "next/link";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { FaArrowRight } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="transition-all  flex-col xl:px-40 xl:py-9 lg:px-30 lg:py-7  overflow-hidden border-b border-border-sand px-8 py-6 relative h-150 lg:h-144"
    >
      <SectionTitle counter={"06"} text={"LET'S BUILD"} />
      <h1 className="lg:text-8xl lg:px-6 font-barlowcondensed font-bold text-7xl leading-16 tracking-tight pt-3 text-brown">
        SOMETHING GREAT
        <span className="text-2xl text-yellow ml-1 lg:text-4xl">&#9632;</span>
      </h1>
      <p className="lg:text-xl lg:pl-6 lg:w-130 w-72 font-manrope text-md font-extrabold mt-7 leading-relaxed">
        Have an idea or opportunity? Let's connect and build something
        impactful.
      </p>
      <Link
        href={"https://calendly.com/aswinsankartk"}
        target="_blank"
        className="lg:pl-6 flex gap-5 items-center font-manrope  font-black text-md text-tan mt-8 w-44 lg:w-72 lg:text-lg"
      >
        <p>GET IN TOUCH</p>
        <FaArrowRight className="cursor-pointer" />
      </Link>
      <Image
        src={"/avatar-working.webp"}
        width={500}
        height={500}
        alt="aswinsankar-avatar-working"
        className="overflow-hidden absolute bottom-0 -right-26 w-[95%] z-5 pointer-events-none lg:w-[40%] lg:right-30"
      />
    </section>
  );
}
