import React from 'react';

function Studetsrate() {
    // This component assumes you have FontAwesome icons set up.
    // Adjust the icon components as necessary to match your setup.

    return (
        <div className="bg-white rounded-full p-4 flex justify-around items-center all-shadow">
            <div className="flex items-center sm:items-start  mb-4 sm:mb-0 ">
                <div className="rounded-2xl bg-gray-200 px-5 py-2">
                    <i class="fa-solid fa-dollar-sign text-4xl"></i>
                </div>
                <div className="flex flex-col ml-3">
                    <span className="text-sm text-gray-600 ">Current Coin</span>
                    <span className="text-lg font-semibold">100</span>
                </div>
            </div>
            <div className="flex items-center sm:items-start  mb-4 sm:mb-0 ">
                <div className="rounded-2xl bg-gray-200 px-5 py-2">
                    <i class="fa-solid fa-hand-holding-dollar text-4xl"></i>
                </div>
                <div className="flex flex-col ml-3">
                    <span className="text-sm text-gray-600 ">Exchange Coin</span>
                    <span className="text-lg font-semibold">50</span>
                </div>
            </div>
            <div className="flex items-center sm:items-start  mb-4 sm:mb-0 ">
                <div className="rounded-2xl bg-gray-200  px-5 py-2">
                    <i class="fa-solid fa-sack-dollar text-4xl"></i>
                </div>
                <div className="flex flex-col ml-3">
                    <span className="text-sm text-gray-600 ">Total coin</span>
                    <span className="text-lg font-semibold">150</span>
                </div>
            </div>
        </div>
    );
}

export default Studetsrate;
