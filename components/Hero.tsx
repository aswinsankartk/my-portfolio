import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
export default function Hero() {
  return (
    <section className="flex px-32 h-128 justify-between overflow-hidden border-b border-gray-200">
      <div className="w-160 flex flex-col justify-center">
        <p className="text-lg font-medium text-blue-700">
          <span className="animate-pulse">&#11044;</span> &nbsp; HELLO, I'M
        </p>
        <h1 className="text-6xl font-bold my-3">Aswin Sankar TK</h1>
        <h2 className="text-3xl font-semibold mb-3 text-gray-800">
          Full Stack Developer
        </h2>
        <p className="font-medium text-lg text-gray-600">
          I build scalable, real-time web applications using the MERN stack —
          from REST API design to responsive, production-ready interfaces.
          Currently focused on shipping full-stack products and deepening my
          backend engineering skills.
        </p>
        <div className="flex gap-4 mt-4">
          <button className="text-sm flex gap-3 py-3 px-5 items-center bg-gray-950 rounded-md text-white">
            <FaDownload className="h-4.5 w-4.5" />
            Download Resume
          </button>
          <button className="text-sm flex gap-3 py-3 px-5 font-medium items-center bg-white border border-gray-200 shadow-sm rounded-md">
            <FaGithub className="h-5 w-5" />
            Github
          </button>
        </div>
      </div>
      <div className="w-128">
        <Image
          src="/aswinsankar-headshot.webp"
          width={700}
          height={700}
          alt="aswinsankar-headshot"
          priority
        />
      </div>
    </section>
  );
}
