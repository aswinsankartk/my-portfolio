import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";
import SectionTitle from "./SectionTitle";
export default function Hero() {
  return (
    <section
      id="Hero"
      className="transition-all mt-20 flex-col  overflow-hidden border-b border-border-sand px-8 relative min-h-163"
    >
      <div className="w-full font-extrabold font-manrope justify-start gap-10  text-tan flex">
        <span className="border-b-2">&nbsp;01&nbsp;&nbsp;</span>
        <span>SOFTWARE DEVELOPER</span>
      </div>
      <div className="translate-y-6 ">
        <h1 className="font-barlowcondensed font-bold text-8xl leading-20 tracking-tight  text-brown">
          BUILDING WHAT MATTERS
          <span className="text-3xl text-yellow ml-1">&#9632;</span>
        </h1>
        <p className="w-72 font-manrope text-md font-extrabold mt-10 leading-relaxed">
          Full-stack developer who turns ideas into thoughtful, functional
          digital experiences.
        </p>
        <div className="flex gap-7 items-center font-manrope  font-black text-md text-tan mt-9 ">
          <p>SCROLL TO EXPLORE</p>
          <FaArrowDown className="animate-bounce" />
        </div>
      </div>
      <Image
        src={"/avatar-cutout.webp"}
        width={500}
        height={500}
        alt={"aswinsankar-avatar"}
        className=" overflow-hidden absolute bottom-0 -right-26 w-[80%] z-10"
      />
    </section>
  );
}
