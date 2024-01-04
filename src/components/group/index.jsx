import React from "react";
import CategoryTable from "../categorytable";
import "../../globalcss/style.css"

function CategoryGroup() {
    return (
        <div className="bg-gray-100 min-h-screen p-8 w-full">
            <div className=" mb-7">
                <h1 className="text-3xl font-semibold text-gray-800">Hi Admin(a)</h1>
                <span className="text-sm text-gray-600">Welcome back to Coin system dashboard</span>
            </div>
            <div className="mt-10">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Group</h2>
            </div>
            <div className=" mb-2 flex justify-between">
                <button className="btm">+ Add</button>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="search" class="block w-full p-4 ps-10 text-sm  border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" />
                </div>
            </div>
            <CategoryTable />
        </div>
    );
}

export default CategoryGroup;