import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img from "../../assits/IT-CA-logo.png"; // O'zgartiring, agar yo'l noto'g'ri bo'lsa
import MobileBar from "./mobileBar";

function Studentsitebar({ isAdmin }) {
  const [isExpanded, setIsExpanded] = useState(window.innerWidth > 992);

  // Oyna o'lchamini kuzatish
  useEffect(() => {
    const handleResize = () => {
      setIsExpanded(window.innerWidth > 992);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const styles = {
    sideBarStylexxl: 'flex items-center h-11 focus:outline-0 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 hover:bg-slate-100 focus:bg-red-600 focus:rounded-2xl focus:border-0 focus:mx-2 focus:text-white focus:tracking-wider duration-200 pr-5',
    sideBarStylexl: 'flex items-center justify-center h-11 focus:outline-0 text-gray-600 hover:text-gray-800 border-l-4 border-transparent duration-200 hover:bg-slate-100 hover:border-indigo-500 focus:border-l-4 focus:border-indigo-500 focus:bg-slate-100 pr-5',
    sidebarFlexClass: 'inline-flex justify-center items-center ml-4 text-xl'
  }


  return (
    <>
      <div
        className={`relative bg-white h-full border-r ${
          isExpanded ? "w-72" : "w-20"
        } transition-width hidden xl:inline duration-300 z-40 ease-in-out`}
      >
        <div
          className={` bg-white h-full border-r ${
            isExpanded ? "w-64" : "w-20"
          } transition-width duration-300 fixed z-20 ease-in-out`}
        >
          <div className="flex items-center justify-between h-16 border-b ">
            <img
              className={`transition-all duration-300 ease-in-out ${
                isExpanded ? "w-1/2 mx-3" : "hidden"
              }`}
              src={img}
              alt="Logo"
            />
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 rounded-full focus:outline-none focus:bg-gray-100 hover:bg-gray-100 mr-2 ml-5"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isExpanded ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 8h16M4 16h16"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className="flex-grow overflow-y-auto">
          <ul className="flex flex-col py-4">
                        <li className="px-5">
                            <div className="flex flex-row items-center h-8">
                                <div className="text-sm font-light tracking-wide text-gray-500">Menu</div>
                            </div>
                        </li>
                        {/* Dashboard Link */}
                        <li className='py-2'>
                        <Link to={'/student/dashboard'} 
                            className={`${isExpanded ? styles.sideBarStylexxl : styles.sideBarStylexl}`}>
              
                                <div className='flex justify-center items-center'>
                                    <span className="inline-flex justify-center items-center ml-4 text-xl">
                                        <i class="fa-solid fa-house "></i>
                                    </span>
                                </div>
                                <span className={`ml-2 ${isExpanded ? 'block' : 'hidden'}`}>Dashboard</span>
                            </Link>
                        </li>
                        <li className='py-2'>
                        <Link to={'/student/test'} 
                            className={`${isExpanded ? styles.sideBarStylexxl : styles.sideBarStylexl}`}>
                                <div className='flex justify-center items-center'>
                                    <span className="inline-flex justify-center items-center ml-4 text-xl">
                                        <i class="fa-solid fa-keyboard"></i>
                                    </span>
                                </div>
                                <span className={`ml-2 ${isExpanded ? 'block' : 'hidden'}`}>Test</span>
                            </Link>
                        </li>
                        <li className='py-2'>
                        <Link to={'/student/group'} 
                            className={`${isExpanded ? styles.sideBarStylexxl : styles.sideBarStylexl}`}>
                                <div className='flex justify-center items-center'>
                                    <span className="inline-flex justify-center items-center ml-4 text-xl">
                                        <i class="fa-solid fa-users"></i>
                                    </span>
                                </div>
                                <span className={`ml-2 ${isExpanded ? 'block' : 'hidden'}`}>Group</span>
                            </Link>
                        </li>
                        <li className='py-2'>
                        <Link to={'/student/gift'} 
                            className={`${isExpanded ? styles.sideBarStylexxl : styles.sideBarStylexl}`}>
                                <div className='flex justify-center items-center'>
                                    <span className="flex justify-center items-center ml-4 text-xl ">
                                        <i class="fa-solid fa-gift"></i>
                                    </span>
                                </div>
                                <span className={`ml-2 ${isExpanded ? 'block' : 'hidden'}`}>gift</span>
                            </Link>
                        </li>
                        <li className='py-2'>
                        <Link to={'/student/exchange'} 
                            className={`${isExpanded ? styles.sideBarStylexxl : styles.sideBarStylexl}`}>
                                <span className="inline-flex justify-center items-center ml-4 text-xl">
                                    <i class="fa-solid fa-calendar-days"></i>
                                </span>
                                <span className={`ml-2 ${isExpanded ? 'block' : 'hidden'}`}>Exchange</span>
                            </Link>
                        </li>
                        <li className='py-2'>
                        <Link to={'/student/message'} 
                            className={`${isExpanded ? styles.sideBarStylexxl : styles.sideBarStylexl}`}>
                                <span className="inline-flex justify-center items-center ml-4 text-xl">
                                    <i class="fa-solid fa-envelope"></i>
                                </span>
                                <span className={`ml-2 ${isExpanded ? 'block' : 'hidden'}`}>Message</span>
                            </Link>
                        </li>
                    </ul>
          </div>
        </div>
      </div>
      <MobileBar isAdmin={isAdmin}/>
      {/* </div> */}
    </>
  );
}

export default Studentsitebar;
