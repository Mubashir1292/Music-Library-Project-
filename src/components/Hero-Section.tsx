import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center items-center h-auto md:h-[40rem] w-full mx-auto relative overflow-hidden py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="mt-4 flex flex-col space-y-5 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the art of Music
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-screen-sm mx-auto">
          Dive into our comprehensive music courses and transform your musical
          journey today. Whether you are a beginner or looking to refine your
          skills, join us to unlock your potential.
        </p>
        <div>
          <Link href="/courses">
            <Button borderRadius="1.75rem">Explore Courses</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
