import React from 'react'
import './ToggleMenu.css'
import { FaHome } from 'react-icons/fa';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { GiHairStrands } from 'react-icons/gi';
import { TbTestPipe } from 'react-icons/tb';
import { MdContactMail } from 'react-icons/md';
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom';

export default function ToggleMenu({toglleMenu}) {
  return (
    <div >
            <div style={{backdropFilter:'blur(20px)'}} className='cover-menuu' onClick={toglleMenu}></div>
    <div  className='main-toggle-menu'>
        <div className='grid-1-row toggle-box toggle-home'><Link onClick={toglleMenu} to='/'><h4>Home</h4></Link></div>
        <div className='grid-1-row toggle-box toggle-about'><Link onClick={toglleMenu} to='/about'><h4>About</h4></Link></div>

        <div className='grid-1-row toggle-box toggle-transplant'><Link onClick={toglleMenu} to='/Compatible'><h4>Compatible</h4></Link></div>
        <div className='grid-1-row toggle-box toggle-contact'><Link onClick={toglleMenu} to='/Transplent'><h4>Hair Transplant</h4></Link></div>

        <div className='grid-1-row toggle-box toggle-blog'><Link onClick={toglleMenu} to='/contact'><h4>Contact Us</h4></Link></div>
    </div>
    </div>
  )
}
