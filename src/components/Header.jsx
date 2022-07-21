import React from "react";
import logo from "./img/logo.png";
import userAvatar from "./img/avatar.png";
import { MdShoppingBasket } from "react-icons/md";

function Header() {
  return (
    <header className="fixed z-50 w-screen  p-6 px-16">
      {/* Desktop & Tablet */}
      <div className="hidden md:flex w-full h-full ">
        <div className="flex items-center gap-2">
          <img src={logo} className="object-cover w-8" alt="logo" />
          <p className="text-headingcolor text-xl font-bold">City</p>
        </div>

        <div className="flex items-center ml-auto gap-8">
          <ul className="flex items-center gap-8 ml-auto">
            <li className="text-base text-textColor hover:text-headingcolor duration-100 transition-all ease-in-out cursor-pointer">
              Home
            </li>
            <li className="text-base text-textColor hover:text-headingcolor duration-100 transition-all ease-in-out cursor-pointer">
              Menu
            </li>
            <li className="text-base text-textColor hover:text-headingcolor duration-100 transition-all ease-in-out cursor-pointer">
              Service
            </li>
            <li className="text-base text-textColor hover:text-headingcolor duration-100 transition-all ease-in-out cursor-pointer">
              About Us
            </li>
            <li className="text-base text-textColor hover:text-headingcolor duration-100 transition-all ease-in-out cursor-pointer">
              Contact Us
            </li>
          </ul>

          <div className="flex items-center relative">
            <MdShoppingBasket className="text-textColor text-2xl cursor-pointer " />
            <div className="absolute bg-cartNumBg -top-3 left-4 w-5 h-5 rounded-full flex justify-center items-center">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>
          <div className="w-10 cursor-pointer drop-shadow-2xl ">
            {" "}
            <img src={userAvatar} alt="avatar" />
          </div>
        </div>
      </div>
      {/* For Mobile */}
      <div className="flex md:hidden w-full h-full "></div>
    </header>
  );
}

export default Header;
