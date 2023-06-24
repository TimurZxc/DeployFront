import React from 'react'
import './MainpageCard.css'

const CourseInfo = (props) => {
  return (
    <div>
        <div className='teach-sub'>{props.subject}</div>
      <div className="price_teach">{props.price} тг.</div>
    </div>
  )
}

export default CourseInfo