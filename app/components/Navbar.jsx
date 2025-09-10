import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
        <div className="flex flex-wrap items-center justify-between mx-auto p-8">
            <Link className="text-white text-5xl font-semibold" href={"/"}>
                LOGO
            </Link>
        </div>
    </nav>
  );
};

export default Navbar;