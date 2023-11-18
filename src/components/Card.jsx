import React from 'react'

const Card = ({data}) => {
  return (
    <div className="w-[280px]  h-[200px] bg-slate-100 md:w-[230px] lg:w-[280px] p-4 rounded-lg m-auto hover:shadow-xl">
      <div>
        <img src={data.image} alt={data.title} />
      </div>
      <div>
        <h3>{data.title} </h3>
      </div>
      <div>{data.rent}</div>
    </div>
  );
}

export default Card