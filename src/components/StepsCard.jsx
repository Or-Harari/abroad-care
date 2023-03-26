import React from 'react'
import './StepsCard.css'

export default function StepsCard({title,img, lowerTitle, LowerP}) {
  return (
    <div className='steps-card-main'>
        <div className='steps-card-title'><h4>{title}</h4></div>
        <div className='steps-card-img'><img src={img} alt="" /></div>
        <div className='steps-card-lower-part'><h4>{lowerTitle}</h4><p>{LowerP}</p></div>
    </div>
  )
}
