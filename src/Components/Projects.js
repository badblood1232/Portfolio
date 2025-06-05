import React from 'react';
import ProjectBox from './ProjectBox';
import todo from '../images/To-Do-List.jpg';
import stopwatch from '../images/Stop-Watch.jpg';
import digiclock from '../images/Digi-Clock.jpg';
import company from '../images/company.jpg';
import capstone from '../images/Capstone.jpg'
const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={todo} projectName="To-Do-List" />
        <ProjectBox projectPhoto={stopwatch} projectName="Stopwatch" />
        <ProjectBox projectPhoto={digiclock} projectName="Digital" />
        <ProjectBox projectPhoto={company} projectName="Company" />
         <ProjectBox projectPhoto={capstone} projectName="NarraLink" />
      </div>

    </div>
  )
}

export default Projects