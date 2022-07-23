import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import logo from "./../img/logo.png";
import userAvatar from "./../img/avatar.png";
import { MdShoppingBasket } from "react-icons/md";

import { app, provider } from "./../firebase-config";
import { getAuth, signInWithPopup } from "firebase/auth";
import { actionType } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";

function Header() {
  const auth = getAuth(app);
  const [{ user }, dispatch] = useStateValue();

  const login = async () => {
    const {
      user: { refreshToken, providerData },
    } = await signInWithPopup(auth, provider);
    dispatch({
      type: actionType.SET_USER,
      user: providerData[0],
    });
  };

  return (
    <header className="fixed z-50 w-screen  p-6 px-16">
      {/* Desktop & Tablet */}
      <div className="hidden md:flex w-full h-full ">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={logo} className="object-cover w-8" alt="logo" />
          <p className="text-headingcolor text-xl font-bold">City</p>
        </Link>

        <div className="flex items-center ml-auto gap-8">
          <ul className="flex items-center gap-8 ml-auto">
            <motion.li
              whileTap={{ scale: 1.4 }}
              className="text-base text-textColor hover:text-headingcolor duration-100 transition-all ease-in-out cursor-pointer"
            >
              Home
            </motion.li>
            <motion.li
              whileTap={{ scale: 1.4 }}
              className="text-base text-textColor hover:text-headingcolor duration-100 transition-all ease-in-out cursor-pointer"
            >
              Menu
            </motion.li>
            <motion.li
              whileTap={{ scale: 1.4 }}
              className="text-base text-textColor hover:text-headingcolor duration-100 transition-all ease-in-out cursor-pointer"
            >
              Service
            </motion.li>
            <motion.li
              whileTap={{ scale: 1.4 }}
              className="text-base text-textColor hover:text-headingcolor duration-100 transition-all ease-in-out cursor-pointer"
            >
              About Us
            </motion.li>
            <motion.li
              whileTap={{ scale: 1.4 }}
              className="text-base text-textColor hover:text-headingcolor duration-100 transition-all ease-in-out cursor-pointer"
            >
              Contact Us
            </motion.li>
          </ul>

          <motion.div
            whileTap={{ scale: 1.4 }}
            className="flex items-center relative"
          >
            <MdShoppingBasket className="text-textColor text-2xl cursor-pointer " />
            <div className="absolute bg-cartNumBg -top-3 left-4 w-5 h-5 rounded-full flex justify-center items-center">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </motion.div>
          <div>
            {" "}
            <div>
              <motion.img
                whileTap={{ scale: 0.5 }}
                src={user ? user.photoURL : userAvatar}
                alt="avatar"
                onClick={login}
                className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
      {/* For Mobile */}
      <div className="flex md:hidden w-full h-full "></div>
    </header>
  );
}

export default Header;
