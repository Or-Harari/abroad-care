import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import About from '../pages/About'
import './Navigation.css'
import '../Grid.css'
import ToggleMenu from './ToggleMenu'
import { FiPhoneCall } from 'react-icons/fi';
import { GrDocumentText } from 'react-icons/gr';

import MedicalTest from '../models/MedicalTest'


export default function Navigation({scrollPosOff,windowSize,color}) {

    const [windowResize,SetWindowResize] = useState(1);
    const [menuIsOpen, SetMenuIsOpen] = useState(false) 
    const [location, SetLocation] = useState('main');
    const[showTest,SetShowTest] =useState(false)

    const locations = useLocation();
    useEffect(()=>{
        
        console.log(locations.pathname);
        if(windowSize){
            let size = windowSize / 1000;
            if(windowSize > 700){
                SetMenuIsOpen(false)
            
        }
        }
       
    },[showTest,location,scrollPosOff,windowSize, menuIsOpen])

  
    const SetCorrectLocation = (event) => {
            SetLocation(event.target.id)
    }

    function toglleMenu(){
        if(menuIsOpen === false){
            SetMenuIsOpen(true)
        }
        else{
            SetMenuIsOpen(false)
        }
        
    }

    function toglleShowTest(){
       
        if(showTest === false){
            SetShowTest(true)
        }
        else{
            SetShowTest(false)
            console.log('shoen')
        }
        
    }

  return (
    <div>
    <div style= {scrollPosOff === true? {backgroundColor: color , backdropFilter: 'blur(5px)'} :{backgroundColor: color}}  className='main-nav'>
    <div style={showTest === true? {overflow:'hidden'}:null} className='nav-container'>
        <div className='flexing'>
    

{windowSize> 700 ? 

<div className='sdsd' >
<div className='grid-3-row'>
    
    <img className='logo1' src="logoAbroadcare-1-1024x193.png" alt="" />
    </div>
<div className='grid-3-row'>
        <ul className='nav-ul'>
            <li><Link id='main'className= {locations.pathname === '/'?'nav-link-active me-4':'nav-link me-4'} to='/' >Home</Link></li>
            <li><Link style={{width:'95px'}}  id='transplant' className= {locations.pathname === '/Transplent'?'nav-link-active':'nav-link'}to='/Transplent' >Hair Transplant</Link></li>
            <li><Link  id='contact' className= {locations.pathname === '/Contact'?'nav-link-active':'nav-link'} to='/Contact'>Contact</Link></li>
            <li><Link  id='about' className= {locations.pathname === '/About'?'nav-link-active':'nav-link'}  to='/About' >About</Link></li>
            {/* <li alt='Compatible Test' onClick={toglleShowTest} id='compatible' style={location === 'compatible'? { color:'black'}: {color:'rgb(97,99,236)'} } className='nav-link'><GrDocumentText /></li> */}
        </ul>
        </div>
        <div className='grid-3-row'><div className='phone-call'><FiPhoneCall className='contact-number'/><div className='num'>*0505</div></div></div>   
        </div>
        : 
        <div>
            <div onClick={toglleMenu} className='grid-3-row menu-icon'> <div className='menu' ></div> <div className='menu' ></div> <div className='menu' ></div></div>
                <div  className='grid-3-row'>
    
    <img className='logo1'  src="logoAbroadcare-1-1024x193.png" alt="" />
    </div>
        </div>
        
        }

    </div>
    <div id='med-wrapper' style={showTest? {visibility:'visible'}:{visibility:'none'}}>
    {showTest?<div onClick={toglleShowTest} id='cover-medical'></div>:null}
    {showTest?<MedicalTest/>:null}    
    </div>
    </div>
    
    {menuIsOpen? <ToggleMenu toglleMenu={toglleMenu}></ToggleMenu>: null}
    
    </div>
    
    </div>
  )
}
