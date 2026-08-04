import Link from "next/link";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Contact() {
  return (
    <section className="flex py-14">
      <div className="inset-shadow-sm inset-shadow-gray-300 bg-gray-100 w-full mx-32 rounded-xl grid grid-cols-[32rem_10fr_10fr] gap-3 p-10 pr-4 overflow-hidden border border-gray-200">
        <div className="flex items-center">
          <h3 className="text-4xl font-bold ml-4">
            Let's build something amazing together.
          </h3>
        </div>
        <div className=" flex flex-col gap-3 font-semibold">
          <Link href="mailto:aswinsankartk@gmail.com" className="w-full">
            <button className="flex bg-white w-full rounded-md p-4 gap-2 shadow-md">
              <IoMdMail size={25} />
              aswinsankartk@gmail.com
            </button>
          </Link>
          <Link href="https://linkedin.com/in/aswinsankartk">
            <button className="flex bg-white w-full shadow-md rounded-md p-4 gap-2">
              <FaLinkedin size={25} />
              linkedin.com/in/aswinsankartk
            </button>
          </Link>
          <Link href="https://github.com/aswinsankartk">
            <button className="flex bg-white w-full shadow-md rounded-md p-4 gap-2">
              <FaGithub size={25} />
              github.com/aswinsankartk
            </button>
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <Link href="https://calendly.com/aswinsankartk/30min">
            <button className="flex gap-3 py-4 px-5 font-semibold text-lg bg-gray-950 border border-gray-700 text-white rounded-lg items-center shadow-2xl shadow-gray-500">
              <FaArrowRight size={20} />
              Get in Touch
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
