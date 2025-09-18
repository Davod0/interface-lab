import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container sm:p-8 md:p-12 flex justify-center flex-col items-center gap-2">
        <p className="text-slate-600 sm:text-sm md:text-base mt-3">Thank you for visiting!</p>
        <p className="text-slate-600 mb-3">© {currentYear} Crafted with care by Davod.</p>
      </div>
    </footer>
  );
};

export default Footer;
