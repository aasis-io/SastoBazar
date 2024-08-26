import React from "react";
import { FaViber } from "react-icons/fa";

const TopHeader = () => {
  return (
    <>
      {/* <div className="flex justify-center">
        <div className="max-w-screen-2xl w-full font-poppins pt-1 border-b p-2 px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FaViber className="text-blue-500" />
            <span className="text-sm text-gray-700">Customer Support</span>
            <span className="text-sm text-gray-700 mx-4">Help</span>
          </div>
          <div className="flex items-center space-x-2">
            <a href="" className="text-sm text-gray-700 hover:text-blue-500 no-underline">
              Login
            </a>
            <span className="text-sm text-gray-700"></span>
            <a href="" className="text-sm text-gray-700 hover:text-blue-500 no-underline">
              SignUp
            </a>
          </div>
        </div>
      </div> */}
      <div className="bg-orange-600">
      <nav className="flex w-fullfont-poppins justify-between container">
        <div className="">
          <ul className="flex p-0 m-0">
            <li className="flex">
              <a
                href=""
                className="no-underline text-white py-3 px-3 uppercase text-sm font-medium tracking-wide"
              >
                Home
              </a>
            </li>
            <li className="flex">
              <a
                href=""
                className="no-underline text-white py-3 px-3 uppercase text-sm font-medium tracking-wide"
              >
                Category
              </a>
            </li>
            <li className="flex">
              <a
                href=""
                className="no-underline text-white py-3 px-3 uppercase text-sm font-medium tracking-wide"
              >
                New Arrivals
              </a>
            </li>
            <li className="flex">
              <a
                href=""
                className="no-underline text-white py-3 px-3 uppercase text-sm font-medium tracking-wide"
              >
                Fashion
              </a>
            </li>
            <li className="flex">
              <a
                href=""
                className="no-underline text-white py-3 px-3 uppercase text-sm font-medium tracking-wide"
              >
                Electronics
              </a>
            </li>
            <li className="flex">
              <a
                href=""
                className="no-underline text-white py-3 px-3 uppercase text-sm font-medium tracking-wide"
              >
                Gifts
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex p-0 m-0">
            <li className="flex">
              <a
                href=""
                className="no-underline text-white py-3 px-3 uppercase text-sm font-medium tracking-wide"
              >
                Login
              </a>
            </li>
            <li className="flex">
              <a
                href=""
                className="no-underline text-white py-3 px-3 uppercase text-sm font-medium tracking-wide"
              >
                SignUp
              </a>
            </li>
          </ul>
        </div>
      </nav>
      </div>
    </>
  );
};

export default TopHeader;
