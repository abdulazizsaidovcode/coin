import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../../admin/adminGroup/dropdown";

function MobileBar({ isAdmin }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className=" overflow-y-auto absolute items-center z-20 justify-center">
      <div className="relative">
        <ul className="flex xl:hidden flex-row items-center fixed bg-white bottom-0 w-full justify-center">
          {/* Dashboard Link */}
          <li className="py-2">
            <Link
              to={`/${isAdmin ? "admin" : "teacher"}/dashboard`}
              className={`${"flex items-center justify-center h-11 focus:outline-none text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-5"}`}
            >
              <div className="flex justify-center items-center">
                <span className="inline-flex justify-center items-center ml-4 text-xl">
                  <i className="fa-solid fa-house "></i>
                </span>
              </div>
              <span className={`ml-2 hidden`}>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to={`/${isAdmin ? "admin" : "teacher"}/category`}
              className={`${"flex items-center justify-center h-11 focus:outline-none text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-5"}`}
            >
              <div className="flex justify-center items-center">
                <span className="inline-flex justify-center items-center ml-4 text-xl">
                  <i className="fa-solid fa-keyboard"></i>
                </span>
              </div>
              <span className={`ml-2 hidden`}>Category</span>
            </Link>
          </li>
          <li className="py-2">
            <Link
              to={`/${isAdmin ? "admin" : "teacher"}/group`}
              className={`${"flex items-center justify-center h-11 focus:outline-none text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-5"}`}
            >
              <div className="flex justify-center items-center">
                <span className="inline-flex justify-center items-center ml-4 text-xl">
                  <i className="fa-solid fa-users"></i>
                </span>
              </div>
              <span className={`ml-2 hidden`}>Group</span>
            </Link>
          </li>
          <li className="py-2 hidden sm:block">
            <Link
              to={`/${isAdmin ? "admin" : "teacher"}/student`}
              className={`${"flex items-center justify-center h-11 focus:outline-none text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-5"}`}
            >
              <div className="flex justify-center items-center">
                <span className="inline-flex justify-center items-center ml-4 text-xl">
                  <i class="fa-solid fa-user"></i>
                </span>
              </div>
              <span className={`ml-2 hidden`}>Student</span>
            </Link>
          </li>
          <li className="py-2 hidden sm:block">
            <Link
              to={`/${isAdmin ? "admin" : "teacher"}/gift`}
              className={`${"flex items-center justify-center h-11 focus:outline-none text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-5"}`}
            >
              <div className="flex justify-center items-center">
                <span className="flex justify-center items-center ml-4 text-xl ">
                  <i className="fa-solid fa-gift"></i>
                </span>
              </div>
              <span className={`ml-2 hidden`}>gift</span>
            </Link>
          </li>
          <li className="py-2 hidden sm:block">
            <Link
              to={`/${isAdmin ? "admin" : "teacher"}/exchange`}
              className={`${"flex items-center justify-center h-11 focus:outline-none text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-5"}`}
            >
              <span className="inline-flex justify-center items-center ml-4 text-xl">
                <i className="fa-solid fa-calendar-days"></i>
              </span>
              <span className={`ml-2 hidden`}>Exchange</span>
            </Link>
          </li>
          <li className="py-2 hidden sm:block">
            <Link
              to={`/${isAdmin ? "admin" : "teacher"}/message`}
              className={`${"flex items-center justify-center h-11 focus:outline-none text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-5"}`}
            >
              <span className="inline-flex justify-center items-center ml-4 text-xl">
                <i className="fa-solid fa-envelope"></i>
              </span>
              <span className={`ml-2 hidden`}>Message</span>
            </Link>
          </li>
          <li className="py-2 block sm:hidden">
            <div className="">
              <Dropdown isAdmin={isAdmin} />
            </div>
          </li>
        </ul>
        <div
          className={`${
            isOpen ? "absolute duration-500" : "absolute duration-500"
          } 
              right-0 mt-2 py-2 w-80 bg-white rounded-xl shadow-xl z-20`}
        >
          {/* Menu items */}
          <div className="h-40 bg-profileColor rounded-t-xl flex justify-center items-center">
            {/* <img className="w-20 h-20 rounded-full" src={avatar} alt="Gift" /> */}
            <span
              className="absolute right-3 top-3 hover:text-gray-200 duration-200 text-white cursor-pointer "
              onClick={toggleMenu}
            >
              <i className="fa-solid fa-xmark"></i>
            </span>
          </div>
          <div className="px-6 py-2">dubicrreie</div>
        </div>
      </div>
    </div>
  );
}

export default MobileBar;
