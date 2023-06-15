import './teacherCard.scss'
import { useNavigate } from 'react-router-dom'
import React, { useEffect }  from 'react'
import axiosInstance from '../../axios'
import CourseInfo from '../MainpageCard/CourseInfo'

const TeacherCard = (props) => {

  const [courseInfo, setCourseInfo] = React.useState([])

  const getUsers = async () => {
    try {
      const response = axiosInstance.get('teacher-list/').then((res) => {
        setCourseInfo(res.data[0]?.teacher?.courses)
      })
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    getUsers()
  }, [])

  let navigate = useNavigate()
  const routeHandler = (URL) => {
    navigate(URL)
  }

  const cardElements = courseInfo.map(card => (
    <CourseInfo
      key={card?.id}
      subject={card?.name}
      price={card?.price}
       />
  ))

  return (
    <div className="card-wrapper">
      <img className="card-image" src={props.src} alt="" crossOrigin='anonymous'/>
      <h1 className="card-text">{props.text}</h1>
      <section>{cardElements}</section>
      <button onClick={() => routeHandler(`${props.url}`)}  className="card-button">{props.buttonText}</button>
    </div>
  )
}

export default TeacherCard
