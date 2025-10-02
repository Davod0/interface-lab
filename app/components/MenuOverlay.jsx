"use client";
import React from "react";
import { Link } from "react-scroll";

const MenuOverlay = ({ links, scrollLinkProps }) => {
  return (
    <div className="absolute top-full left-0 w-full bg-gradient-to-r from-[#18181b] via-[#121212] to-[#23272e] z-40 border-t border-[#23272e] shadow-lg">
      <ul className="flex flex-col py-3 items-center space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              {...scrollLinkProps(link.path, link.offset)}
              className="
                text-[#ADB7BE] font-medium px-3 py-1 text-sm sm:text-base
                transition-all duration-300 ease-in-out
                hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r
                hover:from-primary-400 hover:to-secondary-600 cursor-pointer
              "
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;
