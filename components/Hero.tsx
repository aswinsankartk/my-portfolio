import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="transition-all mt-15 flex justify-between overflow-hidden border-b border-gray-200">
      <div className="flex flex-col py-8 items-center">
        <p className="text-sm font-medium text-blue-700">
          <span className="animate-pulse">&#11044;</span> &nbsp; HELLO, I'M
        </p>
        <h1 className="text-4xl font-bold mt-2" aria-label="Name">
          Aswin Sankar TK
        </h1>
        <h2
          className="mt-0.5 text-xl font-semibold text-gray-800"
          aria-label="Role"
        >
          Full Stack Developer
        </h2>
        <div className="-translate-x-2 hover:scale-101 duration-700 [mask:linear-gradient(to_bottom,black_60%,transparent_98%)]">
          <Image
            src="/aswinsankar-headshot.webp"
            width={300}
            height={300}
            alt="aswinsankar-headshot"
            priority
          />
        </div>
        <p className="font-medium text-sm text-gray-600 px-10 mt-3 py-2 text-center">
          I build scalable, real-time web applications using the MERN stack —
          from REST API design to responsive, production-ready interfaces.
        </p>
        <div className=" flex flex-col gap-4 mt-4 mb-2">
          <Link href="/aswinsankartk-resume.pdf" download target="_blank">
            <button
              aria-label="Download Resume"
              className="hover:scale-102  transition-all hover:shadow-lg cursor-pointer text-sm flex gap-3 py-3 px-5 items-center bg-gray-950 rounded-md text-white shadow-md"
            >
              <FaDownload className="h-4.5 w-4.5" />
              Download Resume
            </button>
          </Link>
          <Link href="https://github.com/aswinsankartk" target="_blank">
            <button
              aria-label="View Github"
              className="hover:scale-102 transition-all cursor-pointer w-full justify-center text-sm flex gap-3 py-3 px-5 font-medium items-center bg-white border border-gray-100 shadow-md hover:shadow-lg rounded-md inset-shadow-sm inset-shadow-gray-100"
            >
              <FaGithub className="h-5 w-5" />
              Github
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
