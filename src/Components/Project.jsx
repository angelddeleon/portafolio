import React from 'react'
import img from '../Images/image_projects/reactflix.png'

const Project = ({project}) => {

  let img = "reactFlix"


  return (
    <div className='project'>
    <img img={ require('../Images/image_projects/reactflix.png').default } />

    <div className="project-text">
      <h3>{project.title}</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, laboriosam ducimus dicta hic illum harum?</p>
    </div>

    <div className='project-buttons'>
      <a href='https://app.netlify.com/teams/angelddeleon/overview'>Code</a>
      <a href=''>See Live</a>
    </div>

  </div>
  )
}

export default Project