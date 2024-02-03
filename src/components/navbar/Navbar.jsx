import React, { useState, useEffect } from 'react';
// import { config, url } from "../api/api";
// import React, { useState, useEffect } from "react";
import { byId, config, setConfig, url } from "../../components/api/api";
import axios from "axios";
import avatar from "../../assits/opacha.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { toast } from 'react-toastify';

const Navbarcha = () => {
  const [name, setName] = useState([]);
  const [editModal, setIsModalOpenEdit] = useState(false);
  const [userId, setUserId] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const openModalEdit = () => setIsModalOpenEdit(true);
  const closeModalEdit = () => setIsModalOpenEdit(false);

  useEffect(() => {
    setConfig();
    axios.get(url + "user/getMe", config)
      .then(res => {
        setName(res.data.body);
      })
      .catch(err => console.log("Boshqa backendinchi topiyla iltomos 😭", err));
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setConfig();
    axios
      .get(url + "message/student", config)
      .then((res) => {
        if (res.data && res.data.body && res.data.body.object) {
          setMessages(res.data.body.object);
        }
      })
      .catch((err) =>
        console.log("Backenddan ma'lumot olishda xatolik yuz berdi 😭", err)
      );
  }, []);

  const editUser = () => {
    let editData = {
      firstName: byId("firstName").value,
      lastName: byId("lastName").value,
      email: byId("email").value,
      password: byId("password").value,
      phoneNumber: byId("phoneNumber").value,
      groupId: byId("groupId").value,
      gender: byId("gender").value,
      friendPhoneNumber: "",
    };
    axios
      .put(url + "user/update/", editData, config)
      .then(() => {
        // openEditModal();
        // getUsers();
        toast.success("User information has been changed✔");
      })
      .catch(() => {
        toast.error("Something went wrong❓");
      });
  };

  const logOut = () => byId("logout").click();

  return (
    <div className="bg-gray-100">
      <Link to="/" id="logout"></Link>
      <div className="">
        <div className="flex justify-end bg-white py-3 px-8  z-50 " style={{width: "91%"}}>
          {/* Qidiruv maydoni */}
          {/* <div className="flex items-center space-x-1 ">
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="search" id="search" class="block w-full p-4 ps-10 text-sm  border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" />
            </div>
          </div> */}
          {/* Foydalanuvchi profili va boshqa kontentlar uchun joy */}
          <div className="relative left-0">
            <div className="flex items-center">
              <div className='relative mt-1'>
                <div className='w-2 h-2 bg-red-400 rounded-full absolute right-2 '><a href=""></a></div>
                <Link to="/admin/message">
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
              <button onClick={toggleMenu} className="flex items-center space-x-2 ">
                <img src={avatar} alt="Admin" className="rounded-full w-12 h-12 p-1 border" />
                <span className="hidden md:block">{name.fullName}</span>
              </button>
              
            </div>
            <div
              className={`${isOpen ? "absolute duration-500" : "hidden"} 
              right-0 mt-2 py-2 w-80 bg-white rounded-xl shadow-xl z-20`}>
              {/* Menu items */}
              <div className="h-40 bg-profileColor rounded-t-xl flex justify-center items-center">
                <img className="w-20 h-20 rounded-full" src={avatar} alt="Gift" />
                <span className="absolute right-3 top-3 hover:text-gray-200 duration-200 text-white cursor-pointer"
                  onClick={toggleMenu}>
                  <i className="fa-solid fa-xmark"></i>
                </span>
              </div>
              <div className="px-6 py-2">
                <div className="font-bold text-xl mb-2 text-center">{name.fullName}</div>
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
                  setUserId(name)
                  openModalEdit()
                 toggleMenu()
                 }} className="btm mr-5">Edit</button>
                <button
                  className="bg-red-500 text-white font-bold rounded-lg py-2.5 px-7 active:scale-90 duration-200"
                  onClick={() => {
             
                     logOut();
                    sessionStorage.clear();
                  }}
                >log out</button>
              </div>
            </div>
          </div>
        </div>
        <div className="px-8 pt-8">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800">
            Hi {name.fullName}
          </h1>
          <span className="text-sm text-gray-600">
            Welcome back to the Coin system dashboard
          </span>
        </div>
      </div>

      {editModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
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

                <div className="col-span-2">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Email"
                    defaultValue={userId.email}
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
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
                    placeholder="Type product name"
                    defaultValue={userId.password}
                  />
                </div>
                
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="gender"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Select gender
                  </label>
                  <select
                    id="gender"
                    className="mt-1 py-2 px-2 bg-slate-200 focus:bg-slate-100 focus:outline-0 duration-300 rounded-md w-full"
                  >
                    <option selected disabled>
                      Choose one...
                    </option>
                    <option value="MALE">MALE</option>
                    <option value="FEMALE">FEMALE</option>
                  </select>
                </div>
                
              </div>
              <div className="flex justify-end">
                <button onClick={closeModalEdit} className="btm-close me-2 bg-red-900">Close</button>
                <button
                  onClick={() => {
                    editUser();
                  }}
                  className="btm"
                >
                  Edit
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
