import React, { useState, useEffect } from 'react';

// Dastlabki ma'lumotlar ro'yxati
const initialMessages = [
    {
        id: 1,
        groupName: 'Alpha',
        dateTime: '1023-12-11T15:00:00Z',
        content: 'Lorem ipsum dolor sit amet...'
    },
    {
        id: 2,
        groupName: 'Beta',
        dateTime: '2013-12-10T15:45:00Z',
        content: 'Consectetur adipiscing elit...'
    },
    {
        id: 3,
        groupName: 'jeta',
        dateTime: '2020-12-10T15:45:00Z',
        content: 'Consectetur adipiscing elit...'
    },
    {
        id: 4,
        groupName: 'kBeta',
        dateTime: '2022-12-10T15:45:00Z',
        content: 'Consectetur adipiscing elit...'
    },
    {
        id: 5,
        groupName: 'qBeta',
        dateTime: '2003-12-10T15:45:00Z',
        content: 'Consectetur adipiscing elit...'
    },
    // Qo'shimcha xabarlar...
];

function Studentmessage() {
    const [messages, setMessages] = useState(initialMessages);


    

    return (
        <div className="container mx-auto p-8 bg-gray-100 h-screen">
            {/* Tartiblash tugmalari */}
            <div className="mt-10">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Message</h2>
            </div>
            <div className="flex justify-between items-center mb-4">
                {/* Tartiblash tugmalari */}
                <button className='btm'> +Add</button>
            </div>

            {/* Xabarlar ro'yxatini ko'rsatish */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {messages.map(message => (
                    <div key={message.id} className="border rounded all-shadow p-3">
                        <h2 className="font-bold text-lg mb-3">{message.groupName}</h2>
                        <p className="text-gray-700 text-base">{message.content}</p>
                        <div className="text-right">
                            {/* <span className="text-sm font-semibold">{new Date(message.dateTime).toLocaleString()}</span> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Studentmessage;
