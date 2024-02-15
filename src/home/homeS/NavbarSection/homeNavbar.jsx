import '../img/navIndex'
import {AiOutlineMenu,} from 'react-icons/ai'
import { coinIcon, } from '../img/navIndex'
import { useState } from 'react'
// import { loadIcon } from '@iconify/react'

const HomeNavbar = () => {
    const styles={
        NavUlstyle:"md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto pl-9 transition-all duration-500 ease-in",
        ButtonNav:"py-2 px-8 rounded md:ml-8 bg-[rgb(158,105,167)] outline-none  text-white hover:bg-[#BA68C8] hover:duration-500 "
    }
    let Links = [
        { name: "Home",link:'/' },
        { name: "About",link:'/' },
        { name: "Analytic",link:'/' },
        { name: "Contact",link:'/' },
    ]
    const [open,setOpen]=useState(false)
    return (
        <div className=' shadow-md  w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white  py-4 md:px-10 px-5'>
                <div className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
                    <img src={coinIcon} alt="coin image" className='mr-1 py-2 ' />
                    <h3 className='h3Radial'>Coin Exchange</h3>
                </div>
                <div onClick={()=>setOpen(!open)}>
                    <p className='text-black text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                        <AiOutlineMenu className={`${open ? 'close':'open'}`}/>
                    </p>
                </div>
                <ul className={`${styles.NavUlstyle} ${open ? 'top-[4.2rem] opacity-100':'top-[-490px] md:opacity-100 opacity-0'} `}>
                    {
                        Links.map((item)=>(
                            <li key={item.name} className='md:ml-8 text-xl md:my-0 my-7'>
                                <a href={item.link} className='text-gray-800 hover:text-[#BA68C8] duration-500'>{item.name}</a>
                            </li>
                        ))
                    }
                    <button className={`${styles.ButtonNav}`}>Sign in</button>
                </ul>
                

            </div>
        </div>
    )
}

export default HomeNavbar
