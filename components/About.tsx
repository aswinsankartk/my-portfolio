import { GitHubCalendar } from "react-github-calendar";
import { FaArrowRight } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col justify-between p-8 border-b border-gray-200 dark:border-border-gray"
    >
      <div className="flex flex-col justify-center">
        <p className="text-sm font-medium mb-1.5 text-blue-700 dark:text-blue-500">
          <span className="animate-pulse">&#11044;</span> &nbsp;
          <span className="text-gray-600 dark:text-gray-300">ABOUT</span>
        </p>
        <h2 className="font-semibold text-lg dark:text-muted">
          I design and build full-stack applications end to end — from database
          schema to deployed UI — with a focus on clean architecture and
          real-world usability.
        </h2>
      </div>
      <div className=" flex flex-col gap-2 justify-center">
        <p className="text-gray-600 dark:text-gray-300 font-medium text-base mt-5">
          I work with React, Next.js, Node.js, Express, MongoDB, and PostgreSQL.
          I've built and deployed a full-stack app with authentication,
          role-based access, and AI integration. My focus is on building
          scalable applications using MERN stack.
        </p>
        {/* <button className="flex gap-2 text-blue-700 font-semibold items-center">
          More about me <FaArrowRight />
        </button> */}
      </div>
    </section>
  );
}
