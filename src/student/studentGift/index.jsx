import "../../globalcss/style.css";
import React, { useState, useEffect } from 'react';
import StudentGiftCard from "./Giftcard";

function StudentGift() {
    const [isMedium, setIsMedium] = useState(window.innerWidth > 1224);

    useEffect(() => {
        function handleResize() {
            setIsMedium(window.innerWidth > 1224);
        }

        window.addEventListener('resize', handleResize);

        // Komponent yo'qolganda, eventListener'ni tozalash kerak
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`bg-gray-100 md:px-10 px-3 w-full ${isMedium ? "h-screen" : "h-max"}`}>
            <div className="mb-2 flex justify-between">
                <div>
                    <h2 className="text-4xl font-bold font-inika text-gray-900 mb-4">Gift</h2>
                </div>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex  ps-3 mt-5 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="search" className="block w-full p-4 ps-10 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" />
                </div>
            </div>
            <StudentGiftCard />
        </div>
    );
}

export default StudentGift;
