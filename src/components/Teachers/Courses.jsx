import React, { useEffect, useState } from 'react'
import './teachers.scss'
import axiosInstance from '../../axios'
import Sidebar from '../Sidebar/Sidebar'
import CourseInfo from '../MainpageCard/CourseInfo'

const Courses = () => {
  const [cards, setCards] = useState([])

  const [language, setLanguage] = useState('Русский')

  const getCourses = async () => {
    try {
      await axiosInstance.get('courses/').then((res) => {
        setCards(res.data)
      })
    } catch (error) {
      console.log(error)
    }
  }


  const cardElements = cards.map(card => (
    card?.language === language &&
    <CourseInfo
      key={card?.id}
      subject={card?.name}
      price={card?.price}
    />
  ))


  useEffect(() => {
    getCourses()
    console.log('language', language)
  }, [language])


  return (
    <div className="main">
      <Sidebar />
      <div className="main-wrapper">
        <h1 className="main-title">
          Курсы
        </h1>
        <select name="language" id="language" onChange={(e) => setLanguage(e.target.value)}>
          <option value="Русский">Русский</option>
          <option value="Казахский">Казахский</option>
          <option value="Английский">Английский</option>
        </select>
        <div className="cards-block">
          <div className="card-row">
            {cardElements}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses
