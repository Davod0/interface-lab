import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  return (
    <button
      onClick={selectTab}
      className="relative group mr-3 font-semibold transition-all duration-300 ease-in-out"
    >
      <span
        className={`
          bg-clip-text text-transparent cursor-pointer
          transition-all duration-500 ease-in-out
          ${active
            ? "bg-gradient-to-r from-primary-400 to-secondary-600"
            : "bg-gradient-to-r from-[#ADB7BE] to-[#ADB7BE]"}
          group-hover:from-primary-400 group-hover:to-secondary-600
        `}
      >
        {children}
      </span>
      <span
        className={`
          block absolute left-1/2 -translate-x-1/2 -bottom-1.5 h-0.5
          ${active ? "w-full" : "w-0"}
          group-hover:w-full bg-gradient-to-r from-primary-400 to-secondary-600
          rounded-full transition-all duration-300
        `}
      ></span>
    </button>
  );
};

export default TabButton;
