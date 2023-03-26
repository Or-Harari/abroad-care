import React from 'react'
import './ToggleMenu.css'
import { FaHome } from 'react-icons/fa';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { GiHairStrands } from 'react-icons/gi';
import { TbTestPipe } from 'react-icons/tb';
import { MdContactMail } from 'react-icons/md';
import { IconContext } from "react-icons";

export default function ToggleMenu({toglleMenu}) {
  return (
    <div >
            <div className='cover-menu' onClick={toglleMenu}></div>
    <div  className='main-toggle-menu'>
        <div className='grid-1-row toggle-box toggle-home'><FaHome className='box-icon'/><h4>Home</h4></div>
        <div className='grid-1-row toggle-box toggle-about'><AiFillQuestionCircle className='box-icon'/><h4>About</h4></div>

        <div className='grid-1-row toggle-box toggle-transplant'><TbTestPipe className='box-icon'/><h4>Compatible</h4></div>
        <div className='grid-1-row toggle-box toggle-contact'><GiHairStrands className='box-icon'/><h4>Transplant</h4></div>

        <div className='grid-1-row toggle-box toggle-blog'><MdContactMail className='box-icon'/><h4>Contact Us</h4></div>
        <div className='grid-1-row toggle-box toggle-compatible'><FaHome className='box-icon'/><h4>Blog</h4></div>
    </div>
    </div>
  )
}
