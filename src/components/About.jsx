import React from "react";
import { ferrariRed } from "./Index";
import CountUp from "react-countup";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col  gap-4 lg:flex-row   p-4 max-w-[1100px] mx-auto mb-20"
    >
      {/* right side image div */}
      <div className="flex w-full mx-auto sm:h-[300px] h-[200px]">
        <img src={ferrariRed} alt="banner" className="object-contain " />
      </div>
      {/* description about carvala */}
      <div className="flex flex-col justify-center gap-2 ">
        <h3 className="text-xl font-bold text-blue-700 sm:text-2xl">
          Our Premium Services
        </h3>
        <h3 className="text-base font-semibold text-gray-700">
          Carvala is a premium car rental platform that offers more than just
          luxury vehicles. seamless online rentals, 24/7 support, and additional
          services like professional car washing and reliable car repairs.
        </h3>
        <div className="flex flex-wrap justify-around gap-4 font-semibold sm:text-lg md:justify-start sm:flex-nowrap">
          <div>
            <p className="flex justify-center">
              <CountUp start={0} end={50} duration={3} />
              <span>+</span>
            </p>
            <h4 className="text-orange-500">Premium Cars</h4>
          </div>
          <div>
            <p className="flex justify-center">
              <CountUp start={0} end={10000} duration={3} />
              <span>+</span>
            </p>
            <h4 className="text-orange-500">Satisfied Customers</h4>
          </div>
          <div>
            <p className="flex justify-center">
              <CountUp start={0} end={500} duration={3} />
              <span>+</span>
            </p>
            <h4 className="text-orange-500">Active Customers</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
