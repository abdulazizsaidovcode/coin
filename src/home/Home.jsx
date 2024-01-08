
import React, { useState } from 'react';
import './Home.css';
import { Navbar, NavbarBrand, } from 'flowbite-react';
import bgHome from "./img/Rectangle 102.png";
import bgHome1 from "./img/image 1.png";
import bgPhone from "./img/Rectangle.png";
import bginput from "./img/Rectangle 104.png";


function Home() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <nav class="bg-white border-gray-200 dark:bg-gray-900">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </a>
                    <button onClick={toggle} type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div id="navbar-default" className={`${isOpen ? '' : 'hidden'} absolute top-10 right-0 mt-2 py-2 w-80 bg-white rounded-xl shadow-xl z-20`}>
                        <div className="px-6 pt-4 pb-2 text-center flex justify-between">
                            <button onClick={toggle} className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline'>Close</button>
                        </div>
                        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                            </li>
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