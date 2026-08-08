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
} from "simple-icons/icons";
const techStack = [
  { icon: siTypescript, label: "Typescript" },
  { icon: siJavascript, label: "Javascript" },
  { icon: siReact, label: "React" },
  { icon: siNextdotjs, label: "Next.js" },
  { icon: siTailwindcss, label: "Tailwind CSS" },
  { icon: siShadcnui, label: "shadcn/ui" },
  { icon: siNodedotjs, label: "Node.js" },
  { icon: siExpress, label: "Express.js" },
  { icon: siJsonwebtokens, label: "JWT" },
  { icon: siSupabase, label: "Supabase" },
  { icon: siMongodb, label: "MongoDB" },
  { icon: siPostgresql, label: "PostgreSQL" },
  { icon: siGit, label: "Git" },
  { icon: siGithub, label: "Github" },
  { icon: siPostman, label: "Postman" },
  { icon: siVercel, label: "Vercel" },
];
export default function Skills() {
  return (
    <section
      id="skills"
      className="p-8 lg:p-9 lg:px-20 border-b border-gray-200 dark:border-border-gray"
    >
      <p className="text-sm md:text-lg font-medium text-blue-700 dark:text-blue-500">
        <span className="animate-pulse">&#11044;</span> &nbsp;
        <span className="text-gray-600 dark:text-gray-300">SKILLS</span>
      </p>
      <div className=" mt-3 grid grid-cols-2 grid-rows-8 md:grid-cols-4 md:grid-rows-4 gap-3 ">
        {techStack.map((tech) => (
          <div
            key={tech.label}
            aria-label={tech.label}
            className="dark:bg-card dark:border-card-border flex justify-center hover:scale-103 hover:shadow-lg transition-all gap-2 lg:gap-4 md:gap-3 bg-white py-3 border rounded-lg border-gray-200 shadow-sm"
          >
            <TechIcon
              icon={tech.icon}
              size={24}
              className="lg:size-8 md:size-5 text-blue-500"
              useOriginalColor={false}
            />
            <span className=" font-semibold text-sm lg:text-lg md:text-md flex items-center">
              {tech.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
