import React from 'react'
import carData from '../utils/Data'
import { Link } from 'react-router-dom'
import Card from './Card'

const Body = () => {
  return (
    <div className="grid grid-cols-1 justify-center max-w-[1100px] m-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:px-12  gap-x-2 gap-y-6">
      {carData.map((data) => (
        <Link to={"/carpage/" + data.id} key={data.id}>
          <Card data={data} />
        </Link>
      ))}
    </div>
  );
}

export default Body