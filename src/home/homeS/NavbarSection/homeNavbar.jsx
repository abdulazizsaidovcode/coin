import React from 'react'
import '../img/navIndex'
import { ep_coint } from '../img/navIndex'

const homeNavbar = () => {
    return (
        <div className=' shadow-md  w-full fixed top-0 left-0'>
            <div className='md:flex  py-4'>
               <img src={ep_coint} alt="coin image" />
            </div>
        </div>
    )
}

export default homeNavbar
