import React, { useState } from 'react';
import './Home.css';
import bgHome from "./img/Rectangle 102.png";
import bgHome1 from "./img/image 1.png";
import bgPhone from "./img/Rectangle.png";
import bginput from "./img/Rectangle 104.png";

function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <a href="https://flowbite.com/" className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </a>
                    <button onClick={toggle} type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M4 5h16v2H4V5zm0 4h16v2H4v-2zm0 4h16v2H4v-2z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 dark:text-gray-400" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 dark:text-gray-400" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 dark:text-gray-400" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 dark:text-gray-400" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 dark:text-gray-400" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 dark:text-gray-400" aria-current="page">Home</a>
                            </li>
                            {/* ... more nav items ... */}
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='body lex items-center justify-center h-screen w-full'>
                {/* first section start */}
                <div className="flex justify-center items-center flex-col flex-wrap px-20 pt-8">
                    <h1 className='mt-12 coinedu flex-wrap text-xl px-10'>Edu Coin System</h1>
                    <p className='mt-6 paragraf md:w-3/5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                </div>
                {/* first section end */}


                {/* second section start */}
                <div className='flex justify-center items-center flex-wrap py-20'>
                    <img src={bgHome} alt='Rasm' className=' flex justify-center items-center w-4/5'>
                    </img>
                </div>
                {/* second section end */}


                {/* thied section start */}
                <div className='flex justify-center items-center flex-wrap px-20 '>
                    <img src={bgHome1} className='flex justify-center items-center bghome ' ></img>
                </div>
                {/* third section end */}


                {/* fourth section start */}
                <div className='flex flex-wrap justify-center flex-col mt-2 px-12'>
                    <h2 className='flex flex-wrap  flex-col  dowland mt-10'>Download now mobile app</h2>
                    <p className='flex flex-wrap  flex-col mt-10 loremE'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                    <img src={bgPhone} className='flex justify-center items-center flex-wrap phone' width={500}></img>
                </div>
                {/* fourth section end */}


                                <div className='flex justify-center  flex-col flex-wrap px-20 '>
                    <img src={bginput} className='flex flex-wrap items-center inputlar ' width={200}></img>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <rect width="40" height="40" fill="white" />
                        <path d="M36.6968 22.1633L30.1651 25.86L24.3067 20.0383L30.2118 14.17L36.6968 17.84C37.0795 18.0564 37.3979 18.3706 37.6194 18.7504C37.841 19.1302 37.9577 19.562 37.9577 20.0017C37.9577 20.4413 37.841 20.8731 37.6194 21.2529C37.3979 21.6327 37.0795 21.9469 36.6968 22.1633ZM2.22842 1.53999C2.10473 1.84025 2.04131 2.16191 2.04175 2.48665V37.515C2.04175 37.8767 2.11675 38.2133 2.24842 38.515L20.8401 20.0367L2.22842 1.53999ZM22.5734 18.315L28.0034 12.9183L5.75008 0.324986C5.2731 0.050878 4.71757 -0.054238 4.17342 0.0266523L22.5734 18.315ZM22.5734 21.76L4.24008 39.9817C4.73675 40.0417 5.26008 39.955 5.75008 39.6767L27.9568 27.11L22.5734 21.76Z" fill="black" />
                    </svg>
                </div>




            </div>
        </div>



    );
}
export default Home