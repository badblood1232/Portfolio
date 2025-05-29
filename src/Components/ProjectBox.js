import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    "To-Do-ListDesc" : "A Todo List app made using React.js",
    "To-Do-ListGithub" : "https://github.com/badblood1232/To-Do-List",
   

    StopwatchDesc : "A Stopwatch app made using React.js",
    StopwatchGithub : "https://github.com/badblood1232/Stopwatch",


    DigitalDesc:"A Digital Clock app made using React.js",
    DigitalGithub: "https://github.com/badblood1232/Digital-Clock",

    CompanyDesc:"Full stack company website made using html, css and Django",
    CompanyGithub: "https://github.com/badblood1232/Companyprototype",
   
    
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <>
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>
        </div>
    </div>
      </>
  )
}

export default  ProjectBox