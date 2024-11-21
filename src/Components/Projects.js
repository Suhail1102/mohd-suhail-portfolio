import React from 'react';
import ProjectBox from './ProjectBox';
import jokeimage from '../images/jokeimage.png';
import newsimage from '../images/newsimage.jpg';
import shoppers from '../images/shopperhub.png';
import insta from '../images/insta.png';


const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={newsimage} projectName="NewsHippo" />
        <ProjectBox projectPhoto={jokeimage} projectName="Random_Jokes_Generator" />
        <ProjectBox projectPhoto={shoppers} projectName="Shoppers_Hub" />
        <ProjectBox projectPhoto={insta} projectName="Social_Media_Downloader" />
       
       
      </div>

    </div>
  )
}

export default Projects