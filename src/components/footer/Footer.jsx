import React from 'react'
import { Link } from "react-router-dom";
import { AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import './footer.css';

const Footer = () => {
  return (
    <footer className='icons'>
      <Link to='https://github.com/Canadianfaller7' target="_blank"><AiFillGithub /></Link>
      <Link to='https://www.linkedin.com/in/spencer-merrill-jrdevoloper777/' target="_blank"><AiFillLinkedin /></Link>
    </footer>
  )
}

export default Footer