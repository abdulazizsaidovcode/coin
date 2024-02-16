import React from 'react'
import HomeNavbar from './NavbarSection/homeNavbar'
import './home.css'
import AboutSection from './AboutSection/aboutSection'

const Home = () => {

  return (
    <>
      <div className=' homeBody w-[1430px] mx-auto px-5   '>
        <HomeNavbar />
        <AboutSection/>
      </div>
    </>
  )
}
export default Home
