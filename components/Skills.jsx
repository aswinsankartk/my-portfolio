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
    <section className="p-8 border-b border-gray-200">
      <p className="text-sm font-medium text-blue-700">
        <span className="animate-pulse">&#11044;</span> &nbsp;
        <span className="text-gray-600">SKILLS</span>
      </p>
      <div className="mt-3 grid grid-cols-2 grid-rows-8 gap-3 ">
        {techStack.map((tech) => (
          <div
            key={tech.label}
            className="flex justify-center gap-2 bg-white py-3 border rounded-lg border-gray-200 shadow-sm"
          >
            <TechIcon icon={tech.icon} size={24} />
            <span className="font-semibold text-sm">{tech.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
