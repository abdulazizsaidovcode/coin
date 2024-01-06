import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { config, url } from "../../components/api/api.js";
import opacha from "../../assits/opacha.jpg"

const StudentNavbar = () => {
    // Foydalanuvchi ma'lumotlari uchun alohida state o'zgaruvchilari
    const [fullName, setFullName] = useState('');
    const [attachment, setAttachment] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setGroupName] = useState('');
    const [coin, setCoin] = useState('');

    // useEffect orqali komponent yuklanganda bir martalik backenddan ma'lumot olish
    useEffect(() => {
        axios.get(url + "user/getMe", config)
            .then(response => {
                // Foydalanuvchi ma'lumotlarini alohida state o'zgaruvchilariga joylaymiz
                const userData = response.data; // .body olib tashlandi chunki bu struktura backendga bog'liq
                setFullName(userData.body.fullName);
                setAttachment(userData.body.attachment);
                setPhoneNumber(userData.body.phoneNumber);
                setGroupName(userData.body.email);
                setCoin(userData.body.coin);
            })
            .catch(error => {
                console.error("Backenddan ma'lumot olishda xatolik yuz berdi", error);
            });
    }, []);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-gray-100 w-full">
            {/* Navbar va boshqa tarkibiy qismlar */}

            {/* Foydalanuvchi ma'lumotlarini ko'rsatish qismi */}
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex items-center space-x-1">
                        <input
                            type="search"
                            placeholder="Search..."
                            className="px-4 py-2 w-96 border rounded-md text-sm outline-none"
                        />
                    </div>
                    {/* Bu yerda foydalanuvchi bilan bog'liq boshqa harakatlar uchun tugmalar yoki linklar qo'yilishi mumkin */}
                    <button onClick={toggleMenu} className="flex items-center space-x-2 ">
                        <img src={opacha} alt="Admin" className="rounded-full border p-1 w-12 h-12" />
                        <span className="hidden md:block">{fullName}</span>
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
                            <p className="text-gray-700 text-base text-center">{email}</p>
                            <p className="text-gray-700 text-base text-center">{fullName}</p>
                            <p className="text-gray-700 text-base text-center">{phoneNumber}</p>
                            <p className="text-gray-700 text-base text-center">{coin}</p>
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
                    Hi {fullName}
                </h1>
                <span className="text-sm text-gray-600">
                    Welcome back to the Coin system dashboard
                </span>
            </div>
        </div>
    );
};

export default StudentNavbar;
