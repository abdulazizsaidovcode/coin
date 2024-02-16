import React from 'react'
import HomeNavbar from './NavbarSection/homeNavbar'
import './home.css'
import AboutSection from './homeSection/aboutSection'
import About from './about/about'
import Analytics from './analytic/analytics'

const Home = () => {

  return (
    <>
      <div className='homeBody  w-[1430px] mx-auto px-5   '>
        <HomeNavbar />
        <AboutSection />
        <Analytics/>
        <About />
      </div>
    </>
  )
}
export default Home
