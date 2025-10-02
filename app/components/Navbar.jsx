"use client";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
import { Link } from "react-scroll";

const navLinks = [
  { title: "Home", path: "home", offset: -112 },
  { title: "About", path: "about", offset: -60 },
  { title: "Projects", path: "projects", offset: -90 },
  { title: "Contact", path: "contact", offset: -60 },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const scrollLinkProps = (id, customOffset = -90) => ({
    to: id,
    smooth: "easeInOutQuad",
    duration: 1200,
    offset: customOffset,
    onClick: () => setNavbarOpen(false),
  });

  return (
    <nav className="fixed mx-auto border border-[#23272e] top-0 left-0 right-0 z-10
      bg-gradient-to-r from-[#18181b] via-[#121212] to-[#23272e] bg-opacity-90 shadow-lg backdrop-blur-lg">
      <div className="flex w-full flex-wrap items-center justify-between lg:py-3 py-2 px-1">
        <Link
          {...scrollLinkProps("home", navLinks.find(link => link.path === "home")?.offset)}
          className="text-2xl md:text-5xl text-white font-semibold flex items-center gap-1 cursor-pointer"
        >
          <Image
            src="/images/dav.jpg"
            alt="hero image"
            width={40}
            height={60}
            className="rounded-full object-cover ml-5 lg:ml-15"
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
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-4 mt-0">
            {navLinks.map((link, index) => (
              <li key={index} className="relative group">
                <Link
                  {...scrollLinkProps(link.path, link.offset)}
                  className="
                    text-[#ADB7BE] font-semibold px-4 py-2 transition-all duration-500 ease-in-out
                    hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r
                    hover:from-primary-400 hover:to-secondary-600 cursor-pointer
                  "
                >
                  {link.title}
                  <span
                    className="
                      block absolute left-1/2 -translate-x-1/2 -bottom-1 h-0.5 w-0
                      group-hover:w-full bg-gradient-to-r from-primary-400 to-secondary-600
                      rounded-full transition-all duration-500
                    "
                  ></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Mobile Overlay */}
      {navbarOpen ? (
        <MenuOverlay
          links={navLinks}
          scrollLinkProps={scrollLinkProps}
        />
      ) : null}
    </nav>
  );
};

export default Navbar;
