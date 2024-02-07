import React from "react";
import { Link } from "react-router-dom";

function MobileBar({ isAdmin }) {

  
  return (
    <div className=" overflow-y-auto absolute items-center z-20 justify-center">
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
          <Link
            className={`${"flex items-center justify-center h-11 focus:outline-none text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-5"}`}
          >
            {/* <span className="inline-flex justify-center items-center ml-4 text-xl">
            <i class="fa-solid fa-bars"></i>
            </span>
            <span className={`ml-2 hidden`}>Message</span> */}
           
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MobileBar;
