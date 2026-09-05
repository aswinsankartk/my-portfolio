import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";
import Link from "next/link";
import SectionTitle from "./SectionTitle";

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-8 py-6 xl:px-40 xl:py-9 lg:px-30 lg:py-7 border-b border-border-sand"
    >
      <SectionTitle counter={"04"} text={"EXPERIENCE"} />
      <div className="flex flex-col gap-3 mb-2 px-4 lg:px-6">
        <h3 className="font-barlowcondensed font-bold text-3xl lg:text-5xl text-brown pt-4">
          MERN STACK INTERN
        </h3>
        <p className="font-bold font-manrope lg:text-lg text-sm">
          Codec Technologies
        </p>
        <p className="font-bold font-manrope text-sm flex lg:text-lg justify-between">
          <span className="flex gap-2 items-center">
            <FaCalendarAlt />
            April - May, 2026
          </span>
          <Link
            href={
              "https://codectechnologies.in/courses/1-month-mern-stack-developer-internship/"
            }
            target="_blank"
            className=""
          >
            <FaArrowRight size={18} className="lg:size-6" />
          </Link>
        </p>
      </div>
    </section>
  );
}
