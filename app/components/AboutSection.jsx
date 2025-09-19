"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import { tabData } from "../../data/data";
import TechStack from "./TechStack";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white mt:5 lg:mt-10 mb-20 scroll-mt-10">
      <div className="md:grid md:grid-cols-2 gap-8 items-stretch py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a system developer with a strong passion for building scalable backend solutions,
            as well as a full-stack web developer focused on creating interactive and
            responsive web applications. I am also familiar with mobile application
            development and have built some cross-platform mobile apps using React Native.
            I have experience with a variety of frameworks and programming languages, but
            my core stack includes technologies such as .NET, Next.js, React, React Native,
            C#, JavaScript, TypeScript, MySQL, and MongoDB.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("services")}
              active={tab === "services"}
            >
              {" "}
              Services{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
          </div>
          <div className="mt-8 min-h-[250px]">
            {tabData.find((t) => t.id === tab).content}
          </div>
        </div>
        <TechStack />
      </div>
    </section>
  );
};

export default AboutSection;


