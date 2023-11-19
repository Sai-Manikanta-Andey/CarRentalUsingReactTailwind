import React from "react";
import koenigsegg from "../assets/koenigsegg_Agera.webp";
import CountUp from "react-countup";

const About = () => {
  return (
    <div className="flex flex-col  gap-4 md:flex-row  p-4 max-w-[1100px] mx-auto">
      {/* right side image div */}
      <div className="flex h-[260px] w-full">
        <img
          src={koenigsegg}
          alt="banner"
          className="w-full md:w-[360px] rounded  object-cover "
        />
      </div>
      {/* description about carvala */}
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-bold text-orange-400">
          Our Premium Services
        </h3>
        <h3 className="text-base font-semibold text-gray-700">
          Carvala is a premium car rental platform that offers more than just
          luxury vehicles. seamless online rentals, 24/7 support, and additional
          services like professional car washing and reliable car repairs.
          Carvala is your one-stop destination for a convenient and elevated
          automotive experience.
        </h3>
        <div className="flex flex-wrap justify-around gap-4 font-semibold sm:text-lg md:justify-start sm:flex-nowrap">
          <div>
            <p  className="flex justify-center" >
              <CountUp start={0} end={50} duration={3} />
              <span>+</span>
            </p>
            <h4 className="text-blue-500">Premium Cars</h4>
          </div>
          <div>
            <p className="flex justify-center" >
              <CountUp start={0} end={10000} duration={3} />
              <span>+</span>
            </p>
            <h4 className="text-blue-500">Satisfied Customers</h4>
          </div>
          <div>
            <p className="flex justify-center" >
              <CountUp start={0} end={500} duration={3} />
              <span>+</span>
            </p>
            <h4 className="text-blue-500">Active Customers</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
