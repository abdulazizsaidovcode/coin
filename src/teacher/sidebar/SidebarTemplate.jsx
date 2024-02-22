import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import img from "../../assits/IT-CA-logo.png"; // O'zgartiring, agar yo'l noto'g'ri bo'lsa
import MobileBar from "./mobileBar";

function SidebarTemplate({ isAdmin }) {
  const [isExpanded, setIsExpanded] = useState(window.innerWidth > 992)
  const [sidebarActiveDashboard, setSidebarActiveDashboard] = useState(false)
  const [sidebarActiveCategory, setSidebarActiveCategory] = useState(false)
  const [sidebarActiveGroup, setSidebarActiveGroup] = useState(false)
  const [sidebarActiveStudent, setSidebarActiveStudent] = useState(false)
  const [sidebarActiveTest, setSidebarActiveTest] = useState(false)
  const [sidebarActiveGift, setSidebarActiveGift] = useState(false)
  const [sidebarActiveExchange, setSidebarActiveExchange] = useState(false)
  const [sidebarActiveMessage, setSidebarActiveMessage] = useState(false)
  const location = useLocation();
  const locationPathName = location.pathname;

  useEffect(() => {
    locationPathName === '/teacher/dashboard' ? setSidebarActiveDashboard(true) : setSidebarActiveDashboard(false)
    locationPathName === '/teacher/category' ? setSidebarActiveCategory(true) : setSidebarActiveCategory(false)
    locationPathName === '/teacher/group' ? setSidebarActiveGroup(true) : setSidebarActiveGroup(false)
    locationPathName === '/teacher/student' ? setSidebarActiveStudent(true) : setSidebarActiveStudent(false)
    locationPathName === '/teacher/test' ? setSidebarActiveTest(true) : setSidebarActiveTest(false)
    locationPathName === '/teacher/gift' ? setSidebarActiveGift(true) : setSidebarActiveGift(false)
    locationPathName === '/teacher/exchange' ? setSidebarActiveExchange(true) : setSidebarActiveExchange(false)
    locationPathName === '/teacher/message' ? setSidebarActiveMessage(true) : setSidebarActiveMessage(false)
  }, [locationPathName])

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
    sideBarStylexxl: `flex items-center h-11 text-gray-600 hover:text-gray-900 hover:bg-slate-100 text-[1.1rem] duration-300 pr-5 font-semibold font-mono`,
    sideBarStylexl: 'flex items-center justify-center h-11 focus:outline-0 text-gray-600 hover:text-gray-800 border-transparent duration-200 hover:bg-slate-100 focus:bg-slate-100 pr-5',
    sidebarFlexClass: 'inline-flex justify-center items-center ml-4 text-xl',
    focusClass: 'outline-0 bg-gradient-to-r from-blue-600 to-blue-200 rounded-2xl border-0 mx-2 text-white tracking-wider font-bold focus:bg-red-600 focus:text-white focus:border-0'
  }

  return (
    <>
      <div
        className={`relative bg-white h-full border-r ${isExpanded ? "w-72" : "w-20"
          } transition-width hidden xl:inline duration-300 z-40 ease-in-out`}
      >
        <div
          className={` bg-white h-full border-r ${isExpanded ? "w-64" : "w-20"
            } transition-width duration-300 fixed z-20 ease-in-out`}
        >
          <div className="flex items-center justify-between h-16 border-b ">
            <img
              className={`transition-all duration-300 ease-in-out ${isExpanded ? "w-1/2 mx-3" : "hidden"
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
                <Link to={`/teacher/dashboard`}
                  className={`${isExpanded ? `${styles.sideBarStylexxl} ${sidebarActiveDashboard ? styles.focusClass : ''}` : styles.sideBarStylexl}`}>
                  <div className='flex justify-center items-center'>
                    <span className={styles.sidebarFlexClass}>
                      <i className="fa-solid fa-house "></i>
                    </span>
                  </div>
                  <span className={`ml-2 ${isExpanded ? 'block' : 'hidden'}`}>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to={`/teacher/category`}
                  className={`${isExpanded ? `${styles.sideBarStylexxl} ${sidebarActiveCategory ? styles.focusClass : ''}` : styles.sideBarStylexl}`}>
                  <div className='flex justify-center items-center'>
                    <span className={styles.sidebarFlexClass}>
                      <i className="fa-solid fa-keyboard"></i>
                    </span>
                  </div>
                  <span className={`ml-2 ${isExpanded ? 'block' : 'hidden'}`}>Category</span>
                </Link>
              </li>
              <li className='py-2'>
                <Link to={`/teacher/group`}
                  className={`${isExpanded ? `${styles.sideBarStylexxl} ${sidebarActiveGroup ? styles.focusClass : ''}` : styles.sideBarStylexl}`}>
                  <div className='flex justify-center items-center'>
                    <span className={styles.sidebarFlexClass}>
                      <i className="fa-solid fa-users"></i>
                    </span>
                  </div>
                  <span className={`ml-2 ${isExpanded ? 'block' : 'hidden'}`}>Group</span>
                </Link>
              </li>
              <li className='py-2'>
                <Link to={`/teacher/student`}
                  className={`${isExpanded ? `${styles.sideBarStylexxl} ${sidebarActiveStudent ? styles.focusClass : ''}` : styles.sideBarStylexl}`}>
                  <div className='flex justify-center items-center'>
                    <span className={styles.sidebarFlexClass}>
                      <i class="fa-solid fa-user"></i>
                    </span>
                  </div>
                  <span className={`ml-2 ${isExpanded ? 'block' : 'hidden'}`}>Student</span>
                </Link>
              </li>
              <li className='py-2'>
                <Link to={`/teacher/test`}
                  className={`${isExpanded ? `${styles.sideBarStylexxl} ${sidebarActiveTest ? styles.focusClass : ''}` : styles.sideBarStylexl}`}>
                  <div className='flex justify-center items-center'>
                    <span className={styles.sidebarFlexClass}>
                      <svg xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M13.325 3.05L8.667 20.432l1.932.518l4.658-17.382zM7.612 18.36l1.36-1.448l-.001-.019l-5.094-4.78l4.79-5.105l-1.458-1.369l-6.16 6.563zm8.776 0l-1.36-1.448l.001-.019l5.094-4.78l-4.79-5.105l1.458-1.369l6.16 6.563z" />
                      </svg>
                    </span>
                  </div>
                  <span className={`ml-2 ${isExpanded ? 'block' : 'hidden'}`}>Test</span>
                </Link>
              </li>
              <li className='py-2'>
                <Link to={`/teacher/gift`}
                  className={`${isExpanded ? `${styles.sideBarStylexxl} ${sidebarActiveGift ? styles.focusClass : ''}` : styles.sideBarStylexl}`}>
                  <div className='flex justify-center items-center'>
                    <span className={styles.sidebarFlexClass}>
                      <i className="fa-solid fa-gift"></i>
                    </span>
                  </div>
                  <span className={`ml-2 ${isExpanded ? 'block' : 'hidden'}`}>Gift</span>
                </Link>
              </li>
              <li className='py-2'>
                <Link to={`/teacher/exchange`}
                  className={`${isExpanded ? `${styles.sideBarStylexxl} ${sidebarActiveExchange ? styles.focusClass : ''}` : styles.sideBarStylexl}`}>
                  <span className={styles.sidebarFlexClass}>
                    <i className="fa-solid fa-calendar-days"></i>
                  </span>
                  <span className={`ml-2 ${isExpanded ? 'block' : 'hidden'}`}>Exchange</span>
                </Link>
              </li>
              <li className='py-2'>
                <Link to={`/teacher/message`}
                  className={`${isExpanded ? `${styles.sideBarStylexxl} ${sidebarActiveMessage ? styles.focusClass : ''}` : styles.sideBarStylexl}`}>
                  <span className={styles.sidebarFlexClass}>
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  <span className={`ml-2 ${isExpanded ? 'block' : 'hidden'}`}>Message</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <MobileBar isAdmin={isAdmin} />
    </>
  );
}

export default SidebarTemplate;
