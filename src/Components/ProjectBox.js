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
    
   NarraLinkDesc: "A comprehensive platform integrating AI technologies into intellectual property management systems. Built to streamline IP workflows, enhance user experience, and deliver powerful features for efficient management. Developed using React.js, Django, and OpenAI APIs.",
   NarraLinkGithub: "https://github.com/EarlClaro/IPAMS_06-Main/tree/master",

   JwtAuthDesc: "A a full-stack JWT-based authentication system with CRUD functionality, built using Express.js for the backend and Redux for state management. The frontend is styled with Material UI (MUI), providing a responsive and modern interface for user interaction.",
   JwtAuthGithub: "https://github.com/badblood1232/jwtauth-w-crud-redux-mui",
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