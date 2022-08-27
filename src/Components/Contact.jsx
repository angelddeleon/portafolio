import linkedin from '../Images/logotipo-de-linkedin.png'
import github from '../Images/silueta-del-logo-de-github-en-un-cuadrado.png'
import tiktok from '../Images/tiktok.png'
import twitter from '../Images/icons8-twitter-circled-50.png'

const Contact = () => {

  const openInNewTab = url => {
    // 👇️ setting target to _blank with window.open
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <div className='section-contact' id='section-contact'>
      <div className='contact-text'>
      <h2>Let's Work Together</h2>
      <h3>¡Contact me!</h3>
      <h4>angeldeleonpr00@gmail.com</h4>
      </div>

      <div className='contact-credits'>
        <p>Copyright 2022/ Angel De Leon</p>
      
      <div className="social">

        <a onClick={() => openInNewTab("https://www.linkedin.com/in/angel-david-de-leon-rodriguez-frontend-web-developer/")}>
          <i><img src={linkedin} alt="" /></i>
        </a>

      <a onClick={() => openInNewTab("https://twitter.com/angelintechh")}>
        <i><img src={twitter} className="twitter" /></i>
      </a>

        <a onClick={() => openInNewTab("https://www.tiktok.com/@angelintechh")}>
          <i><img src={tiktok} alt="" /></i>
        </a>

        <a onClick={() => openInNewTab("https://github.com/angelddeleon")}>
          <i><img src={github} alt="" /></i>
        </a>
      </div>

      </div>
    </div>
  )
}

export default Contact