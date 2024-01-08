import React, { useState, useEffect } from "react";
import { byId, config, setConfig, url } from "../api/api";
import axios from "axios";
import avatar from "../../assits/opacha.jpg";
import { Link } from "react-router-dom";

const Navbarcha = () => {
  const [name, setName] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

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

  const logOut = () => byId("logout").click();

  return (
    <div className="bg-gray-100 w-full">
      <Link to="/" id="logout"></Link>
      <div className="container mx-auto">
        <div className="flex justify-between bg-white py-5 px-8 w-full fixed z-50">
          {/* Qidiruv maydoni */}
          <div className="flex items-center space-x-1 ">
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="search" id="search" class="block w-full p-4 ps-10 text-sm  border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" />
            </div>
          </div>
          {/* Foydalanuvchi profili va boshqa kontentlar uchun joy */}
          <div className="relative">
            <button onClick={toggleMenu} className="flex items-center space-x-2 ">
              <img src={avatar} alt="Admin" className="rounded-full w-10 h-10" />
              <span className="hidden md:block">{name.fullName}</span>
            </button>
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
                <button className="btm mr-5">Edit</button>
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
        <div className="px-8 pt-36">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800">
            Hi {name.fullName}
          </h1>
          <span className="text-sm text-gray-600">
            Welcome back to the Coin system dashboard
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbarcha;
