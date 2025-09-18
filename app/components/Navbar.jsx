"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navLinks = [
  { title: "Home", path: "#home" },
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-[#23272e] top-0 left-0 right-0 z-10
      bg-gradient-to-r from-[#18181b] via-[#121212] to-[#23272e] bg-opacity-90 shadow-lg backdrop-blur-lg">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href={"/"} className="text-2xl md:text-5xl text-white font-semibold flex items-center gap-1">
          <Image
            src="/images/dav.jpg"
            alt="hero image"
            width={40}
            height={60}
            className="rounded-full object-cover"
          />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index} className="relative group">
                <Link
                  href={link.path}
                  className="
                    text-[#ADB7BE] font-semibold px-4 py-2 transition-all duration-300 ease-in-out
                    hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r 
                    hover:from-primary-400 hover:to-secondary-600
                  "
                >
                  {link.title}
                  <span
                    className="
                      block absolute left-1/2 -translate-x-1/2 -bottom-1 h-0.5 w-0 
                      group-hover:w-full bg-gradient-to-r from-primary-400 to-secondary-600 
                      rounded-full transition-all duration-300
                    "
                  ></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
