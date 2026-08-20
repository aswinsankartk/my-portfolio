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
    <section id="skills" className="px-8 py-6 border-b border-border-sand">
      <SectionTitle counter={"04"} text={"THE TOOLBOX"} />
      <div className=" grid grid-cols-3 pt-8 pb-5 gap-3 ">
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
              className="text-brown mb-3 cursor-pointer"
            />
            <p className="font-bold text-xs font-dmsans text-brown cursor-pointer">
              {tech.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
