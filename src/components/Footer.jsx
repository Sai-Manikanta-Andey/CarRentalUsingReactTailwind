import React from 'react'

const Footer = () => {
  return (
    <>
      <hr className="mt-8 max-w-[1100px] shadow-lg mx-auto" />
      <div className=" w-full max-w-[1100px] m-auto p-4  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 ">
        <div className="justify-self-center">
          <h3 className="text-xl font-semibold">CARVALA</h3>
          <h4 className="text-base font-medium">Perupalem</h4>
          <h4 className="text-base font-medium">Careers</h4>
          <h4 className="text-base font-medium">Rental Flow</h4>
          <h4 className="text-base font-medium">Policy</h4>
        </div>
        <div className="justify-self-center">
          <h3 className="text-xl font-semibold">Contacts</h3>
          <h4 className="text-base font-medium">carvala@gmail.com</h4>
          <h4 className="text-base font-medium">+91 9959629880</h4>
        </div>
        <div className="justify-self-center">
          <h3 className="text-xl font-semibold">Subscribe</h3>
          <h4 className="text-base font-medium w-[60%] ">
            Subscribe to our weekly news letter.
          </h4>
          <h4 className="text-base font-medium">
            <input type="text" placeholder="Email" className="px-2 py-2 w-[200px] border-2 rounded outline-none" />
          </h4>
          <button className="px-2 py-2 mt-2 text-base font-medium bg-orange-400 rounded">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
}

export default Footer