import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const handleNav = () => {
    setOpenNav((prev) => !prev);
  };

  return (
    <header className="fixed w-full left-0 right-0 flex justify-between p-4 h-16 bg-white lg:px-12 max-w-[1400px]   z-20 mx-auto   ">
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
            <Link to="/bookings" className="text-base font-semibold">
              Bookings
            </Link>
          </li>
          <li>
            <a className="text-base font-semibold" href="#contact">
              Contact
            </a>
          </li>
          <li>
            <a className="text-base font-semibold" href="#about">
              About
            </a>
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
          <li>
            <a className="text-xl font-semibold" href="#contact">
              Contact
            </a>
          </li>
          <li>
            <a className="text-xl font-semibold" href="#about">
              About
            </a>
          </li>
        </ul>
      </nav>
      {/* Hamburger icon */}
      <div className="sm:hidden" onClick={handleNav}>
        <BiMenuAltRight size={25} />
      </div>
    </header>
  );
};

export default Navbar;
