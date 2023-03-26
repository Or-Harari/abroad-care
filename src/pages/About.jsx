import React, { useEffect } from 'react'
import PageModel from '../models/PageModel'
import './About.css'
import '../Grid.css'


import { BsShieldCheck } from 'react-icons/bs'

import Image3 from "../Images/Ornament-83.png";
import Image4 from "../Images/smilejpg02-1024x789.jpg";

import Image1 from "../Images/smilejpg015-1024x786.jpg";
import Image2 from "../Images/dddss.jpg";

import Image5 from "../Images/smilepng05-1024x682.jpeg";


import { LazyLoadImage } from "react-lazy-load-image-component";

export default function About({windowSize, scrolled}) {

  

  function reveal() {
    var reveals = document.querySelectorAll(".animateOnScrollIns");
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
  useEffect(()=>{
    reveal()
  },[windowSize,scrolled])
  return (
    <div className='main-about'>
    <div className='container'>
            <PageModel></PageModel>
            
     
            <div className='sections section-main-5'>
            
              <div className={windowSize>500?'section-5-1':'full-width'}>
              
                  <div className='sec-5-img-decoration'><LazyLoadImage src={Image3} alt="" /></div>
                  
                  <div className='main-img-set-5'><LazyLoadImage src={Image4} alt="Image Alt"/></div>
                  <div className='first-img-pop-decorator animateOnScrollIns'>
                  <div className='img-pop-content'>
                  
                  <div className='iconicon' style={{width:'40px'}}>
                  <BsShieldCheck className='img-pop-content-icon'/>
                  </div>
                  <div style={{paddingRight:'30px'}}>
                  <h3>Above 8 years EXP</h3><p>Hair Transplants</p>
</div></div>
            
</div>

              </div>
            <div className={windowSize>500?'section-5-2':'full-width'}><div id='section-about-1'> <h2 className='animateOnScrollIns' id='about-h3-style'>Over 35 years of experience and more than 43,000 customers</h2><div className='section-title'></div>
            <p>Our mission at ABROAD CARE is simple - to change people's lives and restore their lost self-confidence. Our vision is to lead the field of hair restoration to new heights worldwide and find the most advanced and cost-effective treatments</p>
           <p>We have been working with clinics that provide the best and most innovative services for 35 years, and so far, the clinic has treated the hair of over 43,000 people. With us, you will receive the best and most professional service by over 160 doctors and nurses who have been trained and certified in hair restoration treatments and procedures</p>
           <p>The clinic we work with is at the forefront of technological innovations in the field of hair restoration and innovation, and they are constantly working on developing new treatments, techniques, and tools for treating hair loss</p>
            </div>
            </div>
          

      </div>


      <div className='sections section-main-5'>
            

          <div className={windowSize>500?'section-5-2':'full-width'}><div id='section-about-1'> <h2 className='animateOnScrollIns' id='about-h3-style'>Some data on Abroad-Care</h2><div className='section-title'></div>
          <ul className='about-ul'>
            <li>Abroad Care works today with 3 service clinics, the premium one of which is in Greece. Abroad Ker provide the highest level of service with escort, flight packages with hotels that are easy on the pocket to luxury at special prices.
</li>
            <li>Abroad Care accompanies its clients from the beginning until a year after the transplant, helps with everything necessary and tries to achieve the best possible results.
</li>
            <li>Abroad Care is one of the leading medical tourism companies in the world after accompanying thousands of patients around the world.
</li>
            <li>Abroad Care provides all aesthetic services from hair transplants to breast augmentation and more.
</li>
            <li>Abroad Care helps the client get a medical opinion and get an estimate on the amount of follicles and the maximum percentage of coverage that will be received after the surgery.
</li>
            <li>Abroad Care works today with 3 clinics, among which the premium clinic is in Greece. Abroad Ker provide the highest level of service with escort, flight packages with hotels that are easy on the pocket to luxury at special prices.
</li>

          </ul>
          </div>
          </div>


          <div className={windowSize>500?'section-5-1':'full-width'}>
            
            <div className='about-img-sec'><LazyLoadImage src={Image1} alt="" /></div>
        </div>
        <button className='about-button animateOnScrollIns'> <h4>Click for an online analysis</h4></button>      


    </div>
      

    <div className='sections section-main-5'>
            

  
            <div className={windowSize>500?'section-5-1':'full-width'}>

              
              <div className='about-img-thrid'><LazyLoadImage src={Image2} alt="" /></div>
          </div>
          
  
          <div id='avout-lefti' className={windowSize>500?'section-5-2':'full-width'}><div id='section-about-1'> <h2 className='animateOnScrollIns' id='about-h3-style'>Our medical team</h2><div className='section-title'></div>
<p>Direct FUE hair transplantation is performed entirely by doctors, who have been certified by the SENECA Training and Research Center, in accordance with the strict standard protocols of ABROAD CARE. The doctors who perform hair restoration treatments in the UK are GMC registered with a license to practice medicine. Also, the clinic cooperates with European universities in Europe and participates in courses while maintaining an active role.
</p>
            </div>
            </div>
  
      </div>


        
      <div className='sections section-main-7'>
              <div className={windowSize>500?'grid-3-row':'full-width'}>
                  <div className='main-img-set-7'><LazyLoadImage src={Image5} alt="Image Alt"/></div>

                
              </div>
              <div className='grid-3-row'>
              <div className='main-page-form'>
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

      </div></div>
  )
}
