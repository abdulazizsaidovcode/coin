// import React from "react";
import CategoryTable from "../categorytable";
import "../../globalcss/style.css"
import React, { useState, useEffect } from 'react';

function Category() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Offcanvas menyuni ochish va yopish uchun funksiyalar
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        // Tugma bosilganda offcanvas menyuni ochish uchun event listener qo'shamiz
        const button = document.getElementById('openMenuButton');
        button.addEventListener('click', toggleMenu);

        // Komponent tozalandi (unmounted) qilinganda event listener'ni olib tashlaymiz
        return () => {
            button.removeEventListener('click', toggleMenu);
        };
    }, []);
    return (
        <div className="bg-gray-100 min-h-screen p-8 ml-64 w-full">
            <div className=" mb-4">
                <h1 className="text-3xl font-semibold text-gray-800">Hi Admin(a)</h1>
                <span className="text-sm text-gray-600">Welcome back to Coin system dashboard</span>
            </div>
            <div className="mt-10">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Category</h2>
            </div>
            <div className=" mb-2 flex justify-between">
                <button id="openMenuButton" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Open Menu
                </button>
                {isMenuOpen && (
                    <div className="fixed inset-0 z-50 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            {/* Overlay va Off-canvas menu */}
                            <div className={`${isMenuOpen ? 'fixed' : 'hidden'} inset-0 overflow-hidden z-40`}>
                                <div className="absolute inset-0 overflow-hidden">
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity" onClick={toggleMenu}></div>

                                    {/* Off-canvas menu content */}
                                    <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex" aria-labelledby="slide-over-heading">
                                        <div className="relative w-screen max-w-md">
                                            {/* Off-canvas menu, sliding from right */}
                                            <div className="h-full flex flex-col bg-white shadow-xl overflow-y-auto">
                                                <div className="px-4 sm:px-6">
                                                    <div className="flex items-start justify-between pt-5 pb-1">
                                                        <h2 className="text-lg font-medium text-gray-900" id="slide-over-heading">
                                                            Add Category
                                                        </h2>
                                                        <div className="ml-3 h-7 flex items-center">
                                                            <button onClick={toggleMenu} className="bg-transparent rounded-md text-gray-400 hover:text-gray-500 focus:outline-none">
                                                                <span className="sr-only">Close panel</span>
                                                                {/* Close Icon */}
                                                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                                                        {/* Content here: form fields etc. */}
                                                        <div className="flex flex-col">
                                                            <label htmlFor="category-name" className="block text-sm font-medium text-gray-700">Category name</label>
                                                            <input type="text" id="category-name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" placeholder="Enter category name" />
                                                        </div>
                                                        {/* ... other fields ... */}
                                                    </div>
                                                </div>
                                                <div className="flex-shrink-0 px-4 py-4 flex justify-end">
                                                    <button onClick={toggleMenu} className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded">
                                                        Close
                                                    </button>
                                                </div>
                                                <div class="bg-white p-6 rounded-lg shadow-lg">
                                                    <form>
                                                        <label for="category-name" class="block text-sm font-medium text-gray-700">Category name</label>
                                                        <input id="category-name" type="text" placeholder="Enter category name"
                                                            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />

                                                        <label for="category-language" class="block text-sm font-medium text-gray-700 mt-4">Category programming language</label>
                                                        <input id="category-language" type="text" placeholder="Enter category p. language"
                                                            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />

                                                        <label for="parent-category" class="block text-sm font-medium text-gray-700 mt-4">Select parent Category</label>
                                                        <select id="parent-category"
                                                            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                                            <option>Select category</option>
                                                        </select>
                                                        <div class="mt-4">
                                                            <label class="block text-sm font-medium text-gray-700">Choose file</label>
                                                            <input type="file"
                                                                class="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100" />
                                                        </div>

                                                        <div class="flex items-center mt-4">
                                                            <input id="active" type="checkbox"
                                                                class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                                            <label for="active" class="ml-2 block text-sm text-gray-900">Active</label>
                                                        </div>

                                                        <div class="flex justify-end mt-6">
                                                            <button type="button"
                                                                class="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2">Cancel</button>
                                                            <button type="submit"
                                                                class="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline">Save</button>
                                                        </div>
                                                    </form>
                                                </div>

                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <input
                    className="border border-blue-600 rounded  text-gray-700 mr-3 py-1 px-2  focus:outline-blue-700"
                    type="text"
                    placeholder="Search..."
                    aria-label="Search input" />
            </div>

            <CategoryTable />
        </div>
    );
}

export default Category;