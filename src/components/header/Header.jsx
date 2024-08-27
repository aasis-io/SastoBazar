import React, { useState, useEffect } from "react";
import Logo from "../../assets/images/logo.png";
import LogoLight from "../../assets/images/LogoLight.png";
import { FiSearch } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { LuSun, LuMoonStar } from "react-icons/lu";

const Header = () => {
  // const [darkMode, setDarkMode] = useState(() => {
  //   return localStorage.getItem("darkMode") === "true";
  // });
  // useEffect(() => {
  //   if (darkMode) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [darkMode]);

  // const toggleDarkMode = () => {
  //   setDarkMode((prevMode) => !prevMode);
  // };

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
    window.dispatchEvent(
      new CustomEvent("darkModeChange", { detail: darkMode })
    );
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <header className="">
        <div className="font-poppins flex items-center justify-evenly p-4 bg-slate-50 dark:bg-slate-800">
          <div className="flex itmes-center">
            <NavLink to={"/"}>
              {darkMode ? (
                <img src={LogoLight} alt="" className="h-12 pr-2" />
              ) : (
                <img src={Logo} alt="" className="h-12 pr-2" />
              )}
            </NavLink>
          </div>
          <div className="flex items-center justify-center w-2/5 relative">
            <FiSearch className="h-5 w-5 absolute left-3 stroke-slate-900 dark:text-slate-50" />
            <input
              type="text"
              placeholder="I'm searching for"
              className="text-gray border-none bg-sky-100 w-full py-3.5 pl-10 pr-28 text-sm focus:outline-none rounded"
            />
            <button className="absolute top-1/2 -translate-y-1/2 right-1.5 flex items-center justify-center py-1.5 px-3 bg-sky-500 text-white rounded active:scale-95">
              Search
            </button>
          </div>
          <div className="flex items-center ml-2">
            <div className="flex items-center">
              <FaRegCircleUser className="h-6 w-6 text-slate-900 dark:text-slate-50" />
              <NavLink
                to={"/sastobazar-login"}
                className="ml-1 text-slate-900 dark:text-slate-50 text-base font-medium no-underline"
              >
                Login
              </NavLink>
            </div>
            <div className="ml-6">
              <div className="flex items-center relative">
                <MdOutlineShoppingCart className="h-6 w-6 text-slate-900 dark:text-slate-50" />
                {/* <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-orange-600 rounded-lg">
                  0
                </span> */}
                <span className="ml-1 text-slate-900 dark:text-slate-50 text-base font-medium">
                  Cart
                </span>
              </div>
            </div>
            <button onClick={toggleDarkMode} className="flex items-center ml-8">
              {darkMode ? (
                <LuSun className="h-6 w-6 text-slate-900 dark:text-slate-50" />
              ) : (
                <LuMoonStar className="h-6 w-6 text-slate-900" />
              )}
            </button>
          </div>
        </div>
      </header>
      {/* <header className="font-poppins flex items-center justify-evenly p-4 bg-gray-100">
        <div className="flex itmes-center">
          <img src={Logo} alt="SastoBazar" className="h-12 w-full pr-2" />
        </div>
        <div className="flex items-center justify-center w-2/5 relative">
          <input
            type="text"
            placeholder="I'm searching for"
            className="text-gray border border-gray-300 w-full py-2 px-2 pr-8 text-sm focus:outline-none"
          />
          <button className="absolute top-0 right-0 flex items-center justify-center h-full w-20 bg-orange-500">
            <FiSearch className="h-4 w-4 text-white" />
          </button>
        </div>
        <div className="flex items-center ml-2">
          <div className="flex items-center">
            <FiHeart className="h-6 w-6 text-gray-800" />
            <span className="ml-1 text-gray-800">Wishlist</span>
          </div>
          <div className="ml-4">
            <div className="relative">
              <FiShoppingCart className="h-6 w-6 text-gray-800" />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-orange-600 rounded-lg">
                0
              </span>
            </div>
          </div>
        </div>
      </header> */}
    </>
  );
};

export default Header;
