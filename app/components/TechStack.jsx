import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const techIcons = [
  { src: "/tech-stack/C.svg", alt: "C#" },
  { src: "/tech-stack/Docker.svg", alt: "Docker" },
  { src: "/tech-stack/Firebase.svg", alt: "Firebase" },
  { src: "/tech-stack/Git.svg", alt: "Git" },
  { src: "/tech-stack/GitLab.svg", alt: "GitLab" },
  { src: "/tech-stack/Google Cloud.svg", alt: "Google Cloud" },
  { src: "/tech-stack/JavaScript.svg", alt: "JavaScript" },
  { src: "/tech-stack/MongoDB.svg", alt: "MongoDB" },
  { src: "/tech-stack/Nest.js.svg", alt: "Nest.js" },
  { src: "/tech-stack/NET.svg", alt: ".NET" },
  { src: "/tech-stack/Nuxt JS.svg", alt: "Nuxt JS" },
  { src: "/tech-stack/Postman.svg", alt: "Postman" },
  { src: "/tech-stack/Python.svg", alt: "Python" },
  { src: "/tech-stack/React.svg", alt: "React" },
  { src: "/tech-stack/Redux.svg", alt: "Redux" },
  { src: "/tech-stack/SQLite.svg", alt: "SQLite" },
  { src: "/tech-stack/Storybook.svg", alt: "Storybook" },
  { src: "/tech-stack/Tailwind CSS.svg", alt: "Tailwind CSS" },
  { src: "/tech-stack/TypeScript.svg", alt: "TypeScript" },
  { src: "/tech-stack/Vue.js.svg", alt: "Vue.js" },
  { src: "/tech-stack/SQL Database.svg", alt: "SQL Database" },
  { src: "/tech-stack/HTML5.svg", alt: "HTML" },
  { src: "/tech-stack/CSS3.svg", alt: "CSS" },
  { src: "images/github-icon.svg", alt: "Github" },
  { src: "/tech-stack/Ubuntu.svg", alt: "Ubuntu" }
];

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
            className="group shadow rounded-lg aspect-[4/3] flex items-center justify-center"
          >
            <span className="flex flex-col items-center cursor-pointer">
              <Image src={icon.src} alt={icon.alt} width={48} height={48} />
              <p
                className="opacity-0 group-hover:opacity-100 transition-opacity
                duration-300 text-white mt-2 md:mt-3 text-[10px] md:text-xs font-semibold"
              >
                {icon.alt}
              </p>
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechStack;
