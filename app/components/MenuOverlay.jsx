"use client";
import React from "react";

const MenuOverlay = ({ links, handleScroll }) => {
  return (
    <ul className="flex flex-col py-3 items-center space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <button
            onClick={() => handleScroll(link.path)}
            className="
              text-[#ADB7BE] font-medium px-3 py-1 text-sm sm:text-base
              transition-all duration-300 ease-in-out
              hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r
              hover:from-primary-400 hover:to-secondary-600 cursor-pointer
            "
          >
            {link.title}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
