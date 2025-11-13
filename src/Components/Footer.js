
import {FaGithub} from "react-icons/fa";
import {GrMail} from "react-icons/gr";


const Footer = () => {
  return (
    <footer>
      <div className='footerLinks'>
        <a href="https://github.com/badblood1232" target='_blank' rel="noreferrer"><FaGithub/></a>
        <a href='mailTo:ngujojohn123@gmail.com' target='_blank' rel="noreferrer"><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer