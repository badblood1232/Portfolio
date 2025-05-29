import React from 'react';
import Lottie from  "lottie-react";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import Star from '../images/stars.jpg';


const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There! I'M <b>JOHN MC LIENT NGUJO</b></h1>
          <Typed/>   
        </div>

        
  
       
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            I am a curious and driven individual who enjoys learning new things and taking on challenges. 
            In my free time, I enjoy exploring technology, solving puzzles, and working on creative projects. <br /><br />
            One of my goals is to become a well-rounded developer, and to support that, I’ve been dedicating time to learning new programming languages and building personal projects. This mindset keeps me motivated and focused on continuous improvement.
          
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Star} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home