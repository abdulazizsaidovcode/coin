import "../../../globalcss/style.css";
import React from 'react';
import GiftCard from "./GiftCard";

function Gift() {
    return (
        <div className="bg-gray-100 min-h-screen p-8 w-full ">
            <div className="mb-6 flex justify-between items-center">
                <h2 className="text-4xl font-bold font-inika text-gray-900 mb-4">Gift</h2>
                <div class="relative">
                    <input
                        id="search"
                        
                        className="w-80 py-3 ps-3 text-sm border border-gray-300 rounded-lg
                      bg-gray-200 focus:bg-gray-50 focus:outline-0 focus:border-blue-500 duration-300"
                        placeholder="🔍   Search" />
                </div>
            </div>
            <GiftCard />
        </div>
    );
}

export default Gift;