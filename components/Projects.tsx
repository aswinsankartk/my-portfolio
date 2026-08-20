import Image from "next/image";
import SectionTitle from "./SectionTitle";
const techStack = [
  "Next.js",
  "Tailwind CSS",
  "Supabase",
  "shadcn/ui",
  "Gemini AI",
];
export default function Projects() {
  return (
    <section id="projects" className="hidden px-8 border-b border-gray-200">
      <SectionTitle counter={"02"} text={"SELECTED WORK"} />
    </section>
  );
}
