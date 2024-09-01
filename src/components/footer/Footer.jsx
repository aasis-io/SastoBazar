import React, { useState, useEffect } from "react";
import Logo from "../../assets/images/logo.png";
import LogoLight from "../../assets/images/LogoLight.png";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
const Footer = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    const handleDarkModeChange = (event) => {
      setDarkMode(event.detail);
    };

    // Listen for the custom event
    window.addEventListener("darkModeChange", handleDarkModeChange);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("darkModeChange", handleDarkModeChange);
    };
  }, []);
  console.log(darkMode);
  return (
    <>
      <div className="w-full flex justify-center py-12 bg-slate-50 dark:bg-slate-800">
        <footer className="font-poppins flex flex-col container w-full">
          <div className="flex justify-between">
            <div className="max-w-sm">
              <NavLink to={"/"}>
                {darkMode ? (
                  <img
                    src={LogoLight}
                    alt=""
                    className="h-full max-h-12 w-56 pr-2 mb-7"
                  />
                ) : (
                  <img
                    src={Logo}
                    alt=""
                    className="h-full max-h-12 w-56 pr-2 mb-7"
                  />
                )}
              </NavLink>
              <p className="text-gray-800 dark:text-slate-50 text-base">
                info@sastobazar.com
              </p>
              <p className="text-gray-800 dark:text-slate-50 text-base">
                +977 9878987654
              </p>
              <div className="flex gap-3 mt-4">
                <a
                  href="https://www.facebook.com/" target="__blank"
                  className="text-gray-800 dark:text-slate-50 hover:text-cyan-500 duration-300"
                >
                  <FaTwitter className="h-6 w-6" />
                </a>
                <a
                  href=""
                  className="text-gray-800 dark:text-slate-50 hover:text-blue-600 duration-300"
                >
                  <FaFacebook className="h-6 w-6" />
                </a>
                <a
                  href=""
                  className="text-gray-800 dark:text-slate-50 hover:text-rose-600 duration-300"
                >
                  <FaInstagram className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div className="flex gap-16">
              <div>
                <span className="uppercase text-gray-400 font-medium text-base tracking-wider">
                  Company
                </span>
                <ul className="mt-2 p-0 m-0 text-gray-800 dark:text-slate-50">
                  <li className="flex">
                    <Link
                      to="/about-us"
                      className="no-underline text-gray-800 dark:text-slate-50 py-2 hover:text-sky-600 duration-300 ease-in-out"
                    >
                      About
                    </Link>
                  </li>
                  <li className="flex">
                    <a
                      href=""
                      className="no-underline text-gray-800 dark:text-slate-50 py-2 hover:text-sky-600 duration-300 ease-in-out"
                    >
                      Features
                    </a>
                  </li>
                  <li className="flex">
                    <a
                      href=""
                      className="no-underline text-gray-800 dark:text-slate-50 py-2 hover:text-sky-600 duration-300 ease-in-out"
                    >
                      Shop
                    </a>
                  </li>
                  <li className="flex">
                    <a
                      href=""
                      className="no-underline text-gray-800 dark:text-slate-50 py-2 hover:text-sky-600 duration-300 ease-in-out"
                    >
                      Download App
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <span className="uppercase text-gray-400 font-medium text-base tracking-wider">
                  Help
                </span>
                <ul className="mt-2 p-0 m-0">
                  <li className="flex">
                    <a
                      href=""
                      className="no-underline text-gray-800 dark:text-slate-50 py-2 hover:text-sky-600 duration-300 ease-in-out"
                    >
                      Customer Support
                    </a>
                  </li>
                  <li className="flex">
                    <a
                      href=""
                      className="no-underline text-gray-800 dark:text-slate-50 py-2 hover:text-sky-600 duration-300 ease-in-out"
                    >
                      Delivery Details
                    </a>
                  </li>
                  <li className="flex">
                    <a
                      href=""
                      className="no-underline text-gray-800 dark:text-slate-50 py-2 hover:text-sky-600 duration-300 ease-in-out"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li className="flex">
                    <a
                      href=""
                      className="no-underline text-gray-800 dark:text-slate-50 py-2 hover:text-sky-600 duration-300 ease-in-out"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <span className="uppercase text-gray-400 font-medium text-base tracking-wider">
                  Subscribe to our newsletter
                </span>

                <input
                  type="text"
                  placeholder="Enter your email"
                  className="text-gray border border-gray-300 py-3 px-2 pr-8 text-base focus:outline-none rounded w-96 mt-3 block"
                />
                <button className="bg-sky-600 text-white py-3 px-4 rounded mt-2 hover:bg-sky-500 ease-in-out duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <hr className="mt-12 text-gray-400" />
          <div className="text-center mt-8 text-gray-500 dark:text-slate-300">
            &copy; Copyright 2024, All rights reserved by SastoBazar
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
