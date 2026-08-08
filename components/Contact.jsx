import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

export default function Contact() {
  return (
    <section id="contact" className="flex py-8 px-7 justify-center">
      <div className="dark:bg-card dark:border-card-border dark:inset-shadow-ash hover:dark:inset-shadow-dark-ash hover:inset-shadow-gray-500 duration-300 transition-all w-full flex flex-col py-10 inset-shadow-sm inset-shadow-gray-300 bg-gray-100 rounded-xl gap-1 p-5  border border-gray-200">
        <h3 className="dark:text-muted pl-2 text-15xl font-bold leading-tight">
          Let's build something <br /> amazing together.
        </h3>

        <div className="my-4 flex flex-col gap-3 font-semibold">
          <Link
            href="mailto:aswinsankartk@gmail.com"
            className="w-full"
            aria-label="Send an email"
          >
            <button className="dark:bg-card dark:shadow-dark-ash dark:border-card-border dark:border cursor-pointer active:scale-95 hover:scale-101 hover:shadow-lg transition-all text-sm flex bg-white w-full rounded-md p-4 gap-3 shadow-md">
              <IoMdMail size={20} />
              aswinsankartk@gmail.com
            </button>
          </Link>
          <h3 className="self-center mt-1 dark:text-muted">@aswinsankartk</h3>
          <div className="flex justify-between">
            <Link
              href="https://linkedin.com/in/aswinsankartk"
              aria-label="View Linkedin profile"
            >
              <button className="dark:bg-card dark:shadow-dark-ash dark:border-card-border dark:border cursor-pointer active:scale-95 hover:scale-103 hover:shadow-lg transition-all flex text-sm bg-white w-full shadow-md rounded-md p-4 gap-3">
                <FaLinkedin size={20} />
              </button>
            </Link>
            <Link
              href="https://github.com/aswinsankartk"
              aria-label="View Github profile"
            >
              <button className="dark:bg-card dark:shadow-dark-ash dark:shd-md dark:border-card-border dark:border cursor-pointer active:scale-95 hover:scale-103 hover:shadow-lg transition-all flex text-sm bg-white w-full shadow-md rounded-md p-4 gap-3">
                <FaGithub size={20} />
              </button>
            </Link>
            <Link
              href="https://x.com/aswinsankartk"
              aria-label="View X profile"
            >
              <button className="dark:bg-card dark:shadow-dark-ash dark:border-card-border dark:border cursor-pointer active:scale-95 hover:scale-103 hover:shadow-lg transition-all flex text-sm bg-white w-full shadow-md rounded-md p-4 gap-3">
                <FaXTwitter size={20} />
              </button>
            </Link>
            <Link
              href="https://instagram.com/aswinsankartk"
              aria-label="View Instagram profile"
            >
              <button className="dark:bg-card dark:shadow-dark-ash dark:border-card-border dark:border cursor-pointer active:scale-95 hover:scale-103 hover:shadow-lg transition-all flex text-sm bg-white w-full shadow-md rounded-md p-4 gap-3">
                <FaInstagram size={20} />
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center pt-2">
          <Link
            href="https://calendly.com/aswinsankartk/30min"
            aria-label="Schedule a call"
          >
            <button className="dark:bg-muted dark:text-ash dark:shadow-dark-ash cursor-pointer active:scale-95 hover:scale-103 hover:shadow-xl transition-all flex gap-3 py-3 px-4 font-semibold text-md bg-gray-950 border border-gray-700 text-white rounded-lg items-center shadow-lg shadow-gray-400">
              <FaArrowRight size={18} />
              Get in Touch
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
