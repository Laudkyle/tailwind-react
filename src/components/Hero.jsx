import React from "react";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="w-full max-w-[800px] h-screen mx-auto mt-[-96px] text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">Growing with us</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Kyland Robotics
        </h1>
        <h2 className="md:text-4xl sm:text-3xl text-xl font-bold">
          The RoBoTics favourite
        </h2>
        <div>
          <button className="bg-[#00df9a] w-48 py-2 my-4 mx-auto rounded-md font-medium text-[#000300]">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
