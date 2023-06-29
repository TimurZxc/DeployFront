import React from 'react'
import './CoursesTeach.css'
import { useState } from 'react';
import axiosInstance from '../../../axios';
import { useNavigate } from 'react-router-dom'


const AddCourseTeach = (props) => {

  let navigate = useNavigate()
  const routeHandler = (URL) => {
    navigate(URL)
  }

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    number_of_students: '',
    language: '',
    student_level: '',
  });

  const handleChange = event => {
    const { name, value, type, checked } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };  
 
      function handleSubmit(event){
        event.preventDefault();
        axiosInstance.post('create/course/',{
          name: formData.name,
          description: formData.description,
          price: formData.price,
          number_of_students: formData.number_of_students,
          student_level: formData.student_level,
          language: formData.language
        }).then((response)=>{
            console.log('New id:', response.data.id);
            routeHandler(`/subjectsByHoursEdit/${response.data.id}`);
        }).catch((error)=>{
            console.log(error);
        });
      }


  return (
    <div className="courses-body_t">
        <div className="first-col">
          <div className="first-row">Предмет</div>
            <input
              type="text"
              placeholder="Название предмета"
              name="name"
              className="second-row_e"
              value={formData.name}
              onChange={handleChange} />

        <div className="first-row">Количество мест</div>
          <input
            type="text"
            placeholder="Колич. учеников"
            name="number_of_students"
            className="second-row_e"
            value={formData.number_of_students}
            onChange={handleChange} />

          <select className='course_selector' name="language" value={formData.language} onChange={handleChange}>
            <option value="">Язык преподавания</option>
            <option value="казахский">Казахский</option>
            <option value="русский">Русский</option>
            <option value="английский">Английский</option>
          </select>

          <select className='course_selector' name="student_level" value={formData.student_level} onChange={handleChange}>
            <option value="">Уровень курса</option>
            <option value="1-4">1-4 класс</option>
            <option value="5-9">5-9 класс</option>
            <option value="10-11">10-11 класс</option>
            <option value="1 курс">1 курс</option>
          </select>

      </div>
      <div className="second-col">
        <div className="first-row">Описание</div>
        <textarea
            placeholder="Описание курса"
            name="description"
            className="second-row_e_area"
            value={formData.description}
            onChange={handleChange} />

        <div className="first-row">Стоимость</div>      
        <input
            type="text"
            placeholder="Цена"
            name="price"
            className="second-row_e"
            value={formData.price}
            onChange={handleChange} />
        <button onClick={handleSubmit} className="second-row_t_c">Добавить курс</button>

      </div>
    </div>
  )
}

export default AddCourseTeach
