import TechIcon from "./icons/TechIcon";
import {
  siReact,
  siNextdotjs,
  siNodedotjs,
  siExpress,
  siMongodb,
  siPostgresql,
  siTailwindcss,
  siSupabase,
  siGit,
  siPostman,
  siTypescript,
  siJavascript,
  siGithub,
  siJsonwebtokens,
  siVercel,
  siShadcnui,
  siPython,
  siLinux,
} from "simple-icons/icons";
import SectionTitle from "./SectionTitle";
const techStack = [
  { icon: siTypescript, label: "Typescript" },
  { icon: siJavascript, label: "Javascript" },
  { icon: siPython, label: "Python" },
  { icon: siReact, label: "React" },
  { icon: siNextdotjs, label: "Next.js" },
  { icon: siTailwindcss, label: "Tailwind" },
  { icon: siShadcnui, label: "shadcn/ui" },
  { icon: siNodedotjs, label: "Node.js" },
  { icon: siExpress, label: "Express" },
  { icon: siJsonwebtokens, label: "JWT" },
  { icon: siSupabase, label: "Supabase" },
  { icon: siMongodb, label: "MongoDB" },
  { icon: siPostgresql, label: "PostgreSQL" },
  { icon: siGit, label: "Git" },
  { icon: siGithub, label: "Github" },
  { icon: siPostman, label: "Postman" },
  { icon: siLinux, label: "Linux" },
  { icon: siVercel, label: "Vercel" },
];
export default function Skills() {
  return (
    <section
      id="skills"
      className="md:px-15 md:py-8 px-8 py-6 xl:px-40 xl:py-9 lg:px-30 lg:py-7 border-b border-border-sand"
    >
      <SectionTitle counter={"05"} text={"THE TOOLBOX"} />
      <div className=" grid grid-cols-3 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 pt-8 pb-5 gap-3 md:gap-5 ">
        {techStack.map((tech) => (
          <div
            key={tech.label}
            aria-label={tech.label}
            className="flex flex-col items-center "
          >
            <TechIcon
              icon={tech.icon}
              size={33}
              useOriginalColor={false}
              className="text-brown mb-3 cursor-pointer md:size-9 lg:size-10"
            />
            <p className="font-bold text-xs font-manrope text-brown cursor-pointer md:text-lg">
              {tech.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
