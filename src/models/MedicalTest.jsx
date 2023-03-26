import React, { useEffect, useState } from 'react'
import Canvas from './Canvas';
import { BsCheckLg } from 'react-icons/bs'

import './MedicalTest.css'

export default function MedicalTest() {

    const UserTestData = { 
        Page1:{
            FullName:'',
            Email:'',
            PhoneNumber:'',
            Age:0,
            Smoke:true,
            Finish:true

        },
        Page2:{
            alcohol:false,
            drugs:false,
            serguries:false,
            Finish:false,

            disease:{
                diabetes:false,
                heartIllness:false,
                highBloodPreasure:false,

            }

        },
        Page3:{
            Finish:false
        },
        
            
    }

    const [formError, SetFormError] = useState(''); 

    const [currPage, SetCurrPage] = useState(1);
    //User information//
    const [name ,SetName] = useState('') 
    const [phoneNumber ,SetPhoneNumber] = useState('')
    const [age ,SetAge] = useState(0)  
    const [email ,SetEmail] = useState('')
    const [smoking,SetSmoking] =useState(false);
    const [userInformationFinished, SetUserInformationFinished] = useState(false);
    const [SecongPageFinished, SetSecongPageFinished] = useState(false);
    const [Page3Finished, SetPage3Finished] = useState(false);

    
    const [title, SetTitle] =useState('User Info');
    

    useEffect(()=>{

    },[formError,smoking,currPage])


    function ValidateEmail(mail) 
    {
     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
      {
        return (true)
      }else
        
        return (false)
    }
     function SubmittedOrNext(event) {
        event.preventDefault();
        if(currPage === 1){

                if(name.length  < 2){
                    SetFormError('Please make sure to enter your full name')
                return;
                }
                if(phoneNumber.length < 7){
                    SetFormError('please add a valid numner')
                    return;
                }
                if(age.length === ''){
                    SetFormError('please make sure to fill in your age')
                    return;
                }
                if(email.length>1){
                  let validateEmail =  ValidateEmail(email)
                        if(validateEmail === true){
                            console.log(validateEmail)
                        }
                        else{
                           return SetFormError('Please enter a valid Email')
                        }
                        console.log(validateEmail)
                }
                SetUserInformationFinished(true)
                let s = currPage
                s++
                if(s){
                 SetCurrPage(s)
                }              
        }
        if(currPage === 2){
            let s = currPage
            s++
            if(s){
                SetSecongPageFinished(true)
             SetCurrPage(s)
            }   
        }
    }

    const toglleUserSmoking = () =>{
                if(smoking === true){
            SetSmoking(false)
        }
        else{
            SetSmoking(true)
        }
        if(smoking){
            console.log(smoking)
        }
        
    }

    function displayTestPage(){
            console.log(currPage)
                if(currPage === 1){
                return(
                        <div className='first-test-main'>
                        <form>
                            <div className='form-div'>
                            <div className='label-div1 label-div name-label'>
                             <h4>Full Name:</h4>
                                <input  onChange={e =>{SetName(e.target.value)}} type="text" name="name" />
                                </div>

                                <div id='email-div' className='label-div '>
                                <h4>Email:</h4>
                                <input onChange={e =>{SetEmail(e.target.value)}} type="email" name="email" />
                                </div>
                               
               
                                <div className='label-div phone-label'>
                                <h4>Phone Number:</h4>
                                <input onChange={e =>{SetPhoneNumber(e.target.value)}} type="number" name="phone" />
                                </div>

                                <div id='age-div' className='label-div '>
                                <h4>Age:</h4>
                                <input  onChange={e =>{SetAge(e.target.value)}} type="number" name="age" />
                                </div>
              
                                <div id='smoke-label' className='label-div '>
                                <h4 className='lone-h4'>Do you Smoke?:</h4>
                                
                                <input type='checkbox' className={smoking === true?'smoke-button-active':'smoke-button'} onClick={toglleUserSmoking}></input>
                                </div>
                                <h4 style={{position:'relative', top:'20px', left:'10px', color:'red'}}>{formError}</h4>
                                
                                </div>
                                <input onClick={SubmittedOrNext}  className='next-button' type="submit" value="Next" />
                            </form>
                            
                            </div>
                  
                )
                }
             if(currPage === 2){
                return (
                    <div className='second-test-main'>
                    <form  >
                    <div id='form-div-2' className='form-div'>
                            <div className='label-div'>
                            <h4>Alcohol consumption:</h4>
                         
                            <input type="checkbox" name="alcohol" value='yes' />
                            </div>
                            <div className='label-div'>
                                <h4>Are you using any kind of dugs?:</h4>
                         
                            <input type="checkbox" name="drugs"value='yes' />
                            </div>
                            <div className='label-div'>
                                <h4>do you have any previus serguries:</h4>
                         
                            <input type="checkbox" name="serguries" value='yes'/>
                            </div>
                            <div className='label-div'>
                                <h4>Do you suffer from any of the following?:</h4>
                         <div className='illness-list'>
                          <div>  <input className='ill-input' type="checkbox" name="illness"value='diabetes'/><h4>Diabetes</h4></div>
                        <div>   <input className='ill-input' type="checkbox" name="illness"value='heart'/><h4>Heart illness</h4></div>
                         <div>  <input className='ill-input' type="checkbox" name="illness"value='bloodPreasure'/><h4>High blood preasure</h4></div>
                          <div> <input className='ill-input' type="checkbox" name="illness"value='gland'/> <h4>Thyroid gland disease</h4></div>
                        <div>  <input className='ill-input' type="checkbox" name="illness"value='skin'/> <h4>Skin disease</h4></div>
                          <div> <input className='ill-input' type="checkbox" name="illness"value='none'/><h4>None of the above</h4></div>
                            </div>
                             </div>
                             <div className='label-div'>
                                <h4>Do you lack any of the following?:</h4>
                         
                            <input type="checkbox" name="lack" value='B12' />B12
                            <input type="checkbox" name="lack" value='vitaminD'/>Vitamin D
                            <input type="checkbox" name="lack" value='iron'/>IORN
                            <input type="checkbox" name="lack" value='pritin'/>Ferritin
                            <input type="checkbox" name="lack" value='avaz'/>Zincum
                            <input type="checkbox" name="lack" value='none'/>None
                             </div>
                             <button className='next-button' onClick={SubmittedOrNext} >Next</button>
                             </div>
                        </form>
                    </div>
                )
               
            }
            else if(currPage === 3){
                return(
                    <div className='second-test-main'>
                    <form onSubmit={SubmittedOrNext}>
                    <div className='form-div'>
                            <div className='label-div'>
                            <h4>Do ypi fuffer from the following infections?</h4>
                        
                         <label>
                             <input type="checkbox" name='ill' value="hepatitisb" />hepatitis b
                             <input type="checkbox" name='ill' value="hepatitisc" />hepatitis b
                             <input type="checkbox" name='ill' value="hiv" />HIV
                             <input type="checkbox" name='ill' value="none" />none
                             </label>
                             </div>
                             <div className='label-div'>
                                <label>
                                    <h4>Do you have any alergies for med/food?:</h4>
                         
                            <input type="radio" name="alergies" value='yes' />yes
                            <input type="radio" name="alergies" value='no'/>no
                            </label>
                            </div>
                            <div className='label-div'>
                             <label>
                             <h4> Did you ever had a bad side effects to sedative?:</h4>
                        
                            <input type="radio" name="sedative" value='yes' />yes
                            <input type="radio" name="sedative" value='no' />no
                            </label>
                            </div>
                            <div className='label-div'>
                             <label>
                             <h4>Did you ever had hair transplent?:</h4>
                         
                            <input type="radio" name="haiirTrans" value='yes' />yes
                            <input type="radio" name="haiirTrans" value='no' />no
                            </label>
                            </div>
                            <div className='label-div'>
                             <label>
                             <h4> Did one of your parent had a hair loss?:</h4>
                        
                            <input type="radio" name="hairLoss" value='yes'/>yes
                            <input type="radio" name="hairLoss" value='no'/>no
                            </label>
                            </div>
                            
                            <input type="submit" value="Back" />
                             <input type="submit" value="Next" />
                             </div>
                        </form>
                    </div>
                )
             
            }
            else{
                SetCurrPage(1)
            }

    }
  return (
                           <div className='main-med-test'>
                        {/* <div className='canvas-div'>
                        <Canvas></Canvas>
                        </div> */}
                        <div className='test-top'>
                            <h4>{title}</h4>
                        </div>
                        <div className='test-steps'>
                            <div style={{position:'relative',bottom:'45px'}}>
                        <svg className='svg-line2' version="1.1"z='-2px'  x="0px" y="0px" width="144px"
	 height="9px" viewBox="0 0 100 9" style={currPage === 1?{overflow:'visible',stroke:'#878787'}:currPage === 2?{overflow:'visible',stroke:'#878787'}:{overflow:'visible',stroke:'rgb(55, 138, 255)'}} >

<g>
	<line className="st0" x1="0" y1="5.5" x2="137" y2="5.5"/>
</g>
</svg>
<svg className='svg-line' version="1.1"z='-2px'  x="0px" y="0px" width="344px"
	 height="9px" viewBox="0 0 344 9" style={currPage === 1?{overflow:'visible',stroke:'#878787'}:{overflow:'visible',stroke:'rgb(55, 138, 255)'}} >

<g>
	<line id='st1-id' className="st0" x1="-4" y1="5.5" x2="130" y2="5.5"/>
</g>
</svg>
                            <ul>
                                <li><span className={userInformationFinished?'span-finish':'span-active'}><h4>{currPage === 1? '1': <BsCheckLg></BsCheckLg>}</h4></span></li>


                                <li><span className={SecongPageFinished?'span-finish':currPage === 1? 'span': 'span-active'}><h4>{currPage === 2? '2':currPage === 1? '2':<BsCheckLg></BsCheckLg>}</h4></span></li>
                               <li><span className={currPage === 3?'span-active':'span'}><h4>{Page3Finished?<BsCheckLg></BsCheckLg> :'3'}</h4></span></li>
                            </ul>
                            </div>
                        </div>
                        <div className='lower-part-test'>
        {displayTestPage()}
        </div>
        </div>
  )
}
