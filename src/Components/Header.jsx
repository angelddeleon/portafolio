import React from 'react'

const Header = () => {
  return (
    <div className='header-container' >
      <div>
        <h2>Angel De Leon</h2>
      </div>

      <div className='header-links'>
        <ul>
          <li><a href='' className='resume'>Resume</a></li>
          <li><a href='#section-AboutMe'>About me</a></li>
          <li><a href='#section-project'>Projects</a></li>
          <li><a href='#section-contact'>Contact me</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header