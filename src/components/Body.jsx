import React from "react";
import carData from "../utils/Data";
import { Link } from "react-router-dom";
import Card from "./Card";

const Body = () => {
  return (
    <div className="max-w-[1100px] mx-auto mb-20 p-4">
      {/* title */}
      <div className="mb-8">
        <h4 className="text-lg font-bold text-blue-500">Your Choice</h4>
        <h3 className="text-xl font-bold text-orange-400 sm:text-3xl">
          Our Fleet
        </h3>
      </div>
      {/* main container grid for rendering each car deatil */}
      <div className="grid grid-cols-1 justify-center max-w-[1100px] m-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:px-12  gap-x-2 gap-y-6">
        {carData.map((data) => (
          <Link to={"/carpage/" + data.id} key={data.id}>
            <Card data={data} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
