import React, { useRef } from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const borderRef = useRef(null);

  const handleMouseEnter = () => {
    if (borderRef.current) {
      borderRef.current.style.backgroundSize = "100% 100%";
    }
  };

  const handleMouseLeave = () => {
    if (borderRef.current && !isSelected) {
      borderRef.current.style.backgroundSize = "0% 100%";
    }
  };

  return (
    <button
      onClick={() => onClick(name)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`
        relative group rounded-full px-6 py-3 text-xl cursor-pointer
        transition-all duration-300 ease-in-out font-semibold
      `}
    >
      <span
        className={`
          bg-clip-text text-transparent
          transition-all duration-500 ease-in-out
          ${isSelected
            ? "bg-gradient-to-r from-primary-400 to-secondary-600"
            : "bg-gradient-to-r from-[#ADB7BE] to-[#ADB7BE]"}
          group-hover:from-primary-400 group-hover:to-secondary-600
        `}
      >
        {name}
      </span>
      <span
        ref={borderRef}
        className={`
          absolute inset-0 rounded-full pointer-events-none p-[2px]
          bg-gradient-to-r from-primary-400 to-secondary-600
          transition-all duration-100 ease-in-out
        `}
        style={{
          backgroundSize: isSelected ? "100% 100%" : "0% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transition: "background-size 700ms ease-in-out",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      ></span>
    </button>
  );
};

export default ProjectTag;
