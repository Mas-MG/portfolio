import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/textGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-white dark:bg-black-100">
        <div
          className={cn(
            "absolute inset-0 opacity-40",
            "[background-size:80px_80px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] ",
            "dark:[background-image:linear-gradient(to_right,#262630_1px,transparent_1px),linear-gradient(to_bottom,#262630_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
      </div>
      <div className="flex justify-center relative z-10 my-20">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col
        items-center justify-center">
          <h2
            className="uppercase text-blue-100 tracking-widest
          text-xs text-center max-w-80"
          >
            Dynamic Web Magic With Next.js
          </h2>
          <TextGenerateEffect
          className="text-center text-[40px] md:text-5xl lg:text-6xl"
          words="Creative Programmer Exploring An Infinite Codeworld."
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg
          lg:text-2xl">
            Hi, I'm Masoomeh, A Fullstack web developer.
          </p>
          <a href="#about">
            <MagicButton
            title="Show My Work"
            icon={<FaLocationArrow />}
            position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
