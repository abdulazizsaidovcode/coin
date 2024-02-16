import '../img/navIndex'
import { AiOutlineMenu, } from 'react-icons/ai'
import { CiLogin, } from 'react-icons/ci'
import { coinIcon, } from '../img/navIndex'
import { useState } from 'react'
import ScrollAnimation from '../scrollAnimation/scrollAnimation'
// import { loadIcon } from '@iconify/react'

const HomeNavbar = () => {
    const styles = {
        NavUlstyle: "md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto pl-9 transition-all duration-500 ease-in",
        ButtonNav: "py-2 px-6 md:mr-0 mr-20 rounded  bg-[rgb(158,105,167)] outline-none  text-white hover:bg-[#BA68C8] hover:duration-500  flex items-center gap-2"
    }
    let Links = [
        { name: "Home", link: '/' },
        { name: "About", link: '/' },
        { name: "Analytic", link: '/' },
        { name: "Contact", link: '/' },
    ]
    const [open, setOpen] = useState(false)
    return (
        <>
            <ScrollAnimation />
            <div className='  shadow-md  w-full fixed top-0 left-0'>
                <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 '>
                    <div className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
                        <a href="" className='flex'>
                            <img src={coinIcon} alt="coin image" className='mr-1 py-2 ' />
                            <h3 className='h3Radial'>Coin Exchange</h3>
                        </a>
                    </div>
                    <div onClick={() => setOpen(!open)}>
                        <p className='text-black text-3xl absolute right-8 top-5 cursor-pointer md:hidden '>
                            <AiOutlineMenu className={`${open ? 'close' : 'open'}`} />
                        </p>
                    </div>
                    <ul className={`${styles.NavUlstyle} ${open ? 'top-[4.2rem] opacity-100' : 'top-[-490px] md:opacity-100 opacity-0'} `}>
                        {
                            Links.map((item) => (
                                <li key={item.name} className='md:ml-8 text-xl md:my-0 my-7'>
                                    <a href={item.link} className='text-gray-800 hover:text-[#BA68C8] duration-500'>{item.name}</a>
                                </li>
                            ))
                        }

                    </ul>
                    <button className={`${styles.ButtonNav} `} src>
                        <CiLogin className='' />
                            Sign in
                    </button>


                </div>
            </div>


            {/* <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </a>
                    <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
                        <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}

        </>
    )
}

export default HomeNavbar
