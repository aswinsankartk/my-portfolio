import Link from "next/link";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { FaArrowRight } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="transition-all  flex-col  overflow-hidden border-b border-border-sand px-8 py-6 relative min-h-150"
    >
      <SectionTitle counter={"05"} text={"LET'S BUILD"} />
      <h1 className="font-barlowcondensed font-bold text-7xl leading-20 tracking-tight  text-brown">
        SOMETHING GREAT
        <span className="text-3xl text-yellow ml-1">&#9632;</span>
      </h1>
      <p className="w-72 font-manrope text-md font-extrabold mt-8 leading-relaxed">
        Have an idea or opportunity? Let's connect and build something
        impactful.
      </p>
      <Link
        href={"https://calendly.com/aswinsankartk"}
        target="_blank"
        className="flex gap-5 items-center font-manrope  font-black text-md text-tan mt-8"
      >
        <p>GET IN TOUCH</p>
        <FaArrowRight className="cursor-pointer" />
      </Link>
      <Image
        src={"/avatar-working.webp"}
        width={500}
        height={500}
        alt="aswinsankar-avatar-working"
        className="overflow-hidden absolute bottom-0 -right-26 w-[95%] z-10"
      />
    </section>
  );
}
