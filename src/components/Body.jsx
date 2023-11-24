import React, { useEffect, useState } from "react";
import carData from "../utils/Data";
import { Link } from "react-router-dom";
import Card from "./Card";

const Body = () => {
  const [search, setSearch] = useState("");
  const [filteredData, setfilteredData] = useState(carData);

  useEffect(() => {
    setfilteredData(carData);
  }, [search]);

  return (
    <div className="max-w-[1100px] mx-auto mb-12 p-4">
      {/* title */}
      <div className="mb-8">
        <h4 className="text-lg font-bold text-blue-700">Your Choice</h4>
        <h3 className="text-xl font-bold text-orange-400 sm:text-3xl">
          Our Fleet
        </h3>
      </div>
      {/* filter and search functionality */}
      <div>
        <div className="flex justify-center gap-2 my-6">
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="text"
            placeholder="Search"
            className="px-4 py-2 border-2 border-gray-400 rounded w-[200px]"
          />
          <button
            onClick={() => {
              const filteredData = carData.filter((car) =>
                car.title.toLowerCase().includes(search.toLowerCase())
              );
              setfilteredData(filteredData);
            }}
            className="px-4 py-2 bg-blue-500 border-2 rounded outline-none "
          >
            Search
          </button>
        </div>
      </div>
      {/* main container grid for rendering each car deatil */}
      <div className="grid grid-cols-1 justify-center max-w-[1100px] m-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:px-12  gap-x-2 gap-y-6">
        {filteredData.length !== 0 ? (
          filteredData.map((data) => (
            <Link to={"/carpage/" + data.id} key={data.id}>
              <Card data={data} />
            </Link>
          ))
        ) : (
          <h2 className="text-2xl font-bold my-12 text-red-500 max-w-[1100px] m-auto">
            Oops!, No Cars Found
          </h2>
        )}
      </div>
    </div>
  );
};

export default Body;
