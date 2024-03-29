import '../img/navIndex'
import { AiOutlineMenu, } from 'react-icons/ai'
import { CiLogin, } from 'react-icons/ci'
import { coinIcon, } from '../img/navIndex'
import { useState } from 'react'
import './homeNavbar.css'
import { Link } from 'react-router-dom'
// import { loadIcon } from '@iconify/react'

const HomeNavbar = () => {
    const activPage=window.location.pathname
    const navLinks=document.querySelectorAll('.sxh').
    forEach(link=>{
        if(link.href.includes(`${activPage}`)){
            link.classList.add('active')
        }
    })
    const styles = {
        NavUlstyle: "md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto pl-9 transition-all duration-500 ease-in",
        ButtonNav: "py-2 px-6 md:mr-0 mr-20 rounded  bg-[rgb(158,105,167)] outline-none  text-white hover:bg-[#BA68C8] hover:duration-500  flex items-center gap-2"
    }
    const [open, setOpen] = useState(false)
    return (
        <>
            <div className=' z-50  shadow-md  w-full fixed top-0 left-0 bg-[#FFFFFF] md:bg-[#FFFFFF] '>
                <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4  '>
                    <div className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
                        <a href="#1" className='flex'>
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
                        <li className='md:ml-8 text-xl md:my-0 my-7'>
                            <a href='#1' className='text-gray-800 hover:text-[#BA68C8] duration-500 sxh active '>Home</a>
                        </li>
                        <li className='md:ml-8 text-xl md:my-0 my-7'>
                            <a href='#2' className='text-gray-800 hover:text-[#BA68C8] duration-500 sxh '>Analytic</a>
                        </li>
                        <li className='md:ml-8 text-xl md:my-0 my-7'>
                            <a href='#3' className='text-gray-800 hover:text-[#BA68C8] duration-500 sxh '>About</a>
                        </li>
                        <li className='md:ml-8 text-xl md:my-0 my-7'>
                            <a href='#4' className='text-gray-800 hover:text-[#BA68C8] duration-500 sxh '>Contact</a>
                        </li>
                    </ul>
                    <Link to="/log-in" className={`${styles.ButtonNav} navButton `} >
                        <CiLogin className='navLogo' />
                        Sign in
                    </Link>
                </div>
            </div>
        </>
    )
}

export default HomeNavbar
