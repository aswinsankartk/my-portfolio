"use client";

import Link from "next/link";
import Logo from "./icons/Logo";

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
    <header className="p-2 px-4 flex justify-between items-center shadow-sm">
      <Link href="#">
        <Logo color="currentColor" className="w-15 h-15" />
      </Link>
      <nav>
        <ul className="flex pr-1">
          {navLinks.map((link) => (
            <li key={link.href} className="hover:*:text-gray-500">
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
