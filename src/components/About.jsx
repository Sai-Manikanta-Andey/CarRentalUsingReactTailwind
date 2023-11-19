import React from "react";
import koenigsegg from "../assets/koenigsegg_Agera.webp";

const About = () => {
  return (
   
      <div className="flex flex-col  gap-4 sm:flex-row sm:justify-around p-4 max-w-[1100px] mx-auto">
        {/* right side image div */}
        <div className="flex h-[260px] w-full">
          <img
            src={koenigsegg}
            alt="banner"
            className="w-full md:w-[360px] rounded  object-cover"
          />
        </div>
        {/* description about carvala */}
        <div className="flex flex-col">
          <h3 className="text-base font-bold">
            Carvala is a premium car rental platform that offers more than just
            luxury vehicles. seamless online rentals, 24/7 support, and
            additional services like professional car washing and reliable car
            repairs. Carvala is your one-stop destination for a convenient and
            elevated automotive experience.
          </h3>
        </div>
      </div>
  
  );
};

export default About;
