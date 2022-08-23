import React from 'react'

const Header = () => {
  const openInNewTab = url => {
    // 👇️ setting target to _blank with window.open
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <div className='header-container' >
      <div>
        <h2>Angel De Leon</h2>
      </div>

      <div className='header-links'>
        <ul>
          <li><a onClick={() => openInNewTab("https://drive.google.com/file/d/1-Uq1wCMWZiCzfSS8jki-g2HXHQ3brZDs/view?usp=sharing")} className='resume'>Resume</a></li>
          <li><a href='#section-AboutMe'>About me</a></li>
          <li><a href='#section-project'>Projects</a></li>
          <li><a href='#section-contact'>Contact me</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header