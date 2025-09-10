import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="col-span-7 place-self-center">
                <h1 className="text-white mb-4 text-4xl
                    lg:text-6xl font-extrabold">
                    Hi I am Davod
                </h1>
                <p className="text-[#ADB7BE] text-lg lg:text-xl">
                    I build things for the web ekfhwgietgwejgtw
                    hieibns  rwnio ntg ni puhtgthgptutrwepn iour
                </p>
            </div>
            <div className="col-span-5">
                <Image
                    src="/images/hero-image.png"
                    alt="Hero Image"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                />
            </div>
        </div>
    </section>
  );
};

export default HeroSection;
