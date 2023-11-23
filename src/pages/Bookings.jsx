import React from "react";
import { useSelector } from "react-redux";
import Booking from "../components/Booking";


const Bookings = () => {
  const bookings = useSelector((state) => state.Book);

  return (
    <div className="max-w-[1100px] py-20 mx-auto px-4">
      <h2 className="mb-4 text-2xl font-bold">Bookings</h2>
      
      {/* booked cars */}
      
      <div>
        {bookings.length===0?<h2 className="p-8 text-2xl font-bold text-center ">YOU HAVE NO BOOKINGS.</h2> :  bookings.map((car) => (
          <Booking carData={car} key={car.id} />
        ))}
      </div>
    </div>
  );
};

export default Bookings;
