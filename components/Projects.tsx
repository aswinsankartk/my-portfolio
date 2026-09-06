import SectionTitle from "./SectionTitle";
import Project from "./Project";
export default function Projects() {
  return (
    <section
      id="projects"
      className="md:px-15 md:py-8 px-8 py-6 xl:px-40 xl:py-9 lg:px-30 lg:py-7 border-b border-border-sand "
    >
      <SectionTitle counter={"03"} text={"SELECTED WORK"} />
      <div className="lg:px-6 flex flex-col gap-3 md:gap-5 lg:gap-6">
        <div className="flex flex-col lg:flex-row  lg:mt-5 lg:gap-6">
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
          <div className="lg:w-3xl w-full h-64 border-3 border-tan rounded-lg bg-[url('/bingestudy-graphic.webp')] bg-center bg-cover bg-no-repeat"></div>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-6">
          <Project
            title={"SALDO"}
            slogan={"Split Expenses. Not friendships."}
            description={
              "A simple expense splitting app that helps friends track, split, and settle group expenses effortlessly with real-time balances."
            }
            demo={" "}
            techs={["Node.js", "Express", "MongoDB", "JWT", "..."]}
            repository={"https://github.com/aswinsankartk/saldo"}
          />
          <div className="lg:w-3xl w-full h-64 border-3 border-tan rounded-xl bg-[url('/underdevelopment.webp')] bg-center bg-cover bg-no-repeat"></div>
        </div>
      </div>
    </section>
  );
}
