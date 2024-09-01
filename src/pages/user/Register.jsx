import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="py-12 bg-slate-200 dark:bg-slate-900">
        <div className="font-poppins max-w-md mx-auto p-4 bg-slate-50 dark:bg-slate-800 shadow-md rounded-md">
          <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-50">
            Register
          </h2>
          <span className="mb-2 block  text-slate-900 dark:text-slate-50">
            Please fill your valid credentials
          </span>
          <form action="">
          <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-600 dark:text-slate-50"
              >
                Full Name
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your fullname"
                className="mt-1 px-2 py-3.5 border border-gray-300 rounded-md w-full focus:outline-slate-200 text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-600 dark:text-slate-50"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="mt-1 px-2 py-3.5 border border-gray-300 rounded-md w-full focus:outline-slate-200 text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-600 dark:text-slate-50"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Enter your address"
                className="mt-1 px-2 py-3.5 border border-gray-300 rounded-md w-full focus:outline-slate-200 text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-600 dark:text-slate-50"
              >
                Phone Number
              </label>
              <input
                type="number"
                id="number"
                name="number"
                placeholder="Enter your phone number"
                className="mt-1 px-2 py-3.5 border border-gray-300 rounded-md w-full focus:outline-slate-200 text-sm"
              />
            </div>
            <div className="mb-4 relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-600 dark:text-slate-50"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                className="mt-1 px-2 py-3.5 border border-gray-300 rounded-md w-full focus:outline-slate-200 text-sm"
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute top-12 -translate-y-1/2 right-4 hover:cursor-pointer"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            <div className="mb-4 relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-600 dark:text-slate-50"
              >
                Confirm Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="confirm_password"
                name="confirm_password"
                placeholder="Enter your password again"
                className="mt-1 px-2 py-3.5 border border-gray-300 rounded-md w-full focus:outline-slate-200 text-sm"
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute top-12 -translate-y-1/2 right-4 hover:cursor-pointer"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            <div className="mt-4">
              <button className="py-2.5 px-4 w-full bg-sky-500 text-white rounded-md hover:bg-sky-600 duration-300 focus:outline-none">
                Sign Up
              </button>
            </div>
            <span className="block text-center mt-4 dark:text-slate-50">
              Already have an account?
              <NavLink
                to="/sastobazar-login"
                className="ml-2 no-underline text-sky-500 duration-300 hover:text-sky-600"
              >
                Login
              </NavLink>
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
