import React from 'react'
import { homeCoin, mainScreen } from '../img/navIndex'

const AboutSection = () => {
  return (
    <div className='aboutSection  flex '>
      <div className=''>
        <h1 className=''>Work  at the speed
          of thought</h1>
          <p>Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.</p>

      </div>
      <div className=''>
        <img src={mainScreen} alt="" className='w-80' />
      </div>
    </div>
  )
}

export default AboutSection
