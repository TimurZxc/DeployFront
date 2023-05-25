import React from 'react'
import './Courses.scss'

const CourseComponent = (props) => {
  return (
    <>
    <div className="first-col">
        <div className="first-row">Активные курсы:</div>
        <div className="second-row">{props.course_name}</div>
      </div>
      <div className="second-col">
        <div className="first-row">Дата регистрации на курс</div>
        <div className="second-row">{props.date}</div>
      </div>
      <div className="third-col">
        <div className="first-row">Время проведения урока</div>
        <div className="second-row">c {props.start_time}</div>
        <div className="third-row">до {props.end_time}</div>
      </div>
    </>
  )
}

export default CourseComponent