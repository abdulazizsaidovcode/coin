import React, { useState, useEffect } from "react";
// import { config, url } from "../api/api";
// import React, { useState, useEffect } from "react";
import { byId, config, getFile, setConfig, url } from "../../components/api/api";
import axios from "axios";
import avatar from "../../assits/opacha.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

const StudentNavbar = () => {
  const [name, setName] = useState([]);
  const [editModal, setIsModalOpenEdit] = useState(false);
  const [userId, setUserId] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const openModalEdit = () => setIsModalOpenEdit(true);
  const closeModalEdit = () => setIsModalOpenEdit(false);

  useEffect(() => {
    setConfig();
    getMe()
  }, []);
  function getMe() {
    axios
      .get(url + "user/getMe", config)
      .then((res) => {
        setName(res.data.body);
      })
      .catch((err) =>
        console.log(err)
      );
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setConfig();
    axios
      .get(url + "message/student", config)
      .then((res) => {
        setMessages(res.data.body.object);
      })
      .catch((err) =>
        console.log("Backenddan ma'lumot olishda xatolik yuz berdi 😭", err)
      );
  }, []);

  const editUser = () => {
    let editData = new FormData();
    editData.append("firstName", byId("firstName").value);
    editData.append("lastName", byId("lastName").value);
    editData.append("phoneNumber", byId("phoneNumber").value);
    editData.append("password", byId("password").value);
    editData.append("prePassword", byId("prePassword").value);
    editData.append("file", byId("image").files[0]);
    axios
      .put(url + "user/edit/user/profile", editData, config)
      .then(() => {
        closeModalEdit();
        getMe()
        // getUsers();
        toast.success("User information has been changed✔");
      })
      .catch(() => {
        toast.error("Something went wrong ❓");
      });
  };

  const logOut = () => byId("logout").click();

  return (
    <div className="bg-gray-100 w-full">
      <Link to="/" id="logout"></Link>
      <div className="w-full ">
        <div className="flex justify-end bg-white py-3 px-8  z-50 w-full">
          
          <div className="relative left-0">
            <div className="flex items-center">
              <div className="relative mt-1">
                <div className="w-2 h-2 bg-red-400 rounded-full absolute right-2 ">
                  <a href=""></a>
                </div>
                <Link to="/student/message">
                  <FontAwesomeIcon
                    icon={faBell}
                    className={
                      `${messages.length > 0} `
                        ? "text-2xl mr-2 text-gray-80 anim"
                        : "text-2xl mr-2 text-gray-80"
                    }
                  />
                </Link>
              </div>
              <button
                onClick={toggleMenu}
                className="flex items-center space-x-2 "
              >
                <img
                  src={name.attachmentId  ? getFile + name.attachmentId : avatar}
                  alt="Admin"
                  className="rounded-full w-12 h-12 p-1 border"
                />
                <span className="hidden md:block capitalize">{name.fullName}</span>
              </button>
            </div>
            <div
              className={`${isOpen ? "absolute duration-500" : "hidden"} 
              right-0 mt-2 py-2 w-80 bg-white rounded-xl shadow-xl z-20`}
            >
              {/* Menu items */}
              <div className="h-40 bg-profileColor rounded-t-xl flex justify-center items-center">
                <img
                  className="w-20 h-20 rounded-full"
                  src={name.attachmentId  ? getFile + name.attachmentId : avatar}
                  alt="Gift"
                />
                
                <span
                  className="absolute right-3 top-3 hover:text-gray-200 duration-200 text-white cursor-pointer"
                  onClick={toggleMenu}
                >
                  <i className="fa-solid fa-xmark"></i>
                </span>
              </div>
              <div className="px-6 py-2">
                <div className="font-bold text-xl mb-2 text-center capitalize">
                  {name.fullName}
                </div>
                <p className="text-center text-black">{name.phoneNumber}</p>
                <p className="text-gray-700 text-center">
                  {name.email}
                  <br />
                  {name.coin} coin
                </p>
              </div>
              <div className=" mt-2 text-center">
                <button
                  onClick={() => {
                    setUserId(name);
                    openModalEdit();
                    toggleMenu();
                  }}
                  className="btm mr-5"
                >
                  Edit
                </button>
                <a href='/'>

                <button
                  className="bg-red-500 text-white font-bold rounded-lg py-2.5 px-7 active:scale-90 duration-200"
                  onClick={() => {
                    toggleMenu();
                    sessionStorage.clear();
                  }}
                >
                  Log out
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="px-8 pt-8">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 capitalize">
            Hi {name.fullName}
          </h1>
          <span className="text-sm text-gray-600">
            Welcome back to the Coin system dashboard
          </span>
        </div>
      </div>

      {editModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-20 ">
          <div className="modal bg-white rounded-xl overflow-hidden shadow-2xl">
            <div className="flex">
              <h2 className="text-lg font-semibold text-gray-900 p-2">
                Edit student
              </h2>
              <button
                onClick={closeModalEdit}
                className="text-gray-400 m-2 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="crud-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >

                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            {/* Modal body */}
            <div className="p-4 md:p-5">
              <div className="grid md:gap-4 mb-4 grid-cols-2">
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    FirstName
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="firstName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="FirstName"
                    defaultValue={userId.fullName}
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="lastName"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    LastName
                  </label>
                  <input
                    type="text"
                    name="LastName"
                    id="lastName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="LastName"
                    required=""
                  />
                </div>
                <div className="col-span-2 sm:col-span-2">
                  <label
                    htmlFor="phoneNumber"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Phone number
                  </label>
                  <input
                    type="number"
                    name="phoneNumber"
                    id="phoneNumber"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="100"
                    defaultValue={userId.phoneNumber}
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    type="text"
                    name="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type product password"
                    defaultValue={userId.password}
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="prePassword"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    prePassword
                  </label>
                  <input
                    type="text"
                    name="prePassword"
                    id="prePassword"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type product password"
                  />
                </div>
                <div className="col-span-2 sm:col-span-2">
                  <label
                    htmlFor="image"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    prePassword
                  </label>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type product password"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  onClick={closeModalEdit}
                  className="btm-close me-2 bg-red-900 "
                >
                  Close
                </button>
                <button

                  onClick={() => {
                    editUser();
                  }}
                  className="btm"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentNavbar;
