import React, { useState, useEffect } from 'react';
import { config, setConfig, url } from '../../components/api/api';
import axios from 'axios';

function Studentmessage() {
    const [messages, setMessages] = useState([]);
    let [isModalOpen, setIsModalOpen] = useState(false);

    function openModal() {
        setIsModalOpen(!isModalOpen);
    }
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
        <div className=" mx-auto p-8 bg-gray-100 h-screen">
            <div className="mb-10">
                <h2 className="text-4xl font-bold font-inika text-gray-900 mb-4">Message</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {messages.length > 0 ? (
                    messages.map(message => (
                        <div key={message.id} className="border rounded all-shadow p-3">
                            <h2 className="font-bold text-lg mb-3">{message.groupName}</h2>
                            <p className="text-gray-700 text-base">{message.description.length < 50 ? message.description : `${message.description.slice(0, 50)} `} </p>
                            {message.description.length > 50 ? <b onClick={openModal}>More</b> : ''}
                            <p className="text-gray-700 text-base">{message.date}</p>

                        </div>
                    ))
                ) : (
                    <div className="w-full text-center">
                        <p className="text-gray-800 text-3xl">Sizga hali yangi xabar  yo'q 😶‍🌫️</p>
                    </div>
                )}
                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 zoom-modal">
                        <div className="modal font-inika bg-white rounded-xl overflow-hidden shadow-2xl px-8 py-3 w-1/3">
                            <div className="mt-6 pb-6 border-b font-medium text-lg">
                                {messages.description}
                            </div>
                            <div className="flex justify-end gap-3 items-center mt-5">

                                <button
                                    className="font-semibold bg-green-500 py-2 px-6 text-white rounded-lg active:scale-90 duration-300"
                                    onClick={openModal}
                                >
                                    Ok
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Studentmessage;
