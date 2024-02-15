import React from 'react'
import HomeNavbar from './NavbarSection/homeNavbar'
import './home.css'
import AboutSection from './AboutSection/aboutSection'

const Home = () => {

  return (
    <>
      <div className=' homeBody w-[1140px ] mx-auto h-screen  '>
        <HomeNavbar />
        <AboutSection/>
      </div>
    </>
  )
}
export default Home
