"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Logo from "./icons/Logo";
import { IoMenu, IoClose } from "react-icons/io5";

const navLinks = [
  {
    href: "#",
    label: "Home",
  },
  {
    href: "#about",
    label: "About",
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
    href: "#skills",
    label: "Skills",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <header className="transition-all ease-in-out  bg-sand fixed z-11 w-full py-2 px-3 flex justify-between items-center">
      <Link
        href="#"
        aria-label="Aswin Sankar TK Logo"
        className="flex items-center"
      >
        <Logo color="currentColor" className="w-9 text-brown" />
        <h3 className="font-barlowcondensed font-bold text-brown text-2xl mx-1">
          ASWIN SANKAR TK
          <span className="text-xs text-yellow ml-0.5">&#9632;</span>
        </h3>
      </Link>
      <nav>
        <button
          onClick={() => setOpen(!open)}
          ref={buttonRef}
          className="absolute z-15 cursor-pointer md:hidden right-4 top-3"
          aria-label="Toggle Menu"
        >
          {open ? (
            <IoClose size={30} className=" text-brown" />
          ) : (
            <IoMenu size={30} className=" text-brown" />
          )}
        </button>
        <div
          ref={menuRef}
          aria-label="Dropdown Menu"
          className={`md:hidden ${open ? "block animate-menu-open" : "hidden"} w-dvw h-dvh font-bold text-2xl font-manrope  text-md gap-5 justify-center items-center bg-sand flex flex-col fixed z-13 left-0 top-0 `}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(!open)}
              className=""
              aria-label={`Go to ${link.label}`}
            >
              &nbsp;{link.label}&nbsp;
            </Link>
          ))}
        </div>
        <ul className="hidden md:flex font-manrope">
          {navLinks.map((link) => (
            <li key={link.href} className="hover:text-blue-600 ">
              <a
                href={link.href}
                className="m-2 font-bold"
                aria-label={`Go to ${link.label}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
