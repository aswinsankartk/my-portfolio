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
    <section className="px-32 py-14 border-b border-gray-200">
      <p className="text-lg font-medium text-blue-700">
        <span className="animate-pulse">&#11044;</span> &nbsp;
        <span className="text-gray-600">SKILLS</span>
      </p>
      <div className="mt-6 grid grid-cols-4 grid-rows-3 gap-5">
        {techStack.map((tech) => (
          <div
            key={tech.label}
            className="flex gap-3 bg-white px-5 py-5 border rounded-lg border-gray-200 shadow-sm"
          >
            <TechIcon icon={tech.icon} size={25} />
            <span className="font-semibold">{tech.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
