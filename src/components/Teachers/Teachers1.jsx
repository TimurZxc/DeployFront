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

  const [language, setLanguage] = useState('Русский')

  const getUsers = async () => {
    try {
      const response = axiosInstance.get('teacher-list/').then((res) => {
        setCards(res.data)
      })
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    getUsers()
  }, [language])



  const cardElements = cards.map(card => (
    card?.language === language &&
    <TeacherCard
      key={card?.teacher?.id}
      src={card?.image}
      text={card.first_name + ' ' + card.last_name}
      subject={card?.teacher?.courses?.name}
      price={card?.teacher?.courses?.price}
      url ={`/marketTeach/${card?.teacher?.id}`}
      buttonText={"Подробнее"}
       />
  ))



  return (
    <div className="main">
      <Sidebar/>
      <div className="main-wrapper">
      <h1 className="main-title">
        Учителя
      </h1>
      <label className='select' htmlFor="slct">Выберите язык на котором хотите обучаться</label>
          <select name="language" id="slct" className='selector' onChange={(e) => setLanguage(e.target.value)}>
            <option value="" className='option' disabled selected>Выбор языка</option>
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

export default Teachers1
