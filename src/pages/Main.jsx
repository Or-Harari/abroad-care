import React, { useEffect, useState } from 'react'
import PageModel from '../models/PageModel'
import '../Grid.css'
import './Main.css'
import { GiCrosshairArrow,GiHairStrands,GiLipstick } from 'react-icons/gi'
import { FaCarSide, FaTooth } from 'react-icons/fa'
import { BsShieldCheck } from 'react-icons/bs'


import Image1 from "../Images/WhatsApp-Image-2022-10-12-at-12.56.25-1-1024x683 (1).jpeg";
import Image2 from "../Images/WhatsApp-Image-2022-10-12-at-12.56.25-2-1024x683.jpeg";
import Image3 from "../Images/Ornament-83.png";
import Image4 from "../Images/smilejpg02-1024x789.jpg";
import Image5 from "../Images/smilepng05-1024x682.jpeg";

import { LazyLoadImage } from "react-lazy-load-image-component";

import { Link } from 'react-router-dom'
import SlideShow from '../components/SlideShow'
import StepsCard from '../components/StepsCard'
//import {  } from 'react-icons/fas'


export default function Main({windowSize,scrolled}) {


  const[imgSizeChange, SetImgSizeChange] = useState('');

  const handleSlider = (event)=>{
    const sliderPos = event.target.value;
if(sliderPos){
  const imgSize = document.getElementById('foreground-img').style.width = sliderPos;
  const buttonLeft = document.getElementById('slider-button').style.left = sliderPos ;
  console.log(imgSizeChange)

  if(imgSize){
    SetImgSizeChange(imgSize)
  }
}
  
    
  }


      useEffect(()=>{
console.log(windowSize)
     reveal();

      },[scrolled,windowSize])


      function reveal() {
            var reveals = document.querySelectorAll(".animateOnScrollIn");
            console.log('asdasdasdasdasd')
            for (var i = 0; i < reveals.length; i++) {
              var windowHeight = window.innerHeight;
              var elementTop = reveals[i].getBoundingClientRect().top;
              var elementVisible = 50;
              if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
              } else {
                reveals[i].classList.remove("active");
              }
            }
          }


  return (

 <div className='main-home'>
   <div className='main-img' ></div>
    <div className='container'>

      <div  className='sections'>
            <ul className='main-main-ul'>
               <li className='main-li-box'><GiCrosshairArrow  className='re-icon'/><h4>Preperation</h4></li>
               <li className='main-li-box'><FaCarSide className='re-icon'/><h4>Mobile service</h4></li>
               <li className='main-li-box'><GiLipstick className='re-icon'/><h4>Estathic treatment</h4></li>
               <li className='main-li-box'><FaTooth className='re-icon'/><h4>Holywood smile</h4></li>
               <li className='main-li-box'><GiHairStrands className='re-icon'/><h4>Hair Transplants</h4></li>
            </ul>
      </div>

      <div className='sections section-main-2'>
      <div className={windowSize>500?'grid-2-row section-2-1':'full-width section-2-1'}>
                  <p>The only clinic that performs manual extrication.</p>
                 
                 <div className='section-2-1-title'>
                  <h2 className='animateOnScrollIn'>About the farmacy</h2>
                  <div className='section-title'></div>
                  </div>
            </div>
            <div  className={windowSize>500?'grid-2-row':'full-width'}>
            <p>The ABROAD CARE clinics have stood the test of time and continue to thrive with 35 years of experience. We are constantly developing and strengthening our position, which prevents us from losing sight of the vision with which we began and drives us every day, earning us international prestige. So far, we have treated over 43,000 hair loss patients, and more than 160 doctors and nurses have been trained and certified in hair restoration treatments and procedures. With comprehensive research, accurate diagnosis, structured training, and effective treatment, Seneca Medical Group's clinics lead in hair restoration innovations and continuously develop new techniques and tools for treating hair loss."
Regenerate response </p>
                  <Link className='about-link-main' to='./About'>Read more</Link>
            </div>

      
      </div>


      <div className='sections section-main-3'>
      
            <div className={windowSize>500?'grid-2-row':'full-width'}> <div className='main-img-set main-img-set-1' ></div>
            <div className='first-img-pop-decorator animateOnScrollIn'>
                  <div className='img-pop-content'>
                  <div className='iconicon' style={{width:'40px'}}>
                  <BsShieldCheck className='img-pop-content-icon'/>
                  </div>
                  <div style={{paddingRight:'30px'}}>
                  <h3>Above 8 years EXP</h3><p>Hair Transplants asdd</p>
</div></div>
            
</div></div>
            <div className={windowSize>500?'grid-2-row section-2-photos-2':'full-width'}> 
            
            <div className={windowSize>500?'grid-2-row':'full-width'}>
            <div className='main-img-set  main-img-set-2' ></div> <div className='main-img-set  main-img-set-3' >
            </div>
                  </div>
                  
                  <div className={windowSize>500?'grid-2-row':'full-width'}>
                  <div className='main-img-set  main-img-set-4' ></div>
                  </div>
            </div> 

      </div>

      <div className='sections section-main-4'>
              <div className={windowSize>500?'grid-2-row':'full-width'}>
                  <div className='main-img-set-5'><LazyLoadImage src={Image1} alt="Image Alt"/></div>
                  <div className='main-img-set-6'><LazyLoadImage src={Image2} alt="Image Alt"/></div>

              </div>
            <div className={windowSize>500?'grid-2-row':'full-width'}><div className='section-main-4-2-2'><p id='main-p-style'>farmacy ABROADCARE</p> <h2 className='animateOnScrollIn' id='main-h3-style'>New technique for hair transplant</h2><div className='section-title'></div>
            <p>The SENECA Direct FUE hair transplantation technique is a minimally invasive process in which hair follicles are extracted from the donor area (back and sides of the head) and transplanted directly to the affected area (recipient area). The entire process is performed only by doctors who have been trained and certified by the Seneca Training & Research Centre, under strict standardization protocols of Seneca Quality, to ensure excellent results every time. During the transplantation stage, we use an Implanter, a specially designed tool that allows full control of the depth, direction, and angle of each hair follicle's placement. After transplantation, the hair follicles go through their normal life cycle and grow naturally. The transplanted hair continues to grow throughout the patient's life and does not fall out, providing a natural 100% result.</p>
            <Link className='about-link-main' to='./Transplent'>Read more</Link>
            </div>
            </div>
          

      </div>
     

      <div className='sections section-main-5'>
              <div className={windowSize>500?'section-5-1':'full-width'}>
                  <div className='sec-5-img-decoration'><LazyLoadImage src={Image3} alt="" /></div>
                  <div className='main-img-set-5'><LazyLoadImage src={Image4} alt="Image Alt"/></div>
                  <div className='first-img-pop-decorator animateOnScrollIn'>
                  <div className='img-pop-content'>
                  <div className='iconicon' style={{width:'40px'}}>
                  <BsShieldCheck className='img-pop-content-icon'/>
                  </div>
                  <div style={{paddingRight:'30px'}}>
                  <h3>Above 8 years EXP</h3><p>Hair Transplants asdd</p>
</div></div>
            
</div>

              </div>
            <div className={windowSize>500?'section-5-2':'full-width'}><div id='section-5-2-1'> <h2 className='animateOnScrollIn' id='main-h3-style'>Over 35 years of experience and more than 43,000 customers</h2><div className='section-title'></div>
            <p>Our mission at ABROAD CARE is simple - to change people's lives and restore their lost self-confidence. Our vision is to lead the field of hair restoration to new heights worldwide and find the most advanced and cost-effective treatments</p>
           <p>We have been working with clinics that provide the best and most innovative services for 35 years, and so far, the clinic has treated the hair of over 43,000 people. With us, you will receive the best and most professional service by over 160 doctors and nurses who have been trained and certified in hair restoration treatments and procedures</p>
           <p>The clinic we work with is at the forefront of technological innovations in the field of hair restoration and innovation, and they are constantly working on developing new treatments, techniques, and tools for treating hair loss</p>
            </div>
            </div>
          

      </div>
      <div className='title-transplant before-and-after'>
                  <div className='inner-title-transplent'>
                  <h2 >Before and After</h2>
                  <div className='section-title section-title-tranplent'></div>
                  </div>
                  <p>We know that entering into any medical procedure is accompanied by concerns, that's why we guarantee you the best, fastest and most convenient treatment for you. We have prepared a number of photos for you that will show people who have had a hair transplant with us so that you can see the results and judge for yourself.
</p>
                  </div>
      <div>
      <div className='container-before-after'>
                  <div class='img background-img'></div>
    <div style={{width:imgSizeChange+'%'}} id='foreground-img' class='img foreground-img'></div>
    <input onChange={handleSlider} type="range"  min="1" max="100"  className="slider" id="slider" name='slider' />
    <div style={{left:`calc(${imgSizeChange}% - 18px)`}} id='slider-button' className='slider-button'></div>


                  </div>
      </div>

      <div className='sections section-main-7'>
              <div className={windowSize>500?'grid-3-row':'full-width'}>
                  <div className='main-img-set-7'><LazyLoadImage src={Image5} alt="Image Alt"/></div>
                
              </div>
              <div className='grid-3-row'>
              <div className='main-page-form animateOnScrollIn'>
                        <h4 id='main-form-h4'>We will contact you</h4>
                  <form action="submit">
                        <div className='main-label-div' htmlFor="">
                              <h4 htmlFor="">Full Name</h4>
                              <input type="text" />
                              </div>
                              <div className='main-label-div main-label-div-2' htmlFor="">
                        <h4 htmlFor="">Phone Number</h4>

                        <input type="number" />
                        </div>
                        <div className='main-label-div main-label-div-3' htmlFor="">
                        <h4 htmlFor="">Emial</h4>

                        <input type="text" />
                        </div>
                        <div className='main-label-div main-label-div-3' htmlFor="">
                        <h4 htmlFor="">Country</h4>

                        <select className="form-select" id="country" name="country">
    <option>select country</option>
    <option value="AF">Afghanistan</option>
    <option value="AX">Aland Islands</option>
    <option value="AL">Albania</option>
    <option value="DZ">Algeria</option>
    <option value="AS">American Samoa</option>
    <option value="AD">Andorra</option>
    <option value="AO">Angola</option>
    <option value="AI">Anguilla</option>
    <option value="AQ">Antarctica</option>
    <option value="AG">Antigua and Barbuda</option>
    <option value="AR">Argentina</option>
    <option value="AM">Armenia</option>
    <option value="AW">Aruba</option>
    <option value="AU">Australia</option>
    <option value="AT">Austria</option>
    <option value="AZ">Azerbaijan</option>
    <option value="BS">Bahamas</option>
    <option value="BH">Bahrain</option>
    <option value="BD">Bangladesh</option>
    <option value="BB">Barbados</option>
    <option value="BY">Belarus</option>
    <option value="BE">Belgium</option>
    <option value="BZ">Belize</option>
    <option value="BJ">Benin</option>
    <option value="BM">Bermuda</option>
    <option value="BT">Bhutan</option>
    <option value="BO">Bolivia</option>
    <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
    <option value="BA">Bosnia and Herzegovina</option>
    <option value="BW">Botswana</option>
    <option value="BV">Bouvet Island</option>
    <option value="BR">Brazil</option>
    <option value="IO">British Indian Ocean Territory</option>
    <option value="BN">Brunei Darussalam</option>
    <option value="BG">Bulgaria</option>
    <option value="BF">Burkina Faso</option>
    <option value="BI">Burundi</option>
    <option value="KH">Cambodia</option>
    <option value="CM">Cameroon</option>
    <option value="CA">Canada</option>
    <option value="CV">Cape Verde</option>
    <option value="KY">Cayman Islands</option>
    <option value="CF">Central African Republic</option>
    <option value="TD">Chad</option>
    <option value="CL">Chile</option>
    <option value="CN">China</option>
    <option value="CX">Christmas Island</option>
    <option value="CC">Cocos (Keeling) Islands</option>
    <option value="CO">Colombia</option>
    <option value="KM">Comoros</option>
    <option value="CG">Congo</option>
    <option value="CD">Congo, Democratic Republic of the Congo</option>
    <option value="CK">Cook Islands</option>
    <option value="CR">Costa Rica</option>
    <option value="CI">Cote D'Ivoire</option>
    <option value="HR">Croatia</option>
    <option value="CU">Cuba</option>
    <option value="CW">Curacao</option>
    <option value="CY">Cyprus</option>
    <option value="CZ">Czech Republic</option>
    <option value="DK">Denmark</option>
    <option value="DJ">Djibouti</option>
    <option value="DM">Dominica</option>
    <option value="DO">Dominican Republic</option>
    <option value="EC">Ecuador</option>
    <option value="EG">Egypt</option>
    <option value="SV">El Salvador</option>
    <option value="GQ">Equatorial Guinea</option>
    <option value="ER">Eritrea</option>
    <option value="EE">Estonia</option>
    <option value="ET">Ethiopia</option>
    <option value="FK">Falkland Islands (Malvinas)</option>
    <option value="FO">Faroe Islands</option>
    <option value="FJ">Fiji</option>
    <option value="FI">Finland</option>
    <option value="FR">France</option>
    <option value="GF">French Guiana</option>
    <option value="PF">French Polynesia</option>
    <option value="TF">French Southern Territories</option>
    <option value="GA">Gabon</option>
    <option value="GM">Gambia</option>
    <option value="GE">Georgia</option>
    <option value="DE">Germany</option>
    <option value="GH">Ghana</option>
    <option value="GI">Gibraltar</option>
    <option value="GR">Greece</option>
    <option value="GL">Greenland</option>
    <option value="GD">Grenada</option>
    <option value="GP">Guadeloupe</option>
    <option value="GU">Guam</option>
    <option value="GT">Guatemala</option>
    <option value="GG">Guernsey</option>
    <option value="GN">Guinea</option>
    <option value="GW">Guinea-Bissau</option>
    <option value="GY">Guyana</option>
    <option value="HT">Haiti</option>
    <option value="HM">Heard Island and Mcdonald Islands</option>
    <option value="VA">Holy See (Vatican City State)</option>
    <option value="HN">Honduras</option>
    <option value="HK">Hong Kong</option>
    <option value="HU">Hungary</option>
    <option value="IS">Iceland</option>
    <option value="IN">India</option>
    <option value="ID">Indonesia</option>
    <option value="IR">Iran, Islamic Republic of</option>
    <option value="IQ">Iraq</option>
    <option value="IE">Ireland</option>
    <option value="IM">Isle of Man</option>
    <option value="IL">Israel</option>
    <option value="IT">Italy</option>
    <option value="JM">Jamaica</option>
    <option value="JP">Japan</option>
    <option value="JE">Jersey</option>
    <option value="JO">Jordan</option>
    <option value="KZ">Kazakhstan</option>
    <option value="KE">Kenya</option>
    <option value="KI">Kiribati</option>
    <option value="KP">Korea, Democratic People's Republic of</option>
    <option value="KR">Korea, Republic of</option>
    <option value="XK">Kosovo</option>
    <option value="KW">Kuwait</option>
    <option value="KG">Kyrgyzstan</option>
    <option value="LA">Lao People's Democratic Republic</option>
    <option value="LV">Latvia</option>
    <option value="LB">Lebanon</option>
    <option value="LS">Lesotho</option>
    <option value="LR">Liberia</option>
    <option value="LY">Libyan Arab Jamahiriya</option>
    <option value="LI">Liechtenstein</option>
    <option value="LT">Lithuania</option>
    <option value="LU">Luxembourg</option>
    <option value="MO">Macao</option>
    <option value="MK">Macedonia, the Former Yugoslav Republic of</option>
    <option value="MG">Madagascar</option>
    <option value="MW">Malawi</option>
    <option value="MY">Malaysia</option>
    <option value="MV">Maldives</option>
    <option value="ML">Mali</option>
    <option value="MT">Malta</option>
    <option value="MH">Marshall Islands</option>
    <option value="MQ">Martinique</option>
    <option value="MR">Mauritania</option>
    <option value="MU">Mauritius</option>
    <option value="YT">Mayotte</option>
    <option value="MX">Mexico</option>
    <option value="FM">Micronesia, Federated States of</option>
    <option value="MD">Moldova, Republic of</option>
    <option value="MC">Monaco</option>
    <option value="MN">Mongolia</option>
    <option value="ME">Montenegro</option>
    <option value="MS">Montserrat</option>
    <option value="MA">Morocco</option>
    <option value="MZ">Mozambique</option>
    <option value="MM">Myanmar</option>
    <option value="NA">Namibia</option>
    <option value="NR">Nauru</option>
    <option value="NP">Nepal</option>
    <option value="NL">Netherlands</option>
    <option value="AN">Netherlands Antilles</option>
    <option value="NC">New Caledonia</option>
    <option value="NZ">New Zealand</option>
    <option value="NI">Nicaragua</option>
    <option value="NE">Niger</option>
    <option value="NG">Nigeria</option>
    <option value="NU">Niue</option>
    <option value="NF">Norfolk Island</option>
    <option value="MP">Northern Mariana Islands</option>
    <option value="NO">Norway</option>
    <option value="OM">Oman</option>
    <option value="PK">Pakistan</option>
    <option value="PW">Palau</option>
    <option value="PS">Palestinian Territory, Occupied</option>
    <option value="PA">Panama</option>
    <option value="PG">Papua New Guinea</option>
    <option value="PY">Paraguay</option>
    <option value="PE">Peru</option>
    <option value="PH">Philippines</option>
    <option value="PN">Pitcairn</option>
    <option value="PL">Poland</option>
    <option value="PT">Portugal</option>
    <option value="PR">Puerto Rico</option>
    <option value="QA">Qatar</option>
    <option value="RE">Reunion</option>
    <option value="RO">Romania</option>
    <option value="RU">Russian Federation</option>
    <option value="RW">Rwanda</option>
    <option value="BL">Saint Barthelemy</option>
    <option value="SH">Saint Helena</option>
    <option value="KN">Saint Kitts and Nevis</option>
    <option value="LC">Saint Lucia</option>
    <option value="MF">Saint Martin</option>
    <option value="PM">Saint Pierre and Miquelon</option>
    <option value="VC">Saint Vincent and the Grenadines</option>
    <option value="WS">Samoa</option>
    <option value="SM">San Marino</option>
    <option value="ST">Sao Tome and Principe</option>
    <option value="SA">Saudi Arabia</option>
    <option value="SN">Senegal</option>
    <option value="RS">Serbia</option>
    <option value="CS">Serbia and Montenegro</option>
    <option value="SC">Seychelles</option>
    <option value="SL">Sierra Leone</option>
    <option value="SG">Singapore</option>
    <option value="SX">Sint Maarten</option>
    <option value="SK">Slovakia</option>
    <option value="SI">Slovenia</option>
    <option value="SB">Solomon Islands</option>
    <option value="SO">Somalia</option>
    <option value="ZA">South Africa</option>
    <option value="GS">South Georgia and the South Sandwich Islands</option>
    <option value="SS">South Sudan</option>
    <option value="ES">Spain</option>
    <option value="LK">Sri Lanka</option>
    <option value="SD">Sudan</option>
    <option value="SR">Suriname</option>
    <option value="SJ">Svalbard and Jan Mayen</option>
    <option value="SZ">Swaziland</option>
    <option value="SE">Sweden</option>
    <option value="CH">Switzerland</option>
    <option value="SY">Syrian Arab Republic</option>
    <option value="TW">Taiwan, Province of China</option>
    <option value="TJ">Tajikistan</option>
    <option value="TZ">Tanzania, United Republic of</option>
    <option value="TH">Thailand</option>
    <option value="TL">Timor-Leste</option>
    <option value="TG">Togo</option>
    <option value="TK">Tokelau</option>
    <option value="TO">Tonga</option>
    <option value="TT">Trinidad and Tobago</option>
    <option value="TN">Tunisia</option>
    <option value="TR">Turkey</option>
    <option value="TM">Turkmenistan</option>
    <option value="TC">Turks and Caicos Islands</option>
    <option value="TV">Tuvalu</option>
    <option value="UG">Uganda</option>
    <option value="UA">Ukraine</option>
    <option value="AE">United Arab Emirates</option>
    <option value="GB">United Kingdom</option>
    <option value="US">United States</option>
    <option value="UM">United States Minor Outlying Islands</option>
    <option value="UY">Uruguay</option>
    <option value="UZ">Uzbekistan</option>
    <option value="VU">Vanuatu</option>
    <option value="VE">Venezuela</option>
    <option value="VN">Viet Nam</option>
    <option value="VG">Virgin Islands, British</option>
    <option value="VI">Virgin Islands, U.s.</option>
    <option value="WF">Wallis and Futuna</option>
    <option value="EH">Western Sahara</option>
    <option value="YE">Yemen</option>
    <option value="ZM">Zambia</option>
    <option value="ZW">Zimbabwe</option>
</select>
                        </div>
                        <div className='main-label-div message' htmlFor="">
                        <h4 htmlFor="">Message</h4>
<input type="text" name="" id="message" />
                        </div>

<div className='submit-button-div'>
                        <input id='submit-button' className='submit-button' type="submit" value='Submit' />
                        </div>
                  </form>
                  </div>
              </div>
              <div className={windowSize>500?'grid-3-row':'full-width'}>
              </div>
      </div>

    </div>
       </div>
 )
}
