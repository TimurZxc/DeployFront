import React from 'react'
import './CoursesTeach.css'
import { useNavigate } from 'react-router-dom'

const CoursesTeach = (props) => {

  let navigate = useNavigate()
  const routeHandler = (URL) => {
    navigate(URL)
  }

  return (
    <div className="courses-body_t-">
      <div className="first-col">
        <div className="first-row">Предмет</div>
        <div className="second-row">{props.name}</div>
        <br />
        <div className="first-row">Язык преподавания</div>
        <p className="second-row">{props.language}</p>
      </div>
      <div className="second-col">
        <div className="first-row">Описание</div>
        <p className="second-row">{props.description}</p>
        <br />
        <div className="first-row">Стоимость</div>
        <p className="second-row">{props.price} тг.</p>
      </div>
      <div className="third-col">
        <div className="first-row">Количество мест</div>
        <p className="second-row">{props.number_of_students}</p>
        <br />
        <div className="first-row">Уровень обучения</div>
        <p className="second-row">{props.student_level}</p>

      <br />
        <button onClick={() => routeHandler(`/subjectsByHours/${props.course_id}`)} className="second-row_t_c">Подробнее</button>
      </div>
    </div>
  )
}

export default CoursesTeach
