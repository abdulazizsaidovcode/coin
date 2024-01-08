import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { config, url } from '../api/api';

// Dastlabki ma'lumotlar ro'yxati
const [initialMessages, setInitialMessages] = useState(initialMessages);

const getMessage = () => {
    axios.get(url + "message", config)
        
}

function Message() {
    const [messages, setMessages] = useState(initialMessages);
    const [sortType, setSortType] = useState('date'); // 'date' yoki 'time'
    const [isAscending, setIsAscending] = useState(false); // O'sish tartibi bo'yicha tartiblash

    useEffect(() => {
        const sortMessages = () => {
            const sortedMessages = [...messages].sort((a, b) => {
                let comparison = 0;

                if (sortType === 'date') {
                    // Sana bo'yicha tartiblash
                    const dateA = new Date(a.dateTime).setHours(0, 0, 0, 0);
                    const dateB = new Date(b.dateTime).setHours(0, 0, 0, 0);
                    comparison = dateA - dateB;
                } else if (sortType === 'time') {
                    // Vaqt bo'yicha tartiblash (sana inobatga olinmaydi)
                    const timeA = new Date(a.dateTime).getTime() % (24 * 60 * 60 * 1000);
                    const timeB = new Date(b.dateTime).getTime() % (24 * 60 * 60 * 1000);
                    comparison = timeA - timeB;
                }

                return isAscending ? comparison : -comparison;
            });
            setMessages(sortedMessages);
        };

        sortMessages();
    }, [sortType, isAscending, messages]);

    // Tartiblash turini va yo'nalishini o'zgartirish
    const changeSort = (type) => {
        setSortType(type);
        setIsAscending(type === sortType ? !isAscending : false);
    };

    return (
        <div className="container mx-auto p-8">
            {/* Tartiblash tugmalari */}
           
            <div className="mt-3">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Message</h2>
            </div>
            <div className="flex justify-between items-center mb-4">
                {/* Tartiblash tugmalari */}
                <button className='btm'> +Add</button>
                <div>
                    <button onClick={() => changeSort('date')} className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Sort by Date {sortType === 'date' && (isAscending ? '⬆️' : '⬇️')}
                    </button>
                    <button onClick={() => changeSort('time')} className="bg-green-500 ml-4 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Sort by Time {sortType === 'time' && (isAscending ? '⬆️' : '⬇️')}
                    </button>
                </div>
            </div>

            {/* Xabarlar ro'yxatini ko'rsatish */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {messages.map(message => (
                    <div key={message.id} className="border rounded shadow p-3">
                        <h2 className="font-bold text-lg mb-3">{message.groupName}</h2>
                        <p className="text-gray-700 text-base">{message.content}</p>
                        <div className="text-right">
                            <span className="text-sm font-semibold">{new Date(message.dateTime).toLocaleString()}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Message;
