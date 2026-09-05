import Link from "next/link";
import { IoIosArrowDropright } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
type ProjectProps = {
  title: String;
  demo: String;
  slogan: String;
  description: String;
  techs: string[];
  repository: String;
};
export default function Project({
  title,
  demo,
  slogan,
  description,
  techs,
  repository,
}: ProjectProps) {
  return (
    <div className="font-manrope lg:w-3xl lg:flex lg:flex-col">
      <Link href={`${demo}`}>
        <h3 className="font-barlowcondensed font-bold text-brown text-3xl lg:text-5xl pt-4 lg:pt-0 flex items-center">
          {title} <IoIosArrowDropright size={20} className="ml-2 lg:size-8" />
        </h3>
      </Link>

      <p className="font-bold text-tan lg:text-2xl lg:mt-1">{slogan}</p>
      <p className="font-semibold text-sm py-2 lg:text-lg leading-relaxed text-brown">
        {description}
      </p>
      <div className="flex gap-2 text-xs my-1">
        {techs.map((tech) => (
          <p
            key={tech}
            className="bg-dark-sand px-2 py-1 lg:text-lg rounded-md font-bold text-brown"
          >
            {tech}
          </p>
        ))}
      </div>
      <Link
        href={`${repository}`}
        target="_blank"
        className="w-44 flex gap-5 items-center pt-3 pb-4  font-black text-sm lg:text-lg text-tan"
      >
        <p>VIEW PROJECT</p>
        <FaArrowRight className="cursor-pointer" />
      </Link>
    </div>
  );
}
