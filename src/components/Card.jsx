import React from "react";
import { FaStar } from "react-icons/fa";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { PiEngineFill } from "react-icons/pi";
import { PiSteeringWheelFill } from "react-icons/pi";

const Card = ({ data }) => {
  return (
    <div>
      <div className="w-[280px] flex flex-col gap-2   h-[260px] bg-blue-100 md:w-[230px] lg:w-[280px] p-4 rounded-lg m-auto hover:shadow-xl">
        <div>
          <img
            src={data.image}
            alt={data.title}
            className="w-[180px] mx-auto h-32 object-contain hover:scale-110 duration-500 "
          />
        </div>
        <div className="flex justify-between">
          <div>
            <h3 className="font-bold uppercase">{data.title} </h3>
          </div>
          <div className="flex items-center">
            <h3 className="flex items-center justify-center">
              {data.rating}

              <FaStar size={15} className="text-yellow-400 mb-0.5" />
            </h3>
          </div>
        </div>

        <div className="text-sm font-semibold text-gray-600">
          <span>₹</span>
          {data.rent}
          <span className="text-xs">/Day</span>
        </div>
        <div className="flex justify-start gap-3">
          <h3 className="flex items-center gap-1 px-2 py-1 text-sm bg-white border-2 border-orange-500 rounded">
            <MdAirlineSeatReclineExtra size={15} />
            {data.members}
          </h3>
          <h3 className="flex items-center gap-1 px-2 py-1 text-sm bg-white border-2 border-orange-500 rounded">
            <PiEngineFill size={15} /> {data.engine}
          </h3>
          <h3 className="flex items-center gap-1 px-2 py-1 text-sm bg-white border-2 border-orange-500 rounded">
            <PiSteeringWheelFill size={15} /> M
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
