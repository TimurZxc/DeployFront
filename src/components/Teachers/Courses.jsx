import React, { useEffect, useState } from 'react'
import './teachers.scss'
import axiosInstance from '../../axios'
import Sidebar from '../Sidebar/Sidebar'
import CourseInfo from '../MainpageCard/CourseInfo'

const Courses = () => {
  const [cards, setCards] = useState([])

  const [language, setLanguage] = useState('русский')

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

  console.log('language', language)


  useEffect(() => {
    getCourses()
  }, [language])


  return (
    <div className="main">
      <Sidebar />
      <div className="main-wrapper">
        <h1 className="main-title">
          Курсы
        </h1>
          <label className='select' htmlFor="slct">Выберите язык на котором хотите обучаться</label>
          <select name="language" id="slct" className='selector' onChange={(e) => setLanguage(e.target.value)}>
            <option value="" className='option' disabled selected>Выбор языка</option>
            <option value="Русский">русский</option>
            <option value="Казахский">казахский</option>
            <option value="Английский">английский</option>
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
