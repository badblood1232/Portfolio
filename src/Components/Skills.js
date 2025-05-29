import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import {FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap} from "react-icons/fa";
import {DiNodejs, DiJavascript1,DiDjango} from "react-icons/di";
import {SiExpress, SiMongodb, SiPostman, SiVercel} from "react-icons/si";

const Skills = ({skill}) => {
    const icon = {
        'C++': <CgCPlusPlus/>,
        Postman: <SiPostman/>,
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Node : <DiNodejs/>,
        Express : <SiExpress/>,
        Git : <FaGitAlt/>,
        Django : <DiDjango/>,
        Python : <FaPython/>,
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
