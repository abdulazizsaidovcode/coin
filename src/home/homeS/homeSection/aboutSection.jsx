import { Frame, Frame2, Highlight, chart3, group, mainScreen } from '../img/navIndex'
import './aboutSection.css'

const AboutSection = () => {
  return (
    <section className='w-full aboutBackground' id="1" >
      <img src={Frame} className=' frame relative top-40 left-[-3rem] md:block hidden' alt="" />
      <div className='max-w-screen-xl md:flex block  items-center justify-between mx-auto  md:mt-[2rem] mt-[rem]'>
        <div className=' md:w-[40%] md:mt-[-5rem]'>
          <p className='text-sm md:w-[55%] md:text-start text-center mt-2 text-[#8794BA] '> Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.</p>
          <img src={Highlight} alt="image" className='relative top-[-20rem] left-[25rem] md: md:block hidden ' />
          <img src={group} alt="image" className='aboutGroup' />
        </div>
        <div className='md:w-[60%] relative'>
          <h1 className='text-5xl md:w-[70%] w-[100%] md:text-start text-center font-extrabold  '>Work  at the speed
            of thought</h1>
          <img src={chart3} alt="chart" className='mainImage absolute md:block hidden md:top-20 md:left-[-8rem] left-[4.5rem] top-40  w-80 ' />
          <img src={mainScreen} alt="image " className='w-full mainImage1' />
          <img src={Frame2} className='relative top-[-10rem] md:block hidden md:left-[-5rem] left-[23rem] frame2 ' alt="" />
        </div>
      </div>
    </section>
  )
}

export default AboutSection
