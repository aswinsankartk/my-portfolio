import SectionTitle from "./SectionTitle";
import Project from "./Project";
export default function Projects() {
  return (
    <section id="projects" className="px-8 py-6  border-b border-border-sand ">
      <SectionTitle counter={"03"} text={"SELECTED WORK"} />
      <div className="flex flex-col gap-3">
        <div className="flex flex-col">
          <Project
            title={"BINGESTUDY"}
            slogan={"Study Together. Study Smarter."}
            description={
              "A real-time study platform that helps students collaborate, share resources, and grow together in focused study rooms."
            }
            demo={"https://bingestudy.vercel.app"}
            techs={["Next.js", "Tailwind", "Supabase", "shadcn/ui", "AI"]}
            repository={"https://github.com/aswinsankartk/bingestudy"}
          />
          <div className="w-full h-64 border-3 border-yellow rounded-lg bg-[url('/bingestudy-graphic.webp')] bg-center bg-cover bg-no-repeat"></div>
        </div>
        <div className="flex flex-col">
          <Project
            title={"SALDO"}
            slogan={"Split Expenses. Not friendships."}
            description={
              "A simple expense splitting app that helps friends track, split, and settle group expenses effortlessly with real-time balances."
            }
            demo={" "}
            techs={["Node.js", "Express", "MongoDB", "JWT"]}
            repository={"https://github.com/aswinsankartk/saldo"}
          />
          <div className="w-full h-64 border-3 border-yellow rounded-xl bg-[url('/underdevelopment.webp')] bg-center bg-cover bg-no-repeat"></div>
        </div>
      </div>
    </section>
  );
}
