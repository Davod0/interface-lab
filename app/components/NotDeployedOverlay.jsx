import React from "react";

const NotDeployedOverlay = ({ visible }) => (
  <div
    className={`absolute inset-0 flex items-center justify-center z-10
      bg-gradient-to-r from-[#18181b] via-[#121212] to-[#23272e]
      text-white font-bold rounded-t-xl
      transform-gpu will-change-transform
      transition-all duration-500 ease-in-out
      ${visible ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-0 pointer-events-none"}`}
    style={{
      backdropFilter: "blur(2px)",
    }}
  >
    <span className="text-white text-lg md:text-lg font-medium px-6 py-3 rounded-lg shadow-lg">
      This project does not have a deployed version
    </span>
  </div>
);

export default NotDeployedOverlay;
