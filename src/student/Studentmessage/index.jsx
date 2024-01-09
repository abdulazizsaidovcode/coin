import React, { useState, useEffect } from 'react';
import { config, setConfig, url } from '../../components/api/api';
import axios from 'axios';

function Studentmessage() {
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
        <div className="container mx-auto p-8 bg-gray-100 h-screen">
            <div className="mb-10">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Message</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {messages.length > 0 ? (
                    messages.map(message => (
                        <div key={message.id} className="border rounded all-shadow p-3">
                            <p className="text-gray-700 text-base">{message.description}</p>
                            <h2 className="font-bold text-lg mb-3">{message.groupName}</h2>
                            <p className="text-gray-700 text-base">{message.date}</p>
                        </div>
                    ))
                ) : (
                    <div className="w-full text-center">
                        <p className="text-gray-800 text-3xl">Sizga hali yangi xabar  yo'q 😶‍🌫️</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Studentmessage;
