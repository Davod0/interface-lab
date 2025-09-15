"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { BeakerIcon, Bars3Icon  } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects"
    },
    {
        title: "Contact",
        path: "#contact"
    }
];


const Navbar = () => {
    const [navBarOpen, setNavBarOpen] = useState(false);

  return (
<nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
        <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
            <Link className="text-2 md:text-5xl text-white font-semibold" href={"/"}>
                LOGO
            </Link>
            <div className="mobile-menu block md:hidden">
                {!navBarOpen ? (
                    <button onClick={() => setNavBarOpen(true)} className="text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white">
                        <Bars3Icon className="h-5 w-5"></Bars3Icon>
                    </button>
                ) : (
                    <button onClick={() => setNavBarOpen(false)} className="text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>

                    </button>
                )}
            </div>
            <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-10">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink href={link.path} title={link.title} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        {navBarOpen ? (
            <MenuOverlay links={navLinks} />
        ) : null}
    </nav>
  );
};

export default Navbar;