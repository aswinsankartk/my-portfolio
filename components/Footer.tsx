import { IoMdMail } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="py-3 flex justify-between px-5 md:py-4 md:px-7">
      <div className=" text-brown font-extrabold font-manrope text-sm md:text-lg lg:font-bold">
        <p>2026 &copy; ASWIN SANKAR TK</p>
      </div>
      <div className="flex gap-6 md:gap-7 lg:gap-8 items-center">
        <Link href={"mailto:aswinsankartk@gmail.com"}>
          <IoMdMail
            size={19}
            className="text-brown md:size-6 hover:scale-101 active:scale-98 hover:text-tan transition-all"
          />
        </Link>
        <Link href={"https://linkedin.com/in/aswinsankartk"}>
          <FaLinkedin
            size={19}
            className="text-brown md:size-6 hover:scale-101 active:scale-98 hover:text-tan transition-all"
          />
        </Link>
        <Link href={"https://github.com/aswinsankartk"}>
          <FaGithub
            size={18}
            className="text-brown md:size-6 hover:scale-101 active:scale-98 hover:text-tan transition-all"
          />
        </Link>
        <Link href={"https://x.com/aswinsankartk"}>
          <FaXTwitter
            size={18}
            className="text-brown md:size-6 hover:scale-101 active:scale-98 hover:text-tan transition-all"
          />
        </Link>
      </div>
    </footer>
  );
}
