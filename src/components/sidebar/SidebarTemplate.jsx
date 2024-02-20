import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img from "../../assits/IT-CA-logo.png"; // O'zgartiring, agar yo'l noto'g'ri bo'lsa
import MobileBar from "./mobileBar";
import { byId } from "../../components/api/api";

function SidebarTemplate({ isAdmin }) {
  const [isExpanded, setIsExpanded] = useState(window.innerWidth > 992);
  const [sidebarActiveDashboard, setSidebarActiveDashboard] = useState(true);
  const [sidebarActiveCategory, setSidebarActiveCategory] = useState(false);
  const [sidebarActiveGroup, setSidebarActiveGroup] = useState(false);
  const [sidebarActiveStudent, setSidebarActiveStudent] = useState(false);
  const [sidebarActiveTest, setSidebarActiveTest] = useState(false);
  const [sidebarActiveGift, setSidebarActiveGift] = useState(false);
  const [sidebarActiveExchange, setSidebarActiveExchange] = useState(false);
  const [sidebarActiveMessage, setSidebarActiveMessage] = useState(false);
  const [sidebarActiveContact, setSidebarActiveContact] = useState(false);

  const activeHandler = (e) => {
    e.target.textContent === "Dashboard"
      ? setSidebarActiveDashboard(true)
      : setSidebarActiveDashboard(false);
    e.target.textContent === "Category"
      ? setSidebarActiveCategory(true)
      : setSidebarActiveCategory(false);
    e.target.textContent === "Group"
      ? setSidebarActiveGroup(true)
      : setSidebarActiveGroup(false);
    e.target.textContent === "Student"
      ? setSidebarActiveStudent(true)
      : setSidebarActiveStudent(false);
    e.target.textContent === "Teacher"
      ? setSidebarActiveTest(true)
      : setSidebarActiveTest(false);
    e.target.textContent === "Gift"
      ? setSidebarActiveGift(true)
      : setSidebarActiveGift(false);
    e.target.textContent === "Exchange"
      ? setSidebarActiveExchange(true)
      : setSidebarActiveExchange(false);
    e.target.textContent === "Message"
      ? setSidebarActiveMessage(true)
      : setSidebarActiveMessage(false);
    e.target.textContent === "Contact"
      ? setSidebarActiveContact(true)
      : setSidebarActiveContact(false);
  };

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
    sideBarStylexxl: `flex items-center h-11 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 hover:bg-slate-100 duration-300 pr-5 font-semibold font-mono`,
    sideBarStylexl:
      "flex items-center justify-center h-11 focus:outline-0 text-gray-600 hover:text-gray-800 border-l-4 border-transparent duration-200 hover:bg-slate-100 hover:border-indigo-500 focus:border-l-4 focus:border-indigo-500 focus:bg-slate-100 pr-5",
    sidebarFlexClass: "inline-flex justify-center items-center ml-4 text-xl",
    focusClass:
      "outline-0 bg-indigo-500 rounded-2xl border-0 mx-2 text-white tracking-wider font-bold focus:bg-indigo-500 focus:text-white focus:border-0",
  };
  // 6366F1
  return (
    <>
      <div
        className={`relative bg-white h-full border-r ${
          isExpanded ? "w-[18rem]" : "w-20"
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
                  <div className="text-sm font-light tracking-wide text-gray-500">
                    Menu
                  </div>
                </div>
              </li>
              {/* Dashboard Link */}
              <li className="py-2">
                <Link
                  to={`/admin/dashboard`}
                  onClick={activeHandler}
                  className={`${
                    isExpanded
                      ? `${styles.sideBarStylexxl} ${
                          sidebarActiveDashboard ? styles.focusClass : ""
                        }`
                      : styles.sideBarStylexl
                  }`}
                >
                  <div className="flex justify-center items-center">
                    <span className={styles.sidebarFlexClass}>
                      <i className="fa-solid fa-house "></i>
                    </span>
                  </div>
                  <span className={`ml-2 ${isExpanded ? "block" : "hidden"}`}>
                    Dashboard
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to={`/admin/category`}
                  onClick={activeHandler}
                  className={`${
                    isExpanded
                      ? `${styles.sideBarStylexxl} ${
                          sidebarActiveCategory ? styles.focusClass : ""
                        }`
                      : styles.sideBarStylexl
                  }`}
                >
                  <div className="flex justify-center items-center">
                    <span className={styles.sidebarFlexClass}>
                      <i className="fa-solid fa-keyboard"></i>
                    </span>
                  </div>
                  <span className={`ml-2 ${isExpanded ? "block" : "hidden"}`}>
                    Category
                  </span>
                </Link>
              </li>
              <li className="py-2">
                <Link
                  to={`/admin/group`}
                  onClick={activeHandler}
                  className={`${
                    isExpanded
                      ? `${styles.sideBarStylexxl} ${
                          sidebarActiveGroup ? styles.focusClass : ""
                        }`
                      : styles.sideBarStylexl
                  }`}
                >
                  <div className="flex justify-center items-center">
                    <span className={styles.sidebarFlexClass}>
                      <i className="fa-solid fa-users"></i>
                    </span>
                  </div>
                  <span className={`ml-2 ${isExpanded ? "block" : "hidden"}`}>
                    Group
                  </span>
                </Link>
              </li>
              <li className="py-2">
                <Link
                  to={`/admin/student`}
                  onClick={activeHandler}
                  className={`${
                    isExpanded
                      ? `${styles.sideBarStylexxl} ${
                          sidebarActiveStudent ? styles.focusClass : ""
                        }`
                      : styles.sideBarStylexl
                  }`}
                >
                  <div className="flex justify-center items-center">
                    <span className={styles.sidebarFlexClass}>
                      <i class="fa-solid fa-user"></i>
                    </span>
                  </div>
                  <span className={`ml-2 ${isExpanded ? "block" : "hidden"}`}>
                    Student
                  </span>
                </Link>
              </li>
              <li className="py-2">
                <Link
                  to={`/admin/teacher`}
                  onClick={activeHandler}
                  className={`${
                    isExpanded
                      ? `${styles.sideBarStylexxl} ${
                          sidebarActiveTest ? styles.focusClass : ""
                        }`
                      : styles.sideBarStylexl
                  }`}
                >
                  <div className="flex justify-center items-center">
                    <span className={styles.sidebarFlexClass}>
                      <i class="fa-solid fa-user-tie"></i>
                    </span>
                  </div>
                  <span className={`ml-2 ${isExpanded ? "block" : "hidden"}`}>
                    Teacher
                  </span>
                </Link>
              </li>
              <li className="py-2">
                <Link
                  to={`/admin/gift`}
                  onClick={activeHandler}
                  className={`${
                    isExpanded
                      ? `${styles.sideBarStylexxl} ${
                          sidebarActiveGift ? styles.focusClass : ""
                        }`
                      : styles.sideBarStylexl
                  }`}
                >
                  <div className="flex justify-center items-center">
                    <span className={styles.sidebarFlexClass}>
                      <i className="fa-solid fa-gift"></i>
                    </span>
                  </div>
                  <span className={`ml-2 ${isExpanded ? "block" : "hidden"}`}>
                    Gift
                  </span>
                </Link>
              </li>
              <li className="py-2">
                <Link
                  to={`/admin/exchange`}
                  onClick={activeHandler}
                  className={`${
                    isExpanded
                      ? `${styles.sideBarStylexxl} ${
                          sidebarActiveExchange ? styles.focusClass : ""
                        }`
                      : styles.sideBarStylexl
                  }`}
                >
                  <span className={styles.sidebarFlexClass}>
                    <i className="fa-solid fa-calendar-days"></i>
                  </span>
                  <span className={`ml-2 ${isExpanded ? "block" : "hidden"}`}>
                    Exchange
                  </span>
                </Link>
              </li>
              <li className="py-2">
                <Link
                  to={`/admin/message`}
                  onClick={activeHandler}
                  className={`${
                    isExpanded
                      ? `${styles.sideBarStylexxl} ${
                          sidebarActiveMessage ? styles.focusClass : ""
                        }`
                      : styles.sideBarStylexl
                  }`}
                >
                  <span className={styles.sidebarFlexClass}>
                    <i class="fa-solid fa-envelope"></i>
                  </span>
                  <span className={`ml-2 ${isExpanded ? "block" : "hidden"}`}>
                    Message
                  </span>
                </Link>
              </li>
              <li className="py-2">
                <Link
                  to={`/admin/contact`}
                  onClick={activeHandler}
                  className={`${
                    isExpanded
                      ? `${styles.sideBarStylexxl} ${
                        sidebarActiveContact ? styles.focusClass : ""
                        }`
                      : styles.sideBarStylexl
                  }`}
                >
                  <span className={styles.sidebarFlexClass}>
                  <i class="fa-solid fa-address-card"></i>
                  </span>
                  <span className={`ml-2 ${isExpanded ? "block" : "hidden"}`}>
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <MobileBar isAdmin={isAdmin} />
      {/* </div> */}
    </>
  );
}

export default SidebarTemplate;
