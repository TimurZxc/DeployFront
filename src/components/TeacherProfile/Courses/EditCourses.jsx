import React from 'react'
import './CoursesTeach.css'
import { useState, useEffect } from 'react';
import axiosInstance from '../../../axios';
import { useNavigate, useParams } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Lottie from 'lottie-react'
import animationData from '../../../assets/animation_lktzbjcg.json'

const EditCoursesTeach = (props) => {

  const [formData, setFormData] = useState({
    name: props.name,
    description: props.description,
    price: props.price,
    number_of_students: props.number_of_students,
    language: props.language,
    student_level: props.student_level,
  });

  const [mainCourseList, setMainCourseList] = React.useState([])
  const [mainTeachList, setMainTeachList] = React.useState([])

  const [registrationStatus, setRegistrationStatus] = useState(null); // Registration status state

  const [updateCount, setUpdateCount] = useState(0);
  const [deleteCount, setDeleteCount] = useState(0);

  React.useEffect(() => {
    axiosInstance
      .get("curr/")
      .then((response) => {
        const mainTeacherData = response.data;
        setMainTeachList(mainTeacherData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const getData = () => {
      mainTeachList.map(data => {
        if (mainTeachList && data?.teacher?.id) {
          const id = data?.teacher?.id

          axiosInstance
            .get(`course-list/${id}`)
            .then((response) => {
              setMainCourseList(response.data[0].courses);
            })
            .catch((error) => {
              console.error("Error fetching course data:", error);
            });
        }
      })
  }

  let navigate = useNavigate()
  const routeHandler = (URL) => {
    navigate(URL)
  }

  const paramss = useParams();


  const handleChange = event => {
    const { name, value, type, checked } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  function handleUpdate(id) {
    axiosInstance.put(`/update/course/${id}`, {
      name: formData.name,
      description: formData.description,
      price: formData.price,
      number_of_students: formData.number_of_students
    })
    setUpdateCount((prevCount) => prevCount + 1);
    setRegistrationStatus('success: Курс был успешно обнавлен!')
      .catch((error) => {
        setRegistrationStatus(`Error updating course: ${error.message}`);
      });
  };

  function handleDelete(id) {
    axiosInstance.delete(`/delete/course/${id}`),
      setDeleteCount((prevCount) => prevCount + 1),
      setRegistrationStatus('success: Курс был успешно удален!')
        .catch((error) => {
          setRegistrationStatus(`Error deleting course: ${error.message}`);
        });
    window.location.reload(true)
  }

  const handleModalClose = () => {
    setRegistrationStatus(null);
  };

  useEffect(() => {
    getData();
  }, [updateCount, deleteCount])

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
          <option value="русский казахский">Русский, Казахский</option>
          <option value="казахский английский">Казахский, Английский</option>
          <option value="русский английский">Русский, Английский</option>
          <option value="русский английский казахский">Русский, Английский, Казахский</option>
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
          <option value="1-4 класс">1-4 класс</option>
          <option value="5-8 класс">5-8 класс</option>
          <option value="9-11 класс">9-11 класс</option>
          <option value="1 курс">1 курс</option>
        </select>

      </div>
      <div className="third-col">
        <div className="first-row"></div>

        <button onClick={() => { handleUpdate(props.course_id) }} className="second-row_t_c">Сохранить</button>
        <button onClick={() => { handleDelete(props.course_id) }} className="second-row_t_c">Удалить</button>
        <button onClick={() => routeHandler(`/subjectsByHoursEdit/${props.course_id}`)} className="second-row_t_c">Список занятий</button>
      </div>
      <Modal show={registrationStatus !== null} onHide={handleModalClose}>
        <Modal.Body>
          {registrationStatus && registrationStatus.startsWith('error') ? (
            <p className="error-message">{registrationStatus.substr(7)}</p>
          ) : registrationStatus && registrationStatus.startsWith('success') ? (
            <>
              <Lottie animationData={animationData} style={{ height: 100, width: 100, marginInline: 'auto' }} />
              <p className="success-message">{registrationStatus.substr(9)}</p>
            </>
          ) : null}
          <Button variant="secondary" onClick={handleModalClose} className="close-button">
            Закрыть
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default EditCoursesTeach
