import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../components/sidebar/mobile.css"

const Dropdown = ({ options, isAdmin, isOpen, setIsOpen }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </span>
      </div>

      {/* {isOpen && ( */}
        <div className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg ${isOpen ? " dropAni" : "dropAni2"} bg-white ring-1 ring-black ring-opacity-5 z-50`}>
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <ul className="">
              <li className="py-1"
              onClick={() => setIsOpen(false)}>
                <Link
                  to={`/${isAdmin ? "admin" : "teacher"}/student`}
                  className={`${"flex items-center ms-16 h-11 focus:outline-none text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-5"}`}
                >
                  <div className="flex justify-center items-center me-2">
                    <span>
                      <i className="fa-solid fa-user"></i>
                    </span>
                  </div>
                  <span>Student</span>
                </Link>
              </li>
              <li className="py-1" 
              onClick={() => setIsOpen(false)}>
                <Link
                  to={`/${isAdmin ? "admin" : "teacher"}/teacher`}
                  className={`${"flex items-center ms-16 h-11 focus:outline-none text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-5"}`}
                >
                  <div className="flex justify-center items-center me-2">
                    <span>
                      <i className="fa-solid fa-user-tie"></i>
                    </span>
                  </div>
                  <span>Teacher</span>
                </Link>
              </li>
              <li className="py-1" 
              onClick={() => setIsOpen(false)}>
                <Link
                  to={`/${isAdmin ? "admin" : "teacher"}/gift`}
                  className={`${"flex items-center ms-16 h-11 focus:outline-none text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-5"}`}
                >
                  <div className="flex justify-center items-center me-2">
                    <span>
                      <i className="fa-solid fa-gift"></i>
                    </span>
                  </div>
                  <span>Gift</span>
                </Link>
              </li>
              <li className="py-1" 
              onClick={() => setIsOpen(false)}>
                <Link
                  to={`/${isAdmin ? "admin" : "teacher"}/exchange`}
                  className={`${"flex items-center ms-16 h-11 focus:outline-none text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-5"}`}
                >
                  <div className="flex justify-center items-center me-2">
                    <span>
                      <i className="fa-solid fa-calendar-days"></i>
                    </span>
                  </div>

                  <span>Exchange</span>
                </Link>
              </li>
              <li className="py-1" 
              onClick={() => setIsOpen(false)}>
                <Link
                  to={`/${isAdmin ? "admin" : "teacher"}/message`}
                  className={`${"flex items-center ms-16 h-11 focus:outline-none text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-5"}`}
                >
                  <div className="flex justify-center items-center me-2">
                    <span>
                      <i className="fa-solid fa-envelope"></i>
                    </span>
                  </div>

                  <span>Message</span>
                </Link>
              </li>
              <li className="py-1"
              onClick={() => setIsOpen(false)}>
            <Link
              to={`/${isAdmin ? "admin" : "teacher"}/contact`}
              className={`${"flex items-center ms-16 h-11 focus:outline-none text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-5"}`}
            >
              <div className="flex justify-center items-center me-2">
                    <span>
                      <i className="fa-solid fa-address-card"></i>
                    </span>
                  </div>
              <span className={`ml-2`}>Contact</span>
            </Link>
          </li>
            </ul>
          </div>
        </div>
      {/* )} */}
    </div>
  );
};

export default Dropdown;
