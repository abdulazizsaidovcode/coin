import React, { useState, useEffect } from "react";
import { config, setConfig, url } from "../api/api";
import axios from "axios";

const Navbarcha = () => {
  const [name, setName] = useState([]);
  // const [img, setImg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setConfig();
    axios.get(url + "user/getMe", config)
      .then(res => {
        setName(res.data.body);
        // setImg(res.data.body);
      })
      .catch(err => console.log("Boshqa backendinchi topiyla iltomos 😭", err));
  }, []);

  console.log(name);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-100 w-full">
      <div className="flex justify-between bg-white py-5 px-8 w-full">
        {/* Qidiruv maydoni */}
        <div className="flex items-center space-x-1">
          <input
            type="search"
            placeholder="Search..."
            className="px-4 py-2 w-96 border rounded-md text-sm outline-none"
          />
        </div>
        {/* Foydalanuvchi profili va boshqa kontentlar uchun joy */}
        <div className="relative">
          <button onClick={toggleMenu} className="flex items-center space-x-2 ">
            <img src="" alt="Admin" className="rounded-full w-10 h-10" />
            <span className="hidden md:block">{name.fullName}</span>
          </button>
          <div
            className={`${isOpen ? "absolute" : " hidden"
              }  right-0 mt-2 py-2 w-80 bg-white rounded-xl shadow-xl z-20`}
          >
            {/* Menu items */}
            <div className="h-40 bg-profileColor rounded-t-xl flex justify-center items-center">
              <img className="w-20 h-20 bg-contain bg" src="" alt="Gift" />
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
                className="bg-red-500 text-white font-bold rounded-lg py-2.5 px-7"
                onClick={toggleMenu}
              >Close</button>
            </div>
          </div>
        </div>
      </div>
      <div className="px-8 pt-10">
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800">
          Hi {name.fullName}
        </h1>
        <span className="text-sm text-gray-600">
          Welcome back to the Coin system dashboard
        </span>
      </div>
    </div>
  );
};

export default Navbarcha;
