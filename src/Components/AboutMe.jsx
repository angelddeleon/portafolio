import React from 'react'
import Image from '../Images/Angel-De-Leon-Frontend-Web-Developer.JPG.png'

const AboutMe = () => {

  ScrollReveal().reveal('.about-image')

  return (
    <div className='about-container' id='Section-AboutMe'>

      <div className='about-image'>
        <img src={Image} alt="" />
      </div>

      <div className='about-text'>
        <h1>Hi, I'm Angel De Leon. <br />And I'm a Frontend Developer</h1>
        <p>My knowledge is focused in the Frontend with JavaScript and React. I'm an autodidact developer,that's mean that i can adapt and learn new frameworks.</p>
        <p>
          I have been 1 year mastering my habilities and creating personal projects.
          I love learn and grow as a person for colaborate with others and make better code 
        </p>
      </div>

    </div>
  )
}

export default AboutMe