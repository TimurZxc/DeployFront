import './Courses.scss'
const Courses = (props) => {
  return (
    <div className="courses-body">
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
        <div className="second-row">{props.start_time}</div>
        <div className="third-row">{props.end_time}</div>
      </div>
    </div>
  )
}

export default Courses
