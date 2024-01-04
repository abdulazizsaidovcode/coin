import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assits/IT-CA-logo.png'; // O'zgartiring, agar yo'l noto'g'ri bo'lsa

function SidebarTemplate() {
    const [isExpanded, setIsExpanded] = useState(window.innerWidth > 992);

    // Oyna o'lchamini kuzatish
    useEffect(() => {
        const handleResize = () => {
            setIsExpanded(window.innerWidth > 992);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div className={` bg-white h-full border-r ${isExpanded ? 'w-64' : 'w-20'} transition-width duration-300 ease-in-out `}>
                <div className="flex items-center justify-between h-16 border-b ">
                    <img className={`transition-all duration-300 ease-in-out ${isExpanded ? 'w-1/5 mx-3' : 'hidden'}`} src={img} alt="Logo" />
                    <button onClick={() => setIsExpanded(!isExpanded)} className="p-2 rounded-full focus:outline-none focus:bg-gray-100 hover:bg-gray-100 mr-2 ml-5">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isExpanded ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                            )}
                        </svg>
                    </button>
                </div>
                <div className="flex-grow overflow-y-auto">
                    <ul className="flex flex-col py-4">
                        <li className="px-5">
                            <div className="flex flex-row items-center h-8">
                                <div className="text-sm font-light tracking-wide text-gray-500">Menu</div>
                            </div>
                        </li>
                        {/* Dashboard Link */}
                        <li>
                            <Link to="/admin/dashboard" className="flex items-center h-11 focus:outline-none text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                <span className="inline-flex justify-center items-center ml-5">
                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                                </span>
                                <span className={`ml-2 ${isExpanded ? 'block' : 'hidden'}`}>Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/category" className="flex items-center h-11 focus:outline-none text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                <span className="inline-flex justify-center items-center ml-5">
                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                                </span>
                                <span className={`ml-2 ${isExpanded ? 'block' : 'hidden'}`}>Category</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default SidebarTemplate;
