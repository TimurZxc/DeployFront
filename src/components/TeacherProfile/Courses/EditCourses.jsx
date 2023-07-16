import React from 'react'
import './CoursesTeach.css'
import { useState } from 'react';
import axiosInstance from '../../../axios';
import { useNavigate } from 'react-router-dom'

const EditCoursesTeach = (props) => {

  let navigate = useNavigate()
  const routeHandler = (URL) => {
    navigate(URL)
  }

    const [formData, setFormData] = useState({
      name: props.name,
      description: props.description,
      price: props.price,
      number_of_students: props.number_of_students,
      language: props.language,
      student_level: props.student_level,
    });
  

    const handleChange = event => {
        const { name, value, type, checked } = event.target;
        setFormData(prevFormData => ({
          ...prevFormData,
          [name]: type === 'checkbox' ? checked : value
        }));
      };

      console.log(formData)

      function handleUpdate(id){
        axiosInstance.put(`/update/course/${id}`,{
          name: formData.name,
          description: formData.description,
          price: formData.price,
          number_of_students: formData.number_of_students
        })
    };

    function handleDelete(id){
        axiosInstance.delete(`/delete/course/${id}`)
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
            <div className="first-row">Cтоимость</div>
            <input
            type="text"
            placeholder="Цена"
            name="price"
            className="second-row_e"
            value={formData.price}
            onChange={handleChange} />

            <div className="first-row">Язык преподавания</div>
          
            <select className='course_selector' name="language" value={formData.language} onChange={handleChange}>
            <option value="">Язык</option>
            <option value="казахский">Казахский</option>
            <option value="русский">Русский</option>
            <option value="английский">Английский</option>
          </select>
      </div>
      <div className="second-col">
        <div className="first-row">Описание</div>
        <input
            type="text"
            placeholder="Описание курса"
            name="description"
            className="second-row_e"
            value={formData.description}
            onChange={handleChange} />
            <div className="first-row">Количестово мест</div>
               <input
            type="text"
            placeholder="Количество студентов"
            name="number_of_students"
            className="second-row_e"
            value={formData.number_of_students}
            onChange={handleChange} />

            <div className="first-row">Уровень обучения</div>

            <select className='course_selector' name="student_level" value={formData.student_level} onChange={handleChange}>
            <option value="">Уровень</option>
            <option value="1-4">1-4 класс</option>
            <option value="5-9">5-9 класс</option>
            <option value="10-11">10-11 класс</option>
            <option value="1 курс">1 курс</option>
          </select>

      </div>
      <div className="third-col">
        <div className="first-row"></div>

        <button onClick={()=>{handleUpdate(props.id)}} className="second-row_t_c">Сохранить</button>
        <button  onClick={()=>{handleDelete(props.id)}} className="second-row_t_c">Удалить</button>
        <button  onClick={() => routeHandler(`/subjectsByHoursEdit/${props.course_id}`)} className="second-row_t_c">Список занятий</button>
      </div>
    </div>
  )
}

export default EditCoursesTeach
