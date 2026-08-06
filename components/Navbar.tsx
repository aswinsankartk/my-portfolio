"use client";

import Link from "next/link";
import Logo from "./icons/Logo";
import { IoMenu } from "react-icons/io5";

const navLinks = [
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#skills",
    label: "Skills",
  },
  {
    href: "#projects",
    label: "Projects",
  },
  {
    href: "#experience",
    label: "Experience",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];

export default function Navbar() {
  return (
    <header className=" py-2 px-4 flex justify-between items-center shadow-sm">
      <Link href="#">
        <Logo color="currentColor" className="w-12" />
      </Link>
      <nav>
        <button className="cursor-pointer md:hidden">
          <IoMenu size={34} className="translate-y-1" />
        </button>
        <ul className="hidden md:flex">
          {navLinks.map((link) => (
            <li key={link.href} className="hover:text-blue-600 ">
              <a href={link.href} className="m-2 font-semibold">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
