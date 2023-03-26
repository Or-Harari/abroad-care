import React, { useEffect, useState } from 'react'
import PageModel from '../models/PageModel'
import './HairTransplent.css'
import '../Grid.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { AiFillCheckCircle } from 'react-icons/ai'




import Image1 from "../Images/WhatsApp-Image-2022-10-12-at-12.56.25-1-1024x683 (1).jpeg";
import Image3 from "../Images/Ornament-83.png";
import Image4 from "../Images/smilejpg02-1024x789.jpg";
import Image5 from "../Images/dddss.jpg";
import SlideShow from '../components/SlideShow'
import StepsCard from '../components/StepsCard'

export default function HairTransplent() {

  const[firstP, SetfirstP] = useState(false);
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


  const CardStepsChildren =[
    <StepsCard img='Frame-357-4.jpeg' title='Step 1' lowerTitle='Free medical diagnosis' LowerP='Getting three opinions from three doctors'></StepsCard>,
    <StepsCard img='2-1.jpeg' title='Step 2' lowerTitle='Coordination phase' LowerP='Selecting a date package for analysis'></StepsCard>,
    <StepsCard img='Hair-transplant-surgery-1296x728-header.jpeg' title='Step 3' lowerTitle='The surgery stage' LowerP='Performing the best hair transplant surgery in Athens'></StepsCard>,
    <StepsCard img='5-1.jpeg' title='Step 4' lowerTitle='Recovery day' LowerP='Recovery day at the hotel after surgery'></StepsCard>,
    <StepsCard img='6-1.jpeg' title='step 5' lowerTitle='Back home' LowerP='Welcome to your new life'></StepsCard>,
    
]

  useEffect(()=>{

  },[firstP,imgSizeChange])

  function toggleParagraphs(event){
      
      if(event.target.id = 'firstP'){
        console.log(event.target.id)
        SetfirstP(!firstP)
      }
  }


  return (
    <div className='main-trans'>
            <PageModel></PageModel>

            <div className='container'>
              <div className='sections sections-tranplent'>
            <div className='title-transplant'>
              <div className='inner-title-transplent'>
                  <h2 >Hair transplant in Athens</h2>
                  <div className='section-title section-title-tranplent'></div>
                  </div>
                  </div>
                  <div className='title-transplant'>
                  <div className='inner-title-transplent'>
                  <h2 >Hair Transplent</h2>
                  <div className='section-title section-title-tranplent'></div>
                  </div>
                  </div>
                  <p>If receding hairline or baldness is really bothering you, a hair transplantation process in Athens could be the best choice for you to feel good about your appearance. Let's talk about how we perform the process quickly and comfortably for you</p>
                
                <div className='grid-trans'>
                  <div className='grid-3-row'>
                  <div className='transplent-images'><LazyLoadImage src={Image1} alt="Image Alt"/></div>
                  <div className='transplent-images '><LazyLoadImage src={Image4} alt="Image Alt"/></div>


                  </div>
                  <div className='grid-3-row'>
                  <div className='transplent-images one-of'></div>
                  


                  </div>
                  </div>
                
                  </div>
<br />
                  <div className='sections sections-transplent sections-transplent-2'>
                    <div className='title-transplant'>
                  <div className='inner-title-transplent'>
                    <p>a little bit about hair transplant in Athens</p>
                  <h2 >Why hair transplant in Athens</h2>
                  <div className='section-title section-title-tranplent'></div>
                  </div>
                  </div>

                  <div className='why-hair-transplent'>
                      <ul>
                      <li><AiFillCheckCircle id='.trans-icon' className='trans-icon'/><h2>High success rates</h2><p>
There are many other alternatives that you can go for instead of hair transplant surgery, but none have as high success rates as this surgery. Our doctors have been performing this medical procedure for years and we guarantee you success and peace of mind.</p></li>
                        <li><AiFillCheckCircle id='.trans-icon' className='trans-icon'/><h2>Will improve your appearance</h2><p>
The baldness that has bothered you for so long and may prevent you from socializing much, will disappear. Now you can feel free to socialize with a new you after hair transplant surgery. The hair transplant brings you back the glory days of flaunting a head full of hair. It will definitely improve your appearance and restore your self-confidence.</p></li>
                        <li><AiFillCheckCircle id='.trans-icon' className='trans-icon'/><h2>Negligible maintenance</h2><p>
Unlike procedures that need maintenance from time to time and cost a lot of money and time, hair transplant surgery needs relatively little maintenance. Once the hair follicles start growing, there is only basic maintenance that needs to be done.</p></li>
                        <li><AiFillCheckCircle id='.trans-icon' className='trans-icon'/><h2>Natural hair</h2><p>
Unlike other solutions such as wigs and weaves where the hair used is not natural or sourced from a third party, this procedure gives you the hair that is natural and sourced from you. Hence they don't look fake or mismatch your hair.</p></li>
                        <li><AiFillCheckCircle id='.trans-icon' className='trans-icon'/><h2>Low chance of complication</h2><p>
Surgery tends to develop complications that may occur due to human error and exposure of internal body parts. But hair transplant surgery is a minimally invasive procedure because it only works on the scalp. Hence, this procedure has a very low chance of any post-operative complications.</p></li>
                        <li><AiFillCheckCircle id='.trans-icon' className='trans-icon'/><h2>Time and price</h2><p>
The short waiting time for a transplant with us compared to similar procedures in Israel, the best price we offer. On the way you can also enjoy the wonderful Athens.</p></li>
                      </ul>
                  </div>
                  </div>
                  <div className='sections sections-transplent sections-transplent-3'>
                    <h2>We take care of everthing
</h2>                            <div style={{right:'40px'}} className='section-title section-title-tranplent'></div>
        <SlideShow cards={CardStepsChildren}></SlideShow>
                  </div>
                  <div className='sections sections-transplent sections-transplent-3'>

    

                  <div className='common-q-list'>
                  <nav class="accordion arrows">
    <header class="box">
      <label for="acc-close" class="box-title">Common questions</label>
    </header>
    <input type="radio" name="accordion" id="cb1" />
    <section class="box">
      <label class="box-title" for="cb1">Does hair transplant hurt?</label>
      <label class="box-close" for="acc-close"></label>
      <div class="box-content">Most people are surprised at how little pain there is during the procedure. Some discomfort should be expected when the anesthetic is injected into the scalp. Once the skin is numbed, there is no pain. If the anesthetic wears off during the procedure, more is injected to re-anesthetize the area.
</div>
    </section>
    <input type="radio" name="accordion" id="cb2" />
    <section class="box">
      <label class="box-title" for="cb2">How will it look after the procedure?</label>
      <label class="box-close" for="acc-close"></label>
      <div class="box-content">A. The implants form small scabs in the days after the procedure. If there is enough hair around, these scabs can be disguised with creative styling. If not, the small scabs may be visible but do not attract much attention. By keeping the scalp moisturized, the scabs usually fall off in about a week or so.
</div>
    </section>
    <input type="radio" name="accordion" id="cb3" />
    <section class="box">
      <label class="box-title" for="cb3">How long is the procedure?</label>
      <label class="box-close" for="acc-close"></label>
      <div class="box-content">The operation can last between 10-12 hours depending on the complexity and size of the case.
</div>
    </section>

    <input type="radio" name="accordion" id="cb4" />
    <section class="box">
      <label class="box-title" for="cb4">Can woman do it too?</label>
      <label class="box-close" for="acc-close"></label>
      <div class="box-content">Of course, everyone can undergo hair transplant surgery, women have great success rates with hair transplants.

</div>
    </section>

    <input type="radio" name="accordion" id="cb5" />
    <section class="box">
      <label class="box-title" for="cb5">What happens after the procedure?</label>
      <label class="box-close" for="acc-close"></label>
      <div class="box-content">Most patients can return to work 24 to 48 hours after hair restoration. Hair is washed the morning after each procedure. Vigorous exercise should be limited for five to seven days.

Medicines are used to minimize swelling that may occur. Some crusting or small scabs may be present for seven to ten days, along with some itching at the treatment sites. Any numbness in the donor or recipient sites usually disappears within a few weeks to a few months.

</div>
    </section>

    <input type="radio" name="accordion" id="cb6" />
    <section class="box">
      <label class="box-title" for="cb6">When does the new hair start to grow?</label>
      <label class="box-close" for="acc-close"></label>
      <div class="box-content">The full results from your hair transplant will become apparent within 12 months. The hair restoration surgeon will meet with you during this time to access and monitor your progress. Most patients begin to see very noticeable hair growth within 4-6 months.

</div>
    </section>

    <input type="radio" name="accordion" id="acc-close" />
  </nav>
                  </div>

                  <div className='title-transplant before-and-after'>
                  <div className='inner-title-transplent'>
                  <h2 >Before and After</h2>
                  <div className='section-title section-title-tranplent'></div>
                  </div>
                  <p>We know that entering into any medical procedure is accompanied by concerns, that's why we guarantee you the best, fastest and most convenient treatment for you. We have prepared a number of photos for you that will show people who have had a hair transplant with us so that you can see the results and judge for yourself.
</p>
                  </div>
                  <div className='container-before-after'>
                  <div class='img background-img'></div>
    <div style={{width:imgSizeChange+'%'}} id='foreground-img' class='img foreground-img'></div>
    <input onChange={handleSlider} type="range"  min="1" max="100"  className="slider" id="slider" name='slider' />
    <div style={{left:`calc(${imgSizeChange}% - 18px)`}} id='slider-button' className='slider-button'></div>


                  </div>
                  <div>
                    
                  </div>
                  </div>
                  </div>
        </div>
  )
}
