"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import TypingLoop from "./TypingLoop";
import GithubIcon from "../../public/images/github-icon.svg";
import LinkedinIcon from "../../public/images/linkedin-icon.svg";

const HeroSection = () => {
  return (
    <section id="home" className="lg:py-16 scroll-mt-28">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
          </h1>
            <TypingLoop text1={"Davod"} text2={"a system developer"} text3={"also a full-stack web developer"} />
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
              I&apos;m a systems developer with
              a passion for building efficient backend solutions.
              <br className="hidden lg:block" />
              I&apos;m also a full-stack web developer
              who enjoys creating clean,
              <br className="hidden lg:block" />
              responsive and scalable web applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start mb-2">
            <div className="socials flex flex-row gap-2 sm:order-1 order-0">
              <Link href="https://github.com/Davod0">
                <Image src={GithubIcon} alt="Github Icon" />
              </Link>
              <Link href="https://www.linkedin.com/in/davod-nikoyi-0ba901294">
                <Image src={LinkedinIcon} alt="Linkedin Icon" />
              </Link>
            </div>
            <button
              onClick={() => {
                const section = document.getElementById("contact");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-8 inline-block py-3 w-full sm:w-auto rounded-full bg-gradient-to-br from-primary-500
                to-secondary-500 text-white transition-all duration-200
                ease-in-out hover:shadow-lg hover:bg-gradient-to-br hover:from-primary-400 hover:to-secondary-400 cursor-pointer"
            >
              Contact Me
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 flex justify-center items-center mt-4 lg:mt-0"
        >
          <div className="rounded-full w-[250px] h-[250px] sm:w-[220px] sm:h-[220px]
                md:w-[280px] md:h-[280px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/pc3.png"
              alt="hero image"
              fill
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
