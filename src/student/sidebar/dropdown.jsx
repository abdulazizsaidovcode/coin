import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./mobile.css"

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
            <i class="fa-solid fa-bars"></i>
          </button>
        </span>
      </div>

      {/* {isOpen && ( */}
        <div className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg ${isOpen ? " dropAni1" : "dropAni3"} bg-white ring-1 ring-black ring-opacity-5 z-50`}>
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <ul>
              <li className="py-2" 
              onClick={() => setIsOpen(false)}>
                <Link
                  to={`/student/gift`}
                  className={`${"flex items-center justify-center h-11 focus:outline-none text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-5"}`}
                >
                  <div className="flex justify-center items-center me-2">
                    <span>
                      <i className="fa-solid fa-gift"></i>
                    </span>
                  </div>
                  <span>Gift</span>
                </Link>
              </li>
              <li className="py-2" 
              onClick={() => setIsOpen(false)}>
                <Link
                  to={`/student/exchange`}
                  className={`${"flex items-center justify-center h-11 focus:outline-none text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-5"}`}
                >
                  <div className="flex justify-center items-center me-2">
                    <span>
                      <i className="fa-solid fa-calendar-days"></i>
                    </span>
                  </div>

                  <span>Exchange</span>
                </Link>
              </li>
              <li className="py-2" 
              onClick={() => setIsOpen(false)}>
                <Link
                  to={`/student/message`}
                  className={`${"flex items-center justify-center h-11 focus:outline-none text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-5"}`}
                >
                  <div className="flex justify-center items-center me-2">
                    <span>
                      <i className="fa-solid fa-envelope"></i>
                    </span>
                  </div>

                  <span>Message</span>
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
