import React from 'react'
import '../Teachers/teacherCard.css'

const CourseInfo = (props) => {
  return (
    <div className='courses-in-card'>
      <div className='teach-sub'>{props.subject}</div>
      <div className="teach-sub-price">{props.price} тг.</div>
    </div>
  )
}

export default CourseInfo