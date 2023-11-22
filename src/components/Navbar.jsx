import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
import { useSelector } from "react-redux";

const Navbar = () => {
  const bookings = useSelector((state) => state.Book);
  const [openNav, setOpenNav] = useState(false);
  const handleNav = () => {
    setOpenNav((prev) => !prev);
  };

  return (
    <header>
      <div className="fixed w-full left-0  top-0 bottom-0 flex justify-between p-4 h-20 bg-white lg:px-12 max-w-[1400px]   z-20 mx-auto  mb-4  ">
        {/* LOGO */}
        <div>
          <h2 className="text-2xl font-extrabold text-blue-500"> CARAVALA</h2>
        </div>
        {/*  navbar */}
        <nav className="bg-white">
          {/* desktop nav */}
          <ul className="hidden gap-4 sm:flex">
            <li>
              <Link to="/" className="text-base font-semibold">
                Home
              </Link>
            </li>
            <li>
              <Link to="/bookings" className="relative text-base font-semibold">
                <div className="absolute right-[-15px] opacity-80  bg-green-500 border-2  rounded-[50%] top-[-12px] px-2 text-sm">
                  {bookings.length}
                </div>
                Bookings
              </Link>
            </li>
          </ul>

          {/* mobile nav */}
          <ul
            onClick={handleNav}
            className={
              openNav
                ? "w-full h-screen bg-blue-400  flex flex-col justify-center items-center absolute top-0 left-0  gap-4  sm:hidden py-12 transition-all duration-500 ease-in"
                : "absolute flex flex-col justify-center items-center  top-[-400px] left-0 right-0 transition-all duration-600 ease-in "
            }
          >
            <div className="absolute top-4 right-4">
              <IoCloseSharp size={25} />
            </div>
            <li>
              <Link to="/" className="text-xl font-semibold">
                Home
              </Link>
            </li>
            <li>
              <Link to="/bookings" className="text-xl font-semibold">
                Bookings
              </Link>
            </li>
          </ul>
        </nav>
        {/* Hamburger icon */}
        <div className="sm:hidden" onClick={handleNav}>
          <BiMenuAltRight size={25} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
