import {
  SiLamborghini,
  SiBugatti,
  SiBmw,
  SiAudi,
  SiFerrari,
  SiJaguar,
} from "react-icons/si";

import React from "react";

const Companies = () => {
  return (
    <div className="grid grid-cols-3  gap-4 md:grid-cols-6 max-w-[1100px] mx-auto mb-8 p-4 ">
      <SiLamborghini  size={80}    color="gray" className="justify-self-center    " />
      <SiBugatti  size={80}   color="gray" className="justify-self-center   "   />
      <SiBmw  size={80}   color="gray" className="justify-self-center   "  />
      <SiAudi  size={80}   color="gray" className="justify-self-center   "  />
      <SiFerrari  size={80}   color="gray" className="justify-self-center   "  />
      <SiJaguar  size={80}   color="gray" className="justify-self-center   "  />
    </div>
  );
};

export default Companies;
