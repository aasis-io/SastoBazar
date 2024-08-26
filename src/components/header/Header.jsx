import React from "react";
import LogoLight from "../../assets/images/LogoLight.png";
import { FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return (
    <>
      <header className="font-poppins flex items-center justify-evenly p-4 bg-orange-500">
        <div className="flex itmes-center">
          <img src={LogoLight} alt="SastoBazar" className="h-12 w-full pr-2" />
        </div>
        <div className="flex items-center justify-center w-2/5 relative">
          <input
            type="text"
            placeholder="I'm searching for"
            className="text-gray border border-gray-300 w-full py-2 px-2 pr-8 text-sm focus:outline-none"
          />
          <button className="absolute top-0 right-0 flex items-center justify-center h-full w-20 bg-orange-400">
            <FiSearch className="h-4 w-4 text-white" />
          </button>
        </div>
        <div className="flex items-center ml-2">
          <div className="flex items-center">
            <FiHeart className="h-6 w-6 text-gray-100" />
            <span className="ml-1 text-gray-100">Wishlist</span>
          </div>
          <div className="ml-4">
            <div className="relative">
              <FiShoppingCart className="h-6 w-6 text-gray-100" />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-orange-500 transform translate-x-1/2 -translate-y-1/2 bg-gray-100 rounded-lg">
                0
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
