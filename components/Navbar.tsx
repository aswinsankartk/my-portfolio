"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Logo from "./icons/Logo";
import { IoMenu } from "react-icons/io5";

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
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <header className="transition-all ease-in-out  backdrop-blur-xl z-9 fixed w-full py-2 px-4 flex justify-between items-center shadow-sm">
      <Link href="#">
        <Logo color="currentColor" className="w-10" />
      </Link>
      <nav>
        <button
          onClick={() => setOpen(!open)}
          ref={buttonRef}
          className=" cursor-pointer md:hidden hover:scale-105"
          aria-label="Toggle Menu"
        >
          <IoMenu size={30} className="translate-y-1" />
        </button>
        <div
          ref={menuRef}
          className={`md:hidden ${open ? "block animate-menu-open" : "hidden"}  font-medium text-md gap-1 pl-4 pr-5 py-3 bg-white flex flex-col fixed z-10 -translate-x-30 rounded-lg shadow-xl inset-shadow-sm border border-gray-100`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(!open)}
              className="rounded-md hover:bg-gray-50"
            >
              &nbsp;{link.label}&nbsp;
            </Link>
          ))}
        </div>
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
