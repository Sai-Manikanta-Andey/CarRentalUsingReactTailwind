import React from "react";
import phn from "../assets/phn.webp";
import playstore from "../assets/playstore.svg";
import appstore from "../assets/appstore.svg";

const Contact = () => {
  return (
    <div
      id="contact"
      className="p-4 max-w-[1100px] mx-auto flex flex-col-reverse sm:flex-row gap-8 mb-20"
    >
      {/* left div */}
      <div className="w-full sm:w-[60%]">
        <div className="flex flex-col justify-center h-full">
          <h3 className="text-xl font-bold text-blue-700 sm:text-2xl">
            Download Carvala App
          </h3>
          <h4 className="text-base font-semibold text-gray-700 ">
            Carvala is your one-stop online destination for all your automotive
            needs. Whether you're in search of a reliable rental car for your
            next journey or require professional car services like washing,
            repairing, or sourcing genuine car parts, Carvala has you covered.
          </h4>
          <div className="flex justify-start gap-2 mt-4 sm:gap-4">
            <img
              src={playstore}
              className="w-[130px] h-10 object-contain "
              alt="playstore "
            />
            <img
              src={appstore}
              className="w-[130px] h-10 object-contain "
              alt="appstore"
            />
          </div>
        </div>
      </div>
      {/* right div */}
      <div className="w-full sm:w-[50%] h-[340px] mt-4">
        <img
          src={phn}
          alt="iphoneimg"
          className="object-contain h-[340px] w-full"
        />
      </div>
    </div>
  );
};

export default Contact;
