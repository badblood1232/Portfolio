
import Skills from './Skills.js';


import profile from '../images/profile2.jpg';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            I’m a Bachelor of Science in Information Technology graduate from Cebu Institute of Technology University with a strong passion for technology and problem-solving. 
             I enjoy coding in various programming languages and continuously seek opportunities to expand my knowledge. 
             I love experimenting with new tools and technologies to improve my skills and stay updated in the ever-evolving 
             tech landscape. Below are some of the key languages, tools, platforms, and technologies I’ve worked with:
          </p>
        </div>

        <div className='profile-container'>
          <img className='profile' src={profile} alt=""/>
    
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Skills</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='Git' />
        <Skills skill='Javascript' />
        <Skills skill='C++' />
        <Skills skill='Postman' />
        <Skills skill='Django' />
        <Skills skill='Python' />
        
      </div>
    </>
  )
}

export default About