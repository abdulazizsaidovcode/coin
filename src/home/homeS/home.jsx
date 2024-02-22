import React from 'react'
import HomeNavbar from './NavbarSection/homeNavbar'
import './home.css'
import AboutSection from './homeSection/aboutSection'
import About from './about/about'
import Analytics from './analytic/analytics'
import Footer from './footer/footer'
import Contact from './Contact/contact'

const Home = () => {
 
  return (
  
    <>
      <div className='homeBody  w-[1430px] mx-auto px-5'>
        <HomeNavbar />
        <section id='1' className='section'>
          <AboutSection />
        </section>
        <section id='2' className='section'>
          <Analytics />
        </section>
        <section id='3' className='section'>
          <About />
        </section>
        <section id='4' className='section'>
          <Contact />
        </section>
        <section id='footer' className='section'>
          <Footer />
        </section>
      </div>
    </>
  )
}
export default Home
