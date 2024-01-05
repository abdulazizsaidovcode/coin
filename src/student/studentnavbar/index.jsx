import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { config, setConfig, url } from "../../components/api/api.js";

const StudentNavbar = () => {
    const [students, setStudents] = useState([]); // Talabalar ro'yxati uchun state
    const [fullname, setName] = useState([]); // Talabalar ro'yxati uchun state
    const [img, setImg] = useState([]); // Talabalar ro'yxati uchun state

    useEffect(() => {
        setConfig();
        axios.get(url + "user/getMe", {
            headers: {
                Authorization: sessionStorage.getItem("jwtToken")
            }
        })
            .then(response => {
                setStudents(response.data.body); 
                setName(response.data.body.fullName)
                setImg(response.data.body.img)
            })
            .catch(error => {
                console.error("Backenddan ma'lumot olishda xatolik yuz berdi", error);
            });
    }, []);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    console.log(students);

    return (
        <div className="bg-gray-100 w-full">
            <div className="flex justify-between bg-white py-5 px-8 w-full">
                <div className="flex items-center space-x-1">
                    <input type="search" placeholder="Search..." className="px-4 py-2 w-96 border rounded-md text-sm outline-none" />
                </div>
                <button onClick={toggleMenu} className="flex items-center  bg-black ">
                    <img
                        src={img}
                        alt="Admin"
                        className="rounded-full w-10 h-10"
                    />
                    <span className="hidden md:block">{fullname}</span>
                </button>
            </div>
            <div className="px-8 pt-10">
                <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800">Hi {fullname} (student)</h1>
                <span className="text-sm text-gray-600">Welcome back to the Coin system dashboard</span>
            </div>

            <div className={`${isOpen ? 'absolute' : ' hidden'}  right-0 mt-2 py-2 w-64 bg-white rounded-xl shadow-xl z-20`}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {students.map((student) => (
                        <div key={student.id} className="bg-white p-6 rounded-lg shadow-lg">
                            <img
                                src={student.attachment} // Agar rasm bo'lmasa, standart rasmni ko'rsatadi
                                alt="rasm"
                                className="h-40 w-40 rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-center text-xl font-bold">{student.fullName}sdsd</h3>
                            <p className="text-center text-gray-600">{student.phoneNumber}</p>
                            <p className="text-center text-gray-600">{student.groupName}</p>
                            <p className="text-center text-gray-600">{student.coin} Coins</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StudentNavbar;
