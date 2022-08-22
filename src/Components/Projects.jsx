
/*Images Projects*/
import img from '../Images/image_projects/reactflix.png'
import img1 from '../Images/image_projects/control_expenses.png'
import img2 from '../Images/image_projects/cryptoapp.png'
import img3 from '../Images/image_projects/fyloweb.png'

const Projects = () => {

   const openInNewTab = url => {
    // 👇️ setting target to _blank with window.open
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <div className="section-project" id='section-project'>
      <h2>My Projects</h2>

      <div className='projects-container'>

      <div className='project'>
        <img src={img} alt="" />

          <div className="project-text">
            <h3>ReactFlix</h3>
            <p>You will find every movie that you want. This is an app with a design similar to Netflix. It was created with an API for all the solicited information from the movies.</p>
          </div>

          <div className='project-buttons'>
          <a onClick={() => openInNewTab("https://github.com/angelddeleon/reactFlix")}>Code</a>
          <a onClick={() => openInNewTab("https://reactflix1.netlify.app")}>See Live</a>
          </div>
        </div>
        <div className='project'>
        <img src={img1} alt="" />

          <div className="project-text">
            <h3>Control Expenses</h3>
            <p>This app helps you with your finance. Lets you make for your month and allows you to create each expense from food to your hobbies making you take control of these.</p>
          </div>


          <div className='project-buttons'>
          <a onClick={() => openInNewTab("https://github.com/angelddeleon/control_expensess")}>Code</a>
          <a onClick={() => openInNewTab("https://controlexpenses.netlify.app")}>See Live</a>
          </div>
        </div>

        <div className='project'>
        <img src={img2} alt="" />

          <div className="project-text">
            <h3>CryptoApp</h3>
            <p>Its a converter of cryptos to traditional coins, use an Api to obtain the data and show the price of the coin to another, show the image of the crypto and the last price.</p>
          </div>

          <div className='project-buttons'>
          <a onClick={() => openInNewTab("https://github.com/angelddeleon/cryptoApp")}>Code</a>
          <a onClick={() => openInNewTab("https://cryptooappp.netlify.app")}>See Live</a>
          </div>
        </div>

        <div className='project'>
        <img src={img3} alt="" />

          <div className="project-text">
            <h3>Fylo Web</h3>
            <p>Result of a layout for Static Web with a modern design</p>
          </div>

          <div className='project-buttons'>
            <a onClick={() => openInNewTab("https://github.com/angelddeleon/Fylo_css")}>Code</a>
            <a onClick={() => openInNewTab("https://fyloowebb.netlify.app")}>See Live</a>
          </div>
        </div>



      </div>
    </div>
  )
}

export default Projects