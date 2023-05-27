import React from 'react'
import './MainpageCard.scss'

const CourseInfo = () => {
  return (
    <div>
        <div className='teach-sub'>{props.subject}</div>
      <div className="price_teach">{props.price}</div>
    </div>
  )
}

export default CourseInfo