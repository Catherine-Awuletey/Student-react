import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row items-center justify-center gap-24">
        <div className="flex flex-col gap-3 lg:w-[25%] pt-10 lg:pt-0">
          <p className="text-[#8D5CF6]">Join us</p>
          <h1 className="lg:text-4xl text-xl font-bold leading-snug text-white">
            25K+ STUDENTS TRUST US
          </h1>
          <p className="font-semibold text-white">
            Our goal is to make online education work for everyone
          </p>
          <div className="flex gap-3 pt-8">
            <button className="bg-[#8D5CF6] text-white px-6 py-3 capitalize rounded-[5px] font-bold">
              Join us
            </button>
            <button className="border-2 border-[#8D5CF6] rounded-[5px] px-6 py-3 font-semibold text-white">
              Learn More
            </button>
          </div>
        </div>
        <div>
          <img src="/Assets/img/hero-image.svg" alt="Hero" />
        </div>
      </div>
    </>
  );
};

export default Hero;
