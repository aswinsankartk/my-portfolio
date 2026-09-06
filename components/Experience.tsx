import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";
import Link from "next/link";
import SectionTitle from "./SectionTitle";

export default function Experience() {
  return (
    <section
      id="experience"
      className="md:px-15 md:py-8 px-8 py-6 xl:px-40 xl:py-9 lg:px-30 lg:py-7 border-b border-border-sand"
    >
      <SectionTitle counter={"04"} text={"EXPERIENCE"} />
      <div className="flex flex-col gap-3 mb-2 px-4 lg:px-6">
        <h3 className="font-barlowcondensed font-bold text-3xl md:text-4xl lg:text-5xl text-brown pt-4">
          MERN STACK INTERN
        </h3>
        <p className="font-bold font-manrope md:text-lg text-sm">
          Codec Technologies
        </p>
        <p className="font-bold font-manrope text-sm flex md:text-lg justify-between">
          <span className="flex gap-2 items-center">
            <FaCalendarAlt />
            April - May, 2026
          </span>
          <Link
            href={
              "https://codectechnologies.in/courses/1-month-mern-stack-developer-internship/"
            }
            target="_blank"
          >
            <FaArrowRight
              size={18}
              className="lg:size-6 md:size-5 hover:scale-101 active:scale-98 hover:text-tan hover:translate-x-2 transition-all"
            />
          </Link>
        </p>
      </div>
    </section>
  );
}
