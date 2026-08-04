import { FaArrowRight } from "react-icons/fa";

export default function About() {
  return (
    <section className="flex justify-between px-32 h-72 border-b border-gray-200">
      <div className="flex flex-col justify-center">
        <p className="text-lg font-medium text-blue-700">
          <span className="animate-pulse">&#11044;</span> &nbsp;
          <span className="text-gray-600">ABOUT</span>
        </p>
        <h2 className="font-semibold text-2xl w-144 my-3">
          I design and build full-stack applications end to end — from database
          schema to deployed UI — with a focus on clean architecture and
          real-world usability.
        </h2>
      </div>
      <div className="w-144 flex flex-col gap-2 justify-center">
        <p className="text-gray-600 font-medium text-base mt-6">
          I work with React, Next.js, Node.js, Express, MongoDB, and PostgreSQL.
          I've built and deployed a full-stack app with authentication,
          role-based access, and AI integration. My focus is on building
          scalable applications using MERN stack.
        </p>
        <button className="flex gap-2 text-blue-700 font-semibold items-center">
          More about me <FaArrowRight />
        </button>
      </div>
    </section>
  );
}
