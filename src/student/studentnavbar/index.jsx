import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { config, setConfig, url } from "../../components/api/api.js";
import opacha from "../../assits/opacha.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCheckCircle, } from '@fortawesome/free-solid-svg-icons';
import "./index.css";

const StudentNavbar = () => {
    // Foydalanuvchi ma'lumotlari uchun alohida state o'zgaruvchilari
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

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setConfig();
        axios.get(url + "message/student", config)
            .then(res => {
                if (res.data && res.data.body && res.data.body.object) {
                    setMessages(res.data.body.object);
                }
            })
            .catch(err => console.log("Backenddan ma'lumot olishda xatolik yuz berdi 😭", err));
    }, []);


    return (
        <div className="bg-gray-100 w-full">
            {/* Navbar va boshqa tarkibiy qismlar */}

            {/* Foydalanuvchi ma'lumotlarini ko'rsatish qismi */}
            <div className="container mx-auto">
                <div className="w-full flex justify-between bg-white p-2">
                    <div className="flex items-center space-x-1">
                        <div class="relative">
                        </div>                    </div>
                    {/* Bu yerda foydalanuvchi bilan bog'liq boshqa harakatlar uchun tugmalar yoki linklar qo'yilishi mumkin */}
                    <button onClick={toggleMenu} className="flex items-center space-x-2 ">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-2xl mr-2 text-gray-800" />
                        <div className='relative mt-1'>
                            {messages.length > 0 ? (
                                <div className='w-2 h-2 bg-red-400 rounded-full absolute right-2 '><a href=""></a></div>
                            ) : (
                                <div></div>
                            )}

                            <FontAwesomeIcon icon={faBell} className={`${messages.length > 0} ` ? "text-2xl mr-2 text-gray-80 anim" : "text-2xl mr-2 text-gray-80"} />
                        </div>
                        <img src={opacha} alt="Admin" className="rounded-full border p-1 w-12 h-12" />
                        <span className="hidden md:block">{name.fullName}</span>
                    </button>
                    <div
                        className={`${isOpen ? "absolute" : " hidden"
                            }  right-0 mt-2 py-2 w-80 bg-white rounded-xl shadow-xl z-20`}
                    >
                        {/* Menu items */}
                        <div className="h-40 bg-black rounded-t-xl flex justify-center items-center">
                            <img className="w-20 h-20 bg-contain bg rounded-full" src={opacha} alt="Gift" />
                        </div>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 text-center"></div>
                            <p className="text-gray-700 text-base text-center">{name.email}</p>
                            <p className="text-gray-700 text-base text-center">{name.fullName}</p>
                            <p className="text-gray-700 text-base text-center">{name.phoneNumber}</p>
                            <p className="text-gray-700 text-base text-center">{name.coin}</p>
                        </div>
                        <div className="px-6 pt-4 text-center flex justify-between">
                            <button className='btm'>edit</button>
                            <button onClick={toggleMenu} className='btm'>exit</button>
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

export default StudentNavbar;
