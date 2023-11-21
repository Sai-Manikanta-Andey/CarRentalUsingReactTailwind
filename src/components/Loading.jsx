import React from 'react'
import { HashLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className="flex justify-center items-center max-w-[1100px] mx-auto h-screen">
      <HashLoader color="#d7ac36" size={100}  />
    </div>
  );
}

export default Loading