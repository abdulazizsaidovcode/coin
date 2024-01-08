
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
        <div className='body lex items-center justify-center h-screen  w-full z-10'>
            <Navbar className='navbarbrand flex justify-center flex-wrap items-center ml-4 text-xl'>
                <NavbarBrand href='/' className='mt-6 '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                        <path d="M5.53437 19.8494L6.55594 21.8619C5.85594 22.5509 5.46875 23.3012 5.46875 24.0625C5.46875 26.8756 10.7778 29.5312 17.5 29.5312C24.2222 29.5312 29.5312 26.8756 29.5312 24.0625C29.5312 23.3012 29.1419 22.5531 28.4441 21.8641L29.4853 19.8669C30.8962 21.0481 31.7188 22.4787 31.7188 24.0625C31.7188 28.4966 25.2744 31.7187 17.5 31.7187C9.72563 31.7187 3.28125 28.4966 3.28125 24.0625C3.28125 22.47 4.1125 21.035 5.53437 19.8494Z" fill="white" />
                        <path d="M5.53437 13.2869L6.55594 15.2994C5.85594 15.9906 5.46875 16.7409 5.46875 17.5C5.46875 20.3131 10.7778 22.9687 17.5 22.9687C24.2222 22.9687 29.5312 20.3131 29.5312 17.5C29.5312 16.7387 29.1419 15.9906 28.4441 15.3016L29.4853 13.3044C30.8962 14.4856 31.7188 15.9162 31.7188 17.5C31.7188 21.9341 25.2744 25.1562 17.5 25.1562C9.72563 25.1562 3.28125 21.9341 3.28125 17.5C3.28125 15.9075 4.1125 14.4725 5.53437 13.2869Z" fill="white" />
                        <path d="M17.5 18.5938C9.72563 18.5938 3.28125 15.3716 3.28125 10.9375C3.28125 6.50344 9.72563 3.28125 17.5 3.28125C25.2744 3.28125 31.7188 6.50344 31.7188 10.9375C31.7188 15.3716 25.2744 18.5938 17.5 18.5938ZM17.5 16.4062C24.2222 16.4062 29.5312 13.7506 29.5312 10.9375C29.5312 8.12437 24.2222 5.46875 17.5 5.46875C10.7778 5.46875 5.46875 8.12437 5.46875 10.9375C5.46875 13.7506 10.7778 16.4062 17.5 16.4062Z" fill="white" />
                    </svg> Coin Exchange
                </NavbarBrand>
                <ul className='mt-8 flex justify-center items-center ml-4 text-xl'>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Coins</li>
                    <li>Analytic</li>
                    <li>Sign in</li>
                </ul>
            </Navbar>
            <div className="flex justify-center items-center flex-col flex-wrap px-20 ">
                <h1 className='flex justify-center items-center  mt-12 coinedu flex-wrap flex-col text-xl px-10'>Edu Coin System</h1>
                <p className='mt-6  flex justify-center items-center paragraf px-64'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
            </div>

            <div className='flex justify-center items-center flex-wrap px-40 py-20'>
                <img src={bgHome} alt='Rasm' className=' flex justify-center items-center'>
                </img>
            </div>

            <div className='flex justify-center items-center flex-wrap px-20 '>
                <img src={bgHome1} className='flex justify-center items-center bghome ' ></img>
            </div>



            <div className='flex flex-wrap justify-center flex-col mt-2 px-12'>
                <h2 className='flex flex-wrap  flex-col  dowland px-20 mt-10'>Download now mobile app</h2>
                <p className='flex flex-wrap  flex-col px-20 mt-10 loremE'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                 <img src={bgPhone} className='flex justify-center items-center flex-wrap phone' width={500}></img>
            </div> 
           

            <div className='flex justify-center  flex-col flex-wrap px-20 '>

              <img src={bginput} className='flex flex-wrap items-center inputlar ' width={200}></img>
               <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" fill="white"/>
                <path d="M36.6968 22.1633L30.1651 25.86L24.3067 20.0383L30.2118 14.17L36.6968 17.84C37.0795 18.0564 37.3979 18.3706 37.6194 18.7504C37.841 19.1302 37.9577 19.562 37.9577 20.0017C37.9577 20.4413 37.841 20.8731 37.6194 21.2529C37.3979 21.6327 37.0795 21.9469 36.6968 22.1633ZM2.22842 1.53999C2.10473 1.84025 2.04131 2.16191 2.04175 2.48665V37.515C2.04175 37.8767 2.11675 38.2133 2.24842 38.515L20.8401 20.0367L2.22842 1.53999ZM22.5734 18.315L28.0034 12.9183L5.75008 0.324986C5.2731 0.050878 4.71757 -0.054238 4.17342 0.0266523L22.5734 18.315ZM22.5734 21.76L4.24008 39.9817C4.73675 40.0417 5.26008 39.955 5.75008 39.6767L27.9568 27.11L22.5734 21.76Z" fill="black"/>
                </svg>
            </div>

             

         
        </div>



    );
}
export default Home