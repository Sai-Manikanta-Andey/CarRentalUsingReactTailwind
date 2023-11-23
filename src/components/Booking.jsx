import React from "react";
import { FaStar } from "react-icons/fa";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { PiEngineFill } from "react-icons/pi";
import { PiSteeringWheelFill } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { cancelBooking } from "../feature/BookingSlice";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

const Booking = ({ carData }) => {
  const dispatch = useDispatch();
  
  const handleClick = (id) => {
    dispatch(cancelBooking(id));
    toast.error("Successfully Cancelled");
  };

  return (
    <div className="w-[290px] flex flex-col sm:block mb-4 gap-4 sm:h-[300px] h-[360px] bg-blue-100   rounded-lg m-auto  hover:shadow-xl md:w-[660px] p-4">
      <div className="flex flex-col mb-2 sm:flex-row">
        <Toaster position="top-center" reverseOrder={false} />
        <div className="flex items-center">
          <img
            src={carData?.image}
            alt={carData?.title}
            className="w-[180px] mx-auto h-36 object-contain hover:scale-110 duration-500 "
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <h3 className="font-bold uppercase">{carData?.title} </h3>
          </div>
          <div className="flex items-center">
            <h3 className="flex items-center justify-center">
              {carData?.rating}

              <FaStar size={15} className="text-yellow-400 mb-0.5" />
            </h3>
          </div>
          <div className="text-sm font-semibold text-gray-600">
            <span>₹</span>
            {carData.rent}
            <span className="text-xs">/Day</span>
          </div>
          <div className="flex justify-start gap-3">
            <h3 className="flex items-center gap-1 px-2 py-1 text-sm bg-white border-2 border-orange-500 rounded">
              <MdAirlineSeatReclineExtra size={15} />
              {carData.members}
            </h3>
            <h3 className="flex items-center gap-1 px-2 py-1 text-sm bg-white border-2 border-orange-500 rounded">
              <PiEngineFill size={15} /> {carData.engine}
            </h3>
            <h3 className="flex items-center gap-1 px-2 py-1 text-sm bg-white border-2 border-orange-500 rounded">
              <PiSteeringWheelFill size={15} /> M
            </h3>
          </div>
          <div>
            <button
              onClick={() => handleClick(carData.id)}
              className="px-4 py-2 mt-2 bg-orange-400 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:block">{carData.description} </div>
    </div>
  );
};

export default Booking;
