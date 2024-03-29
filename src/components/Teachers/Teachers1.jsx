import React, { useEffect, useState } from 'react'
import './teachers.scss'
// import MainpageCard from '../MainpageCard/MainpageCard'
import teacherCard from '../../assets/svg-pictures/teacher.svg'
import axiosInstance from '../../axios'
import Sidebar from '../Sidebar/Sidebar'
import TeacherCard from './TeacherCard'
// import Dashboard from '../Dashboard/Dashboard'


const Teachers1 = () => {
  const [cards, setCards] = React.useState([])

  const [language, setLanguage] = useState('русский')

  const getUsers = async () => {
    try {
      const response = axiosInstance.get('teacher-list/').then((res) => {
        setCards(res.data)
      })
    } catch (error) {
      console.log(error)
    }
  }

  const cardElements = cards.map(card => (
    card?.teacher?.courses.map(course => {
      const selectedLanguage = course.language.split(' '); // Split the selected language into an array of individual languages
      if (selectedLanguage.length === 3) { // Course with 3 languages
        if (selectedLanguage.includes(language)){
          return (
            <TeacherCard
              key={card?.teacher?.id}
              src={card?.image}
              text={card.first_name + ' ' + card.last_name}
              subject={course?.name}
              price={course?.price}
              url={`/marketTeach/${card?.teacher?.id}`}
              buttonText={"Подробнее"}
            />
          );
        }
      } else if (selectedLanguage.length === 2) { // Course with 2 languages
        if (selectedLanguage.includes(language)) {
          return (
            <TeacherCard
              key={card?.teacher?.id}
              src={card?.image}
              text={card.first_name + ' ' + card.last_name}
              subject={course?.name}
              price={course?.price}
              url={`/marketTeach/${card?.teacher?.id}`}
              buttonText={"Подробнее"}
            />
          );
        }
      } else { // Course with 1 language
        if (course.language === language) {
          return (
            <TeacherCard
              key={card?.teacher?.id}
              src={card?.image}
              text={card.first_name + ' ' + card.last_name}
              subject={course?.name}
              price={course?.price}
              url={`/marketTeach/${card?.teacher?.id}`}
              buttonText={"Подробнее"}
            />
          );
        }
      }
    })
  ));
  

  useEffect(() => {
    getUsers()
  }, [language])


  return (
    <div className="main">
      <Sidebar />
      <div className="main-wrapper">
        <h1 className="main-title">
          Учителя
        </h1>
        <label className='select' htmlFor="slct">Выберите язык на котором хотите обучаться</label>
        <select name="language" id="slct" className='selector' onChange={(e) => setLanguage(e.target.value)}>
          <option value="" className='option' disabled selected>Выбор языка</option>
          <option value="русский">Русский</option>
          <option value="казахский">Казахский</option>
          <option value="английский">Английский</option>
          {/* <option value="русский казахский">Русский, Казахский</option>
          <option value="казахский английский">Казахский, Английский</option>
          <option value="русский английский">Русский, Английский</option>
          <option value="русский английский казахский">Русский, Английский, Казахский</option> */}
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

export default Teachers1
