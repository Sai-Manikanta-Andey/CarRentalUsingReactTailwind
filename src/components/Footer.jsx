import React from 'react'

const Footer = () => {
  return (
    <div className="bg-blue-100 ">
      <hr className="mt-8 max-w-[1100px] shadow-lg mx-auto" />
      <div className=" w-full max-w-[1100px] m-auto p-4  flex flex-col sm:flex-row flex-wrap  gap-2  sm:justify-between ">
        <div className="justify-self-center">
          <h3 className="text-xl font-semibold">CARVALA</h3>

          <h4 className="text-sm font-medium opacity-90">Perupalem</h4>
          <h4 className="text-sm font-medium opacity-90">Careers</h4>
          <h4 className="text-sm font-medium opacity-90">Rental Flow</h4>
          <h4 className="text-sm font-medium opacity-90">Policy</h4>
        </div>
        <div className="justify-self-center">
          <h3 className="text-xl font-semibold">Contacts</h3>
          <h4 className="text-sm font-medium opacity-90">carvala@gmail.com</h4>
          <h4 className="text-sm font-medium opacity-90">+91 9959629880</h4>
        </div>
        <div className="justify-self-center">
          <h3 className="text-xl font-semibold">Services</h3>
          <h4 className="text-sm font-medium opacity-90">Car Spare Parts</h4>
          <h4 className="text-sm font-medium opacity-90">Car Washing</h4>
          <h4 className="text-sm font-medium opacity-90">Car Rentals</h4>
        </div>
      </div>
    </div>
  );
}

export default Footer