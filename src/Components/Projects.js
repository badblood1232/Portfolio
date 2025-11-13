
import ProjectBox from './ProjectBox';


import company from '../images/company.jpg';
import capstone from '../images/Capstone.jpg'
import jwt from '../images/crud.jpg'
import trip from '../images/tripairify.jpg'

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={company} projectName="Company" />
        <ProjectBox projectPhoto={capstone} projectName="NarraLink" />
        <ProjectBox projectPhoto={jwt} projectName="JwtAuth" />
        <ProjectBox projectPhoto={trip} projectName="Tripairify" />
      </div>

    </div>
  )
}

export default Projects