import React, { useState } from "react";
import coinlogo from "./img/ep_coin.png";
import img1 from "./img/Rectangle 102.png";
import img2 from "./img/image 1.png";
import img3 from "./img/Rectangle.png";
import img4 from "./img/Rectangle 103.png";
import { Button } from "flowbite-react";
import "./Home.css"

function Home() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            {/* Nav start */}
            <div>
                <nav className="flex justify-between items-cente nav px-5 font py-3 md:px-20 text-white w-full">
                    <div className="flex items-center space-x-4">
                        <img src={coinlogo} alt="coinlogo" className="h-8 w-8" />
                        <span className="text-xl font-semibold">Coin Exchange</span>
                    </div>
                    <div className="hidden md:flex space-x-8">
                        <a href="#" className="hover:text-gray-300">About</a>
                        <a href="#" className="hover:text-gray-300">Contact</a>
                        <a href="#" className="hover:text-gray-300">Coins</a>
                        <a href="#" className="hover:text-gray-300">Analytic</a>
                        <a href="#" className="hover:text-gray-300">Sign in</a>
                    </div>
                    {/* Mobil menyular uchun tugma */}
                    <div className="md:hidden">
                        <button className="text-white" onClick={handleMenuToggle}>
                            {/* Menyu tugmasi ikonkasi (masalan, hamburger menu) */}
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>/
                            </svg>
                        </button>
                    </div>
                </nav>
                {/* Mobil versiyada menuni ochish */}
                {menuOpen && (
                    <div className="md:hidden nav text-white">
                        <a href="#" className="block py-2 px-4 hover:bg-slate-700">About</a>
                        <a href="#" className="block py-2 px-4 hover:bg-slate-700">Contact</a>
                        <a href="#" className="block py-2 px-4 hover:bg-slate-700">Coins</a>
                        <a href="#" className="block py-2 px-4 hover:bg-slate-700">Analytic</a>
                        <a href="#" className="block py-2 px-4 hover:bg-slate-700">Sign in</a>
                    </div>
                )}
            </div>
            {/* Nav end */}
            {/* fiirst section start */}
            <div className="">
                <div className="body">
                    <div className="flex items-center flex-col md:px-96">
                        <p className="text-white text-5xl mt-10">Edu Coin System</p>
                        <p className="text-white text-3xl mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                            book. It has survived not only five centuries, but also the leap into electronic</p>
                    </div>
                    <div className="mt-20 relative">
                        <div className="flex justify-center">
                            <img src={img1} alt="img1" />
                        </div>
                        <div className="absolute right-14 top-3/4">
                            <img src={img2} alt="img1" />
                        </div>
                    </div>
                </div>
            </div>
            {/* fiirst section end */}
            {/* second section start */}
            <div style={{ fontFamily: 'Inika' }} className="lg:flex mt-96 md:px-20 hari">
                <div className="">
                    <div>
                        <p className="text-5xl">Download now mobile app</p>
                        <p className=" text-3xl mt-10 w-9/12">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                    </div>
                    <div className="flex justify-between w-2/3 mt-10">
                        <Button className="btn-2 text-slate-950">
                            <svg width="36" height="40" viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M34.6968 22.1633L28.1651 25.86L22.3067 20.0383L28.2118 14.17L34.6968 17.84C35.0795 18.0564 35.3979 18.3706 35.6194 18.7504C35.841 19.1302 35.9577 19.562 35.9577 20.0017C35.9577 20.4413 35.841 20.8731 35.6194 21.2529C35.3979 21.6327 35.0795 21.9469 34.6968 22.1633ZM0.228417 1.53999C0.104733 1.84025 0.0413071 2.16191 0.0417504 2.48665V37.515C0.0417504 37.8767 0.11675 38.2133 0.248417 38.515L18.8401 20.0367L0.228417 1.53999ZM20.5734 18.315L26.0034 12.9183L3.75008 0.324986C3.2731 0.050878 2.71757 -0.054238 2.17342 0.0266523L20.5734 18.315ZM20.5734 21.76L2.24008 39.9817C2.73675 40.0417 3.26008 39.955 3.75008 39.6767L25.9568 27.11L20.5734 21.76Z" fill="black" />
                            </svg>
                            <p className="text-2xl">Google Play</p>
                        </Button>
                        <Button style={{fontSize: '20px'}} className="btn-2 text-slate-950">
                            <svg width="34" height="40" viewBox="0 0 34 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.9551 0.0200023C24.8701 -0.0749977 21.8076 0.0575023 19.1426 2.95C16.4776 5.84 16.8876 9.155 16.9476 9.24C17.0076 9.325 20.7476 9.4575 23.1351 6.095C25.5226 2.7325 25.0401 0.117502 24.9551 0.0200023ZM33.2401 29.3525C33.1201 29.1125 27.4276 26.2675 27.9576 20.7975C28.4876 15.325 32.1451 13.825 32.2026 13.6625C32.2601 13.5 30.7101 11.6875 29.0676 10.77C27.8616 10.1231 26.5269 9.75252 25.1601 9.685C24.8901 9.6775 23.9526 9.4475 22.0251 9.975C20.7551 10.3225 17.8926 11.4475 17.1051 11.4925C16.3151 11.5375 13.9651 10.1875 11.4376 9.83C9.82006 9.5175 8.10506 10.1575 6.87756 10.65C5.65256 11.14 3.32256 12.535 1.69256 16.2425C0.0625587 19.9475 0.915059 25.8175 1.52506 27.6425C2.13506 29.465 3.08756 32.4525 4.70756 34.6325C6.14756 37.0925 8.05756 38.8 8.85506 39.38C9.65256 39.96 11.9026 40.345 13.4626 39.5475C14.7176 38.7775 16.9826 38.335 17.8776 38.3675C18.7701 38.4 20.5301 38.7525 22.3326 39.715C23.7601 40.2075 25.1101 40.0025 26.4626 39.4525C27.8151 38.9 29.7726 36.805 32.0576 32.5575C32.9251 30.5825 33.3201 29.515 33.2401 29.3525Z" fill="black" />
                                <path d="M24.9551 0.0200023C24.8701 -0.0749977 21.8076 0.0575023 19.1426 2.95C16.4776 5.84 16.8876 9.155 16.9476 9.24C17.0076 9.325 20.7476 9.4575 23.1351 6.095C25.5226 2.7325 25.0401 0.117502 24.9551 0.0200023ZM33.2401 29.3525C33.1201 29.1125 27.4276 26.2675 27.9576 20.7975C28.4876 15.325 32.1451 13.825 32.2026 13.6625C32.2601 13.5 30.7101 11.6875 29.0676 10.77C27.8616 10.1231 26.5269 9.75252 25.1601 9.685C24.8901 9.6775 23.9526 9.4475 22.0251 9.975C20.7551 10.3225 17.8926 11.4475 17.1051 11.4925C16.3151 11.5375 13.9651 10.1875 11.4376 9.83C9.82006 9.5175 8.10506 10.1575 6.87756 10.65C5.65256 11.14 3.32256 12.535 1.69256 16.2425C0.0625587 19.9475 0.915059 25.8175 1.52506 27.6425C2.13506 29.465 3.08756 32.4525 4.70756 34.6325C6.14756 37.0925 8.05756 38.8 8.85506 39.38C9.65256 39.96 11.9026 40.345 13.4626 39.5475C14.7176 38.7775 16.9826 38.335 17.8776 38.3675C18.7701 38.4 20.5301 38.7525 22.3326 39.715C23.7601 40.2075 25.1101 40.0025 26.4626 39.4525C27.8151 38.9 29.7726 36.805 32.0576 32.5575C32.9251 30.5825 33.3201 29.515 33.2401 29.3525Z" fill="black" />
                            </svg>
                            <p className="text-2xl">App Store</p>
                        </Button>
                    </div>
                </div>
                <div className="relative w-2/3">
                    <img src={img3} alt="" />
                    <img style={{ zIndex: '-1' }} className="top-20 absolute right-8" src={img4} alt="" />
                </div>
            </div>
            {/* second section end */}
            {/* footer start */}
            <footer className="mt-20 foot-bg w-full">
                <div className=" h-4/5">
                    
                </div>
                <div style={{border: '1px solid white'}}></div>
                <div className="text-white flex justify-between p-9">
                    <p>©1997, 29-maktab.</p>
                    <p>Powered by: IT City Academy</p>
                </div>
            </footer>
            {/* footer end */}
        </div>
    );
}

export default Home;
