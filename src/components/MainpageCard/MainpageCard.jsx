import CourseInfo from './CourseInfo'
import './MainpageCard.scss'
import { useNavigate } from 'react-router-dom'
import React from 'react'

const MainpageCard = (props) => {

  const [courseInfo, setCourseInfo] = React.useState([])

  const getUsers = async () => {
    try {
      const response = axiosInstance.get('teacher-list/').then((res) => {
        setCourseInfo(res.data)
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
      key={card?.teacher?.id}
      subject={card?.teacher?.courses?.name}
      price={card?.teacher?.courses?.price}
       />
  ))

  return (
    <div className="card-wrapper">
      <img className="card-image" src={props.src} alt="" />
      <h1 className="card-text">{props.text}</h1>
      <section>{cardElements}</section>
      <button onClick={() => routeHandler(`${props.url}`)}  className="card-button">{props.buttonText}</button>
    </div>
  )
}

export default MainpageCard
