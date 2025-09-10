import React from "react";
import Image from "next/image";
import { TypingLoop } from "./TypingLoop";



const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1
                        className="text-white mb-4"
                    >
                        <span
                            className="text-transparent text-4xl sm:text-5xl lg:text-6xl font-extrabold
                            bg-clip-text bg-gradient-to-r via-purple-400 to-pink-500
                            ">
                            Hello, I'm{" "}
                        </span>
                        <br />
                        <TypingLoop
                            text1="Davod"
                            text2="a system developer"
                            text3="also a full-stack web developer"
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
                        I&apos;m a systems developer with
                        a passion for building efficient backend solutions.
                        I&apos;m also a full-stack web developer
                        who enjoys creating clean,
                        responsive and scalable web applications.
                    </p>
                    <div>
                        <button
                            className="px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white"
                        >
                            Hire me
                        </button>
                        <button
                            className="px-1 py-1 rounded-full bg-transparent w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white border border-white mt-3"
                        >
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                Contact me
                            </span>
                        </button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            src="/images/hero-image.png"
                            alt="Hero Image"
                            width={300}
                            height={300}
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        />
                    </div>
                </div>
            </div>
                </section>
    );
};

export default HeroSection;
