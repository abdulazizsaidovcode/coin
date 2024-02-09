import React from "react";
import { Link } from "react-router-dom";

function MobileBar({ isAdmin }) {

  
  return (
    <div className=" overflow-y-auto absolute items-center z-20 justify-center">
      <ul className="flex xl:hidden flex-row items-center fixed bg-white bottom-0 w-full justify-center">
        {/* Dashboard Link */}
         
                        {/* Dashboard Link */}
                        <li className='py-2'>
                            <Link to="/student/dashboard" className={`${'flex items-center justify-center h-11 focus:outline-none text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-5'}`}>
                                <div className='flex justify-center items-center'>
                                    <span className="inline-flex justify-center items-center ml-4 text-xl">
                                        <i class="fa-solid fa-house "></i>
                                    </span>
                                </div>
                                <span className={`ml-2 ${'hidden'}`}>Dashboard</span>
                            </Link>
                        </li>
                        <li className='py-2'>
                            <Link to="/student/test" className={`${'flex items-center justify-center h-11 focus:outline-none text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-5'}`}>
                                <div className='flex justify-center items-center'>
                                    <span className="inline-flex justify-center items-center ml-4 text-xl">
                                        <i class="fa-solid fa-keyboard"></i>
                                    </span>
                                </div>
                                <span className={`ml-2 ${'hidden'}`}>Test</span>
                            </Link>
                        </li>
                        <li className='py-2'>
                            <Link to="/student/group"className={`${'flex items-center justify-center h-11 focus:outline-none text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-5'}`}>
                                <div className='flex justify-center items-center'>
                                    <span className="inline-flex justify-center items-center ml-4 text-xl">
                                        <i class="fa-solid fa-users"></i>
                                    </span>
                                </div>
                                <span className={`ml-2 ${'hidden'}`}>Group</span>
                            </Link>
                        </li>
                        <li className='py-2'>
                            <Link to="/student/gift"  className={`${'flex items-center justify-center h-11 focus:outline-none text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-5'}`}>
                                <div className='flex justify-center items-center'>
                                    <span className="flex justify-center items-center ml-4 text-xl ">
                                        <i class="fa-solid fa-gift"></i>
                                    </span>
                                </div>
                                <span className={`ml-2 ${'hidden'}`}>gift</span>
                            </Link>
                        </li>
                        <li className='py-2'>
                            <Link to="/student/exchange" className={`${'flex items-center justify-center h-11 focus:outline-none text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-5'}`}>
                                <span className="inline-flex justify-center items-center ml-4 text-xl">
                                    <i class="fa-solid fa-calendar-days"></i>
                                </span>
                                <span className={`ml-2 ${'hidden'}`}>Exchange</span>
                            </Link>
                        </li>
                        <li className='py-2'>
                            <Link to="/student/message" className={`${'flex items-center justify-center h-11 focus:outline-none text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-5'}`}>
                                <span className="inline-flex justify-center items-center ml-4 text-xl">
                                    <i class="fa-solid fa-envelope"></i>
                                </span>
                                <span className={`ml-2 ${'hidden'}`}>Message</span>
                            </Link>
                        </li>
      </ul>
    </div>
  );
}

export default MobileBar;
