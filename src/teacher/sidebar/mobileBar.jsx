import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function MobileBar() {
  const [sidebarActiveDashboard, setSidebarActiveDashboard] = useState(false)
  const [sidebarActiveCategory, setSidebarActiveCategory] = useState(false)
  const [sidebarActiveGroup, setSidebarActiveGroup] = useState(false)
  const [sidebarActiveStudent, setSidebarActiveStudent] = useState(false)
  const [sidebarActiveTest, setSidebarActiveTest] = useState(false)
  const [sidebarActiveGift, setSidebarActiveGift] = useState(false)
  const [sidebarActiveExchange, setSidebarActiveExchange] = useState(false)
  const [sidebarActiveMessage, setSidebarActiveMessage] = useState(false)
  const [isMenu, setIsMenu] = useState(false)
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

  const openMenu = () => setIsMenu(!isMenu)

  const styles = {
    navLink: `flex items-center justify-center h-11 focus:outline-0 duration-200 pr-5`
  }

  return (
    <div className="overflow-y-auto absolute items-center z-50 justify-center">
      <ul className="flex xl:hidden flex-row items-center fixed bg-white bottom-0 w-full justify-center">
        <li className="py-2 px-2 hidden sm:block">
          <Link
            to={`/teacher/dashboard`}
            className={`${styles.navLink} ${sidebarActiveDashboard ? 'text-indigo-700 bg-slate-100 border-l-4 border-indigo-500' : 'text-gray-600'}`}
          >
            <div className="flex justify-center items-center">
              <span className="inline-flex justify-center items-center ml-4 text-xl">
                <i className="fa-solid fa-house "></i>
              </span>
            </div>
            <span className={`ml-2 hidden`}>Dashboard</span>
          </Link>
        </li>
        <li className="py-2 px-2 hidden sm:block">
          <Link
            to={`/teacher/category`}
            className={`${styles.navLink} ${sidebarActiveCategory ? 'text-indigo-700 bg-slate-100 border-l-4 border-indigo-500' : 'text-gray-600'}`}
          >
            <div className="flex justify-center items-center">
              <span className="inline-flex justify-center items-center ml-4 text-xl">
                <i className="fa-solid fa-keyboard"></i>
              </span>
            </div>
            <span className={`ml-2 hidden`}>Category</span>
          </Link>
        </li>
        <li className="py-2 px-2 hidden sm:block">
          <Link
            to={`/teacher/group`}
            className={`${styles.navLink} ${sidebarActiveGroup ? 'text-indigo-700 bg-slate-100 border-l-4 border-indigo-500' : 'text-gray-600'}`}
          >
            <div className="flex justify-center items-center">
              <span className="inline-flex justify-center items-center ml-4 text-xl">
                <i className="fa-solid fa-users"></i>
              </span>
            </div>
            <span className={`ml-2 hidden`}>Group</span>
          </Link>
        </li>
        <li className="py-2 px-2 hidden sm:block">
          <Link
            to={`/teacher/student`}
            className={`${styles.navLink} ${sidebarActiveStudent ? 'text-indigo-700 bg-slate-100 border-l-4 border-indigo-500' : 'text-gray-600'}`}
          >
            <div className="flex justify-center items-center">
              <span className="inline-flex justify-center items-center ml-4 text-xl">
                <i class="fa-solid fa-user"></i>
              </span>
            </div>
            <span className={`ml-2 hidden`}>Student</span>
          </Link>
        </li>
        <li className="py-2 px-2 hidden sm:block">
          <Link
            to={`/teacher/test`}
            className={`${styles.navLink} ${sidebarActiveTest ? 'text-indigo-700 bg-slate-100 border-l-4 border-indigo-500' : 'text-gray-600'}`}
          >
            <span className="inline-flex justify-center items-center ml-4 text-xl">
              <i class="fa-solid fa-code"></i>
            </span>
            <span className={`ml-2 hidden`}>Test</span>
          </Link>
        </li>
        <li className="py-2 px-2 hidden sm:block">
          <Link
            to={`/teacher/gift`}
            className={`${styles.navLink} ${sidebarActiveGift ? 'text-indigo-700 bg-slate-100 border-l-4 border-indigo-500' : 'text-gray-600'}`}
          >
            <div className="flex justify-center items-center">
              <span className="flex justify-center items-center ml-4 text-xl ">
                <i className="fa-solid fa-gift"></i>
              </span>
            </div>
            <span className={`ml-2 hidden`}>Gift</span>
          </Link>
        </li>
        <li className="py-2 px-2 hidden sm:block">
          <Link
            to={`/teacher/exchange`}
            className={`${styles.navLink} ${sidebarActiveExchange ? 'text-indigo-700 bg-slate-100 border-l-4 border-indigo-500' : 'text-gray-600'}`}
          >
            <span className="inline-flex justify-center items-center ml-4 text-xl">
              <i className="fa-solid fa-calendar-days"></i>
            </span>
            <span className={`ml-2 hidden`}>Exchange</span>
          </Link>
        </li>
        <li className="py-2 px-2 hidden sm:block">
          <Link
            to={`/teacher/message`}
            className={`${styles.navLink} ${sidebarActiveMessage ? 'text-indigo-700 bg-slate-100 border-l-4 border-indigo-500' : 'text-gray-600'}`}
          >
            <span className="inline-flex justify-center items-center ml-4 text-xl">
              <i className="fa-solid fa-envelope"></i>
            </span>
            <span className={`ml-2 hidden`}>Message</span>
          </Link>
        </li>

        <div className="sm:hidden flex justify-between w-full px-5 py-4">
          <div className="text-slate-600">
            <Link to='/teacher/' target="_blank"><i class="fa-brands fa-instagram fa-xl mr-3"></i></Link>
            <Link to='/teacher/' target="_blank"><i class="fa-brands fa-telegram fa-xl mr-3"></i></Link>
            <Link to='/teacher/' target="_blank"><i class="fa-brands fa-facebook fa-xl"></i></Link>
          </div>
          <div>
            <button onClick={openMenu} className="text-slate-700">
              {isMenu ? <i class="fa-solid fa-xmark fa-xl"></i> : <i class="fa-solid fa-bars fa-xl"></i>}
            </button>
          </div>
        </div>
        {isMenu && (
          <div className="mobile-animation-nav w-full flex justify-center items-end fixed bottom-[3.45rem] bg-gradient-to-t from-white to-stone-100 px-8 py-4 z-40">
            <ul className="duration-300 text-center">
              <li className="w-full">
                <Link
                  onClick={openMenu}
                  to={`/teacher/dashboard`}
                  className={`${sidebarActiveDashboard ? 'text-indigo-700 border-b-2 border-b-indigo-500 pb-1' : 'text-slate-600'} text-lg`}
                >
                  <i className="fa-solid fa-house mr-2"></i>
                  <span className="font-semibold tracking-wide">Dashboard</span>
                </Link>
              </li>
              <li className="w-full mt-3">
                <Link
                  onClick={openMenu}
                  to={`/teacher/category`}
                  className={`${sidebarActiveCategory ? 'text-indigo-700 border-b-2 border-b-indigo-500 pb-1' : 'text-slate-600'} text-lg`}
                >
                  <i className="fa-solid fa-keyboard mr-2"></i>
                  <span className="font-semibold tracking-wide">Category</span>
                </Link>
              </li>
              <li className="w-full mt-3">
                <Link
                  onClick={openMenu}
                  to={`/teacher/group`}
                  className={`${sidebarActiveGroup ? 'text-indigo-700 border-b-2 border-b-indigo-500 pb-1' : 'text-slate-600'} text-lg`}
                >
                  <i className="fa-solid fa-users mr-2"></i>
                  <span className="font-semibold tracking-wide">Group</span>
                </Link>
              </li>
              <li className="w-full mt-3">
                <Link
                  onClick={openMenu}
                  to={`/teacher/student`}
                  className={`${sidebarActiveStudent ? 'text-indigo-700 border-b-2 border-b-indigo-500 pb-1' : 'text-slate-600'} text-lg`}
                >
                  <i class="fa-solid fa-user mr-2"></i>
                  <span className="font-semibold tracking-wide">Student</span>
                </Link>
              </li>
              <li className="w-full mt-3">
                <Link
                  onClick={openMenu}
                  to={`/teacher/test`}
                  className={`${sidebarActiveTest ? 'text-indigo-700 border-b-2 border-b-indigo-500 pb-1' : 'text-slate-600'} text-lg`}
                >
                  <i class="fa-solid fa-code mr-2"></i>
                  <span className="font-semibold tracking-wide">Test</span>
                </Link>
              </li>
              <li className="w-full mt-3">
                <Link
                  onClick={openMenu}
                  to={`/teacher/gift`}
                  className={`${sidebarActiveGift ? 'text-indigo-700 border-b-2 border-b-indigo-500 pb-1' : 'text-slate-600'} text-lg`}
                >
                  <i className="fa-solid fa-gift mr-2"></i>
                  <span className="font-semibold tracking-wide">Gift</span>
                </Link>
              </li>
              <li className="w-full mt-3">
                <Link
                  onClick={openMenu}
                  to={`/teacher/exchange`}
                  className={`${sidebarActiveExchange ? 'text-indigo-700 border-b-2 border-b-indigo-500 pb-1' : 'text-slate-600'} text-lg`}
                >
                  <i className="fa-solid fa-calendar-days mr-2"></i>
                  <span className="font-semibold tracking-wide">Exchange</span>
                </Link>
              </li>
              <li className="w-full mt-3">
                <Link
                  onClick={openMenu}
                  to={`/teacher/message`}
                  className={`${sidebarActiveMessage ? 'text-indigo-700 border-b-2 border-b-indigo-500 pb-1' : 'text-slate-600'} text-lg`}
                >
                  <i className="fa-solid fa-envelope mr-2"></i>
                  <span className="font-semibold tracking-wide">Message</span>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </ul>
    </div>
  );
}

export default MobileBar;
