import React from "react";
import Logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <>
      <div className="fixed bottom-0 w-full">
        <footer className="bg-white p-4 justify-center">
          <div className="flex justify-between container">
            <div className="flex gap-8">
              <div>
                <span className="text-xl font-bold">Company</span>
                <ul className="p-0 mt-2">
                  <li>
                    <a
                      href=""
                      className="no-underline text-dark-acc hover:text-piction"
                    >
                      Terms & Condition
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="no-underline text-dark-acc hover:text-piction"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="no-underline text-dark-acc hover:text-piction"
                    >
                      Our Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="no-underline text-dark-acc hover:text-piction"
                    >
                      About Us
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <span className="text-xl font-bold">Customer Care</span>
                <ul className="p-0 mt-2">
                  <li>
                    <a
                      href=""
                      className="no-underline text-dark-acc hover:text-piction"
                    >
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="no-underline text-dark-acc hover:text-piction"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col text-end">
              <img src={Logo} alt="SastoBazar" className="h-12 w-full pr-2" />
              <span className="text-dark-acc mr-3">Kathmandu, Nepal</span>
            </div>
          </div>
          <hr />
          <div className="text-center">
            <span>&copy; SastoBazar, All rights reserved, 2024.</span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
