import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { byId, config, setConfig, url } from "../../components/api/api.js";
import opacha from "../../assits/opacha.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCheckCircle, } from '@fortawesome/free-solid-svg-icons';
import "./index.css";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const StudentNavbar = () => {
    // Foydalanuvchi ma'lumotlari uchun alohida state o'zgaruvchilari
    const [name, setName] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    // get me start
    useEffect(() => {
        setConfig();
        axios.get(url + "user/getMe", config)
            .then(res => {
                setName(res.data.body);
            })
            .catch(err => console.log("Boshqa backendinchi topiyla iltomos 😭", err));
    }, []);
    // get me edn


    // message start
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
    // message and


    // edit me start
    const editMe = () => {
        const addData = new FormData();
        addData.append("lastName", byId("name2").value);
        addData.append("firstName", byId("name").value);
        addData.append("phoneNumber", byId("number").value);
        addData.append("password", byId("password").value);
        addData.append("prePassword", byId("prePassword").value);
        addData.append("attachment", byId("file").files[0]);

        axios.put(url + "user/editStudentProfile", addData , config)
            .then(() => {
                toast.success("Profile succesfully edit!")
            })
            .catch(() => {
                toast.error("Something is error?")
            })
    }




    // edit me and

    return (
        <div className="bg-gray-100 w-full">
            {/* Navbar va boshqa tarkibiy qismlar */}

            {/* Foydalanuvchi ma'lumotlarini ko'rsatish qismi */}
            <div className="container mx-auto">
                <div className="w-full flex justify-between bg-white p-2">
                    <div className="flex items-center space-x-1">
                        <div class="relative">
                        </div>       </div>
                    {/* Bu yerda foydalanuvchi bilan bog'liq boshqa harakatlar uchun tugmalar yoki linklar qo'yilishi mumkin */}
                    <div className='flex items-center'>
                        <FontAwesomeIcon icon={faCheckCircle} className="text-2xl mr-2 text-gray-800" />
                        <div className='relative mt-1'>
                            {messages.length > 0 ? (
                                <div className='w-2 h-2 bg-red-400 rounded-full absolute right-2 '><a href=""></a></div>
                            ) : (
                                <div></div>
                            )}
                            <Link to="/student/message"><FontAwesomeIcon icon={faBell} className={`${messages.length > 0} ` ? "text-2xl mr-2 text-gray-80 anim" : "text-2xl mr-2 text-gray-80"} /></Link>
                        </div>
                        <button onClick={toggleMenu} className="flex items-center space-x-2 ">
                            <img src={opacha} alt="Admin" className="rounded-full border p-1 w-12 h-12" />
                            <span className="hidden md:block">{name.fullName}</span>
                        </button>
                    </div>
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
                            <button onClick={toggleMenu} className='btm'>exit</button>
                            <button onClick={openModal} className='btm'>edit</button>
                            {isModalOpen && (
                                <div className="modal-overlay" onClick={closeModal}>
                                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                                        <div className="modal-header">
                                            <button onClick={closeModal} className="close-button">&times;</button>
                                        </div>
                                        <div className="modal-body">
                                            {/* Modal Body Content */}
                                            <div className="profile-picture flex justify-center h-40 items-center">
                                                <img src={opacha} alt="Profile" />
                                            </div>
                                            <input type="file" id='file' />
                                            <input type="text" id='name' placeholder="First name" />
                                            <input type="text" id='name2' placeholder="Last name" />
                                            <input type="text" id='number' placeholder="+998-99-99-99" />
                                            <input type="password" id='password' placeholder="Password" />
                                            <input type="password" id='prePassword' placeholder="Confirm password" />
                                        </div>
                                        <div className="modal-footer">
                                            <button onClick={closeModal} className="cancel-button">Cancel</button>
                                            <button onClick={editMe} className="save-button">Save</button>
                                        </div>
                                    </div>
                                </div>
                            )}
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
