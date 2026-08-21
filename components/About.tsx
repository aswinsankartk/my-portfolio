import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section id="about" className=" px-8 py-6  border-b border-border-sand">
      <SectionTitle counter={"02"} text={"ABOUT ME"} />
      <h1 className="font-barlowcondensed font-bold text-5xl tracking-tight pt-3 text-brown">
        I LIKE BUILDING THINGS THAT MAKE AN IMPACT
        <span className="text-xl text-yellow ml-1">&#9632;</span>
      </h1>
      <div className="text-brown font-manrope font-bold text-[1rem] pt-3 flex flex-col gap-2 pb-2">
        <p>
          I'm a full-stack developer focused on building practical and scalable
          web applications.
        </p>
        <p>
          I enjoy working with modern technologies like{" "}
          <span className="bg-yellow px-1 ">Next.js</span>
          ,&nbsp;
          <span className="bg-yellow px-1">React</span>,{" "}
          <span className="bg-yellow px-1">Node.js</span> and{" "}
          <span className="bg-yellow px-1">MongoDB</span> to bring ideas to
          life.
        </p>
        <p>
          From personal projects to real-world solutions, I care about clean
          code, great user experience and building{" "}
          <span className="bg-yellow px-1">products that people love.</span>
        </p>
      </div>
    </section>
  );
}
