import React from 'react'
import './Footer.css'
import '../Grid.css'
import { BsInstagram ,BsFillEnvelopeFill,BsClock} from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';




export default function Footer() {
  return (
    <div className='main-footer'>
      <div className='container'>

      <div style={{minWidth:'450px'}} className='grid-2-row left-footer'>
        <img className='foot-logo' src='logoAbroadcare-1-1024x193.png'/>
        <p className='footer-1-p'>Experts in hair transplants</p>
        <h3 className='footer-h3'>Follow Us</h3>
        <a href="https://www.instagram.com/abroad.care/?igshid=YmMyMTA2M2Y%3D" target='_blank'><BsInstagram  className='insta-icon'/></a>
        <span style={{padding:'5px'}}></span>
        <FaFacebookF  className='insta-icon'/> 
        </div>


      <div style={{width:'20%'}}  className='grid-2-row right-footer'><h3 className='contact-footer'>Contact Us</h3>
      <ul className='footer-ul'> 
        <li> <FiPhoneCall  className='insta-icon'/> <h4>*5235</h4></li>
        <li > <BsFillEnvelopeFill  className='insta-icon'/> <h4>Support@abroadcare.com</h4></li>
        <li><BsClock  className='insta-icon'/> <h4>Monday to Friday 8:00 - 20:00</h4></li>
      </ul>
      
      </div>
      </div>
      </div>

  )
}
