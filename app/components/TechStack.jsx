import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import sqlDatabase from "../../public/images/sqlDatabase.svg";
import nuxtjs from "../../public/images/nuxtjs.svg";


// const techIcons = [
//   { src: sqlDatabase, alt: "SQL Database Icon" },
//   { src: nuxtjs, alt: "Next.js Icon" },
// ];

const techIcons = Array.from({ length: 20 }, () => ({
  src: sqlDatabase,
  alt: "Tech Stack Icon",
}));

const TechStack = () => {
  return (
    <div className="relative flex flex-col justify-center h-full items-center mt-6">
      <h1 className="text-2xl font-bold mb-5 sm:mb-8 -mt-6 text-center">
        Tech Stack
      </h1>
      <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full">
        {techIcons.map((icon, i) => (
          <div
            key={i}
            className={"shadow rounded-lg aspect-[4/3] flex items-center justify-center bg-white"}
          >
            <span className="text-xs font-semibold flex flex-col items-center">
              <Image src={icon.src} alt={icon.alt} />
              <p className="text-black">SQL Database</p>
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechStack;
