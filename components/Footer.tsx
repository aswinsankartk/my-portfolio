import { IoMdMail } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="py-3 flex justify-between px-5">
      <div className=" text-brown font-extrabold font-dmsans text-sm">
        <p>2026 &copy; ASWIN SANKAR TK</p>
      </div>
      <div className="flex gap-6 items-center">
        <Link href={"mailto:aswinsankartk@gmail.com"}>
          <IoMdMail size={19} className="text-brown" />
        </Link>
        <Link href={"https://linkedin.com/in/aswinsankartk"}>
          <FaLinkedin size={19} className="text-brown" />
        </Link>
        <Link href={"https://github.com/aswinsankartk"}>
          <FaGithub size={18} className="text-brown" />
        </Link>
        <Link href={"https://x.com/aswinsankartk"}>
          <FaXTwitter size={18} className="text-brown" />
        </Link>
      </div>
    </footer>
  );
}
