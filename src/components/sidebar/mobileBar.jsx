import React from "react";
import { Link } from "react-router-dom";

function MobileBar({ isAdmin }) {

  const dropdownButton = document.getElementById('dropdown-button');
        const dropdownMenu = document.getElementById('dropdown-menu');
        let isDropdownOpen = false; // Set to true to open the dropdown by default, false to close it by default

        // Function to toggle the dropdown
        function toggleDropdown() {
            isDropdownOpen = !isDropdownOpen;
            if (isDropdownOpen) {
                dropdownMenu.classList.remove('hidden');
            } else {
                dropdownMenu.classList.add('hidden');
            }
        }

        // Initialize the dropdown state
        toggleDropdown();

        // Toggle the dropdown when the button is clicked
        dropdownButton.addEventListener('click', toggleDropdown);

        // Close the dropdown when clicking outside of it
        window.addEventListener('click', (event) => {
            if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
                dropdownMenu.classList.add('hidden');
                isDropdownOpen = false;
            }
        });
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
            <div class="bg-gray-100 min-h-screen flex items-center justify-center">
        <div class="relative inline-block text-left">
            <button id="dropdown-button" class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500">
                Theme
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </button>
            <div id="dropdown-menu" class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div class="py-2 p-2" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-button">
                    <a class="flex block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer" role="menuitem">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="light" width="18px" class="mr-2"><path d="M19 9.199h-.98c-.553 0-1 .359-1 .801 0 .441.447.799 1 .799H19c.552 0 1-.357 1-.799 0-.441-.449-.801-1-.801zM10 4.5A5.483 5.483 0 0 0 4.5 10c0 3.051 2.449 5.5 5.5 5.5 3.05 0 5.5-2.449 5.5-5.5S13.049 4.5 10 4.5zm0 9.5c-2.211 0-4-1.791-4-4 0-2.211 1.789-4 4-4a4 4 0 0 1 0 8zm-7-4c0-.441-.449-.801-1-.801H1c-.553 0-1 .359-1 .801 0 .441.447.799 1 .799h1c.551 0 1-.358 1-.799zm7-7c.441 0 .799-.447.799-1V1c0-.553-.358-1-.799-1-.442 0-.801.447-.801 1v1c0 .553.359 1 .801 1zm0 14c-.442 0-.801.447-.801 1v1c0 .553.359 1 .801 1 .441 0 .799-.447.799-1v-1c0-.553-.358-1-.799-1zm7.365-13.234c.391-.391.454-.961.142-1.273s-.883-.248-1.272.143l-.7.699c-.391.391-.454.961-.142 1.273s.883.248 1.273-.143l.699-.699zM3.334 15.533l-.7.701c-.391.391-.454.959-.142 1.271s.883.25 1.272-.141l.7-.699c.391-.391.454-.961.142-1.274s-.883-.247-1.272.142zm.431-12.898c-.39-.391-.961-.455-1.273-.143s-.248.883.141 1.274l.7.699c.391.391.96.455 1.272.143s.249-.883-.141-1.273l-.699-.7zm11.769 14.031l.7.699c.391.391.96.453 1.272.143.312-.312.249-.883-.142-1.273l-.699-.699c-.391-.391-.961-.455-1.274-.143s-.248.882.143 1.273z"></path></svg> Light
                      </a>
                    <a class="flex block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer" role="menuitem">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="moon" width="18px" class="mr-2"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"></path></svg> Dark
                      </a>
                    <a class="flex block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer" role="menuitem">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="mr-2" viewBox="0 0 32 32" id="desktop"><path d="M30 2H2a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h9.998c-.004 1.446-.062 3.324-.61 4h-.404A.992.992 0 0 0 10 29c0 .552.44 1 .984 1h10.03A.992.992 0 0 0 22 29c0-.552-.44-1-.984-1h-.404c-.55-.676-.606-2.554-.61-4H30a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM14 24l-.002.004L14 24zm4.002.004L18 24h.002v.004zM30 20H2V4h28v16z"></path></svg> System
                      </a>
                </div>
            </div>
        </div>
    </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MobileBar;
