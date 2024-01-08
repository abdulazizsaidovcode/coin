import React, { useState } from 'react';
import GroupsTable from "./GroupsTable";
import "../../../globalcss/style.css";

function Groups() {
    return (
        <div className="bg-gray-100 min-h-full p-8 w-full">
            <div className=" mb-2 flex justify-between items-center flex-wrap font-inika">
                <h2 className="text-4xl font-bold text-gray-900">Group</h2>
                <div className="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="search"
                        className="block w-80 p-3 ps-10 text-sm border border-gray-300 rounded-lg 
                        bg-gray-50 focus:outline-0 duration-300 focus:border-blue-500  
                        dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 
                        dark:focus:border-blue-500"
                        placeholder="Search" />
                </div>
            </div>
            <GroupsTable />
        </div>
    );
}

export default Groups;