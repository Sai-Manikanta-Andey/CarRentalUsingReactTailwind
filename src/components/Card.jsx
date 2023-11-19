import React from 'react'
import { FaStar } from "react-icons/fa";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { PiEngineFill } from "react-icons/pi";
import { PiSteeringWheelFill } from "react-icons/pi";

const Card = ({data}) => {
  return (
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
          <h3 className="uppercase font-bold">{data.title} </h3>
        </div>
        <div className="flex items-center">
          <h3 className="flex items-center justify-center">
            {data.rating}

            <FaStar size={15} className="text-yellow-400" />
          </h3>
        </div>
      </div>

      <div className="text-gray-600 font-semibold text-sm">
        <span>₹</span>
        {data.rent}
        <span className="text-xs">/Day</span>
      </div>
      <div className="flex justify-start  gap-3">
        <h3 className="flex  gap-1  py-1 px-2 items-center rounded text-sm bg-white border-2   border-orange-500">
          <MdAirlineSeatReclineExtra size={15} />
          {data.members}
        </h3>
        <h3 className="flex  gap-1 items-center text-sm py-1 px-2  rounded bg-white border-2  border-orange-500">
          <PiEngineFill size={15} /> {data.engine}
        </h3>
        <h3 className="flex  gap-1 items-center text-sm py-1 px-2  rounded bg-white border-2  border-orange-500">
          <PiSteeringWheelFill size={15} /> M
        </h3>
      </div>
    </div>
  );
}

export default Card