import React from "react";
import hero from "../assets/hero.webp";
import interior from "../assets/interior.webp";
import speedometer from "../assets/bugatti-speedo.webp";
import bugattiengine from "../assets/bugattiengine.webp";

const Hero = () => {
  return (
    // hero container
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0  mx-auto mb-16  p-4  max-w-[1100px] sm:mb-20">
      {/* hero left  */}
      <div className="flex flex-col justify-center  text-center lg:text-left">
        <h2 className="text-lg font-semibold text-gray-500  ">Drive a Beast</h2>
        <h2 className="font-extrabold   text-5xl md:text-7xl uppercase  ">
          Premium <span className="text-blue-500">cars</span>
        </h2>
        <div>
          <h4 className="text-xl md:text-3xl font-semibold   mb-2 ">
            Explore the most <span className="text-yellow-400">luxurious</span>{" "}
            cars !
          </h4>
        </div>
        <div className="flex justify-center  mb-2 lg:justify-start ">
          <div className="flex gap-4">
            <div className="w-20 ">
              <img
                src={speedometer}
                alt="speedometer"
                className="object-cover  rounded-md"
              />
            </div>
            <div className="w-20 ">
              <img
                src={bugattiengine}
                alt="bugattiengine"
                className="object-cover  rounded-md"
              />
            </div>
            <div className="w-20 ">
              <img
                src={interior}
                alt="interior"
                className="object-cover  rounded-md"
              />
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-1">Find, Book, Ride</h4>
        </div>
        <div className="flex justify-center lg:justify-start font-medium gap-4">
          <button className="bg-black text-white border-2 border-black  py-2 px-4  text-base rounded hover:bg-yellow-400 transition-all duration-700 ">
            Take a Ride
          </button>
          <button className="border-2 border-black  py-2 px-4 text-base rounded hover:bg-black hover:text-white transition-all duration-700 ">
            Explore
          </button>
        </div>
      </div>
      {/* hero right  */}
      <div className=" flex w-full h-[350px] sm:h-[600px] object-contain bg-gradient-to-t from-blue-500 via-blue-400 to-blue-500 rounded-tl-md ">
        <img
          src={hero}
          alt="audi"
          className="transform -scale-x-100 object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
