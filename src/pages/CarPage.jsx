import React from 'react'
import { useParams } from 'react-router-dom'
import Data from '../utils/Data'

const CarPage = () => {
  const {id} =useParams()

  const {image,title,rent} = Data.find((EachCar)=> EachCar.id === +id )
  
  return (
    <div className="flex  w-full h-screen ">
      <div className="">
        <img src={image} alt={title} />
      </div>
    </div>
  );
}

export default CarPage