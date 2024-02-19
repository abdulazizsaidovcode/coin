import React, { useState, useEffect } from "react";
import {
  byId,
  config,
  getFile,
  setConfig,
  url,
} from "../../components/api/api";
import axios from "axios";
import avatar from "../../assits/opacha.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import logo from "../../assits/IT-CA-logo.png";
import Loader from "../../assits/loader";

const Navbarcha = ({isAdminNav}) => {
  const [name, setName] = useState([]);
  const [editModal, setIsModalOpenEdit] = useState(false);
  const [userId, setUserId] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setloading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [messages, setMessages] = useState([]);

  const openModalEdit = () => setIsModalOpenEdit(true);
  const closeModalEdit = () => setIsModalOpenEdit(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const togglePasswordVisibility2 = () => setShowPassword2(!showPassword2);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    setConfig();
    getMe();
  }, []);

  useEffect(() => {
    setConfig();
    axios.get(url + "message/student", config)
      .then((res) => {
        // if (res.data && res.data.body && res.data.body.object) {
        setMessages(res.data.body.object);
        // }
      })
      .catch((err) => console.log("Backenddan ma'lumot olishda xatolik yuz berdi 😭", err));
  }, []);

  const getMe = () => {
    axios.get(url + "user/getMe", config)
      .then((res) => setName(res.data.body))
      .catch((err) => console.log("Boshqa backendinchi topiyla iltomos 😭: get me kelmadi: ", err));
  };

  const editUser = () => {
    let editData = new FormData();
    editData.append("firstName", byId("firstName").value);
    editData.append("lastName", byId("lastName").value);
    editData.append("phoneNumber", byId("phoneNumber").value);
    editData.append("password", byId("password").value);
    editData.append("prePassword", byId("prePassword").value);
    editData.append("file", byId("file").files[0]);

    setloading(true);

    axios.put(url + "user/edit/user/profile", editData, config)
      .then(() => {
        setloading(true);
        closeModalEdit();
        getMe();
        toast.success("User information has been changed✔");
      })
      .catch(() => {
        setloading(true);
        toast.error("Something went wrong❓");
      });
  };

  const logOut = () => byId("logout").click();

  return (
    <div className="bg-gray-100">
      <Link to="/" id="logout"></Link>
      <div className="">
        <div className="flex xl:py-2 justify-between xl:justify-end fixed items-center w-full left-0 z-20 bg-white px-8 ">
          <div className="flex xl:hidden items-center space-x-1 w-32 h-20">
            <img className=" object-cover" src={logo} alt="logo" />
          </div>
          <div className="relative left-0">
            <div className="flex items-center">
              <div className="relative mt-1">
                <div className="w-2 h-2 bg-red-400 rounded-full absolute right-2 ">
                  <a href=""></a>
                </div>
                <Link to={`${isAdminNav ? '/admin/message' : '/teacher/message'}`}>
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
                  src={
                    name.attachmentId
                      ? getFile + name.attachmentId
                      : avatar
                  }
                  alt="avatar"
                  className="rounded-full w-12 h-12 p-1 border"
                />
                <span className="hidden md:block">{name.fullName}</span>
              </button>
            </div>
            <div
              className={`${isOpen ? "zoom-modal-right absolute duration-500" : "hidden"} 
              right-0 mt-2 py-2 w-80 bg-white rounded-xl shadow-xl z-20`}
            >
              {/* Menu items */}
              <div className="h-40 bg-profileColor rounded-t-xl flex justify-center items-center">
                <img
                  className="w-20 h-20 rounded-full"
                  src={avatar}
                  alt="Gift"
                />
                <span
                  className="absolute right-3 top-3 hover:text-gray-200 duration-200 text-white cursor-pointer "
                  onClick={toggleMenu}
                >
                  <i className="fa-solid fa-xmark"></i>
                </span>
              </div>
              <div className="px-6 py-2">
                <div className="font-bold text-xl mb-2 text-center">
                  {name.fullName}
                </div>
                <p className="text-center text-black">{name.phoneNumber}</p>
                <p className="text-gray-700 text-center">
                  {name.email}
                  <br />
                  {name.coin} coin
                </p>
              </div>
              <div className="mt-2 text-center">
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
        <div className="px-8 pt-28">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 capitalize">
            Hi {name.fullName}
          </h1>
          <span className="text-sm text-gray-600">
            Welcome back to the Coin system dashboard
          </span>
        </div>
      </div>

      {editModal && (
        <div className={`zoom-modal fixed inset-0 flex items-center justify-center z-50`}>
          <div className="modal bg-white rounded-xl overflow-hidden shadow-2xl">
            <div className="flex">
              <h2 className="text-lg font-semibold text-gray-900 p-2">
                Edit profile
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

                <div className="col-span-2">
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
                    placeholder="phoneNumber"
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

                  <div className="relative">
                    <input
                      // onKeyDown={checkKeyPress}
                      id="password"
                      disabled={loading}
                      type={showPassword ? "text" : "password"}
                      className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 flex right-0 items-center justify-center pr-3 text-sm leading-5 text-black"
                      onClick={togglePasswordVisibility}
                    >
                      <i
                        className={
                          showPassword
                            ? "fa-solid fa-eye-slash"
                            : "fa-solid fa-eye"
                        }
                      />
                    </button>
                  </div>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="prePassword"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Confirm Password
                  </label>

                  <div className="relative">
                    <input
                      // onKeyDown={checkKeyPress}
                      id="prePassword"
                      disabled={loading}
                      type={showPassword2 ? "text" : "password"}
                      className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 flex right-0 items-center justify-center pr-3 text-sm leading-5 text-black"
                      onClick={togglePasswordVisibility2}
                    >
                      <i
                        className={
                          showPassword2
                            ? "fa-solid fa-eye-slash"
                            : "fa-solid fa-eye"
                        }
                      />
                    </button>
                  </div>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="file"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Profile image
                  </label>
                  <input
                    type="file"
                    name="file"
                    id="file"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="100"
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={closeModalEdit}
                  className="btm-close me-2 bg-red-900"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    editUser();
                  }}
                  className="btm"
                >
                  {loading ? <Loader /> : "Edit"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbarcha;
