import { useEffect, useState } from 'react'
import './subjects.css'

import { useNavigate } from 'react-router-dom'
import { useParams } from "react-router-dom";

import axiosInstance from '../../../../axios'
import Sidebar from '../../../Sidebar/Sidebar'
import AddSubjComponentEdit from './AddSubjComp';
import SubjComponentEdit from './SubjectCompEdit';


const SubjectPageEdit = (props) => {

  function toggleShown() {
    setIsShown(prevShown => !prevShown)
  }


  const [formData, setFormData] = useState({});

  const handleChange = event => {
    const { name, value, type, checked } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };


  const handleUpdate = (course_id, lesson_id) => {
    axiosInstance.put(`/update/course/${course_id}/lesson/${lesson_id}`, {
      date: formData.date,
      start_time: formData.start_time,
      end_time: formData.end_time,
    }).then(() => {
      setUpdateCount((prevCount) => prevCount + 1);
    })
  };

  const handleDelete = (course_id, lesson_id) => {
    axiosInstance.delete(`/delete/course/${course_id}/lesson/${lesson_id}`).then(() => {
      setDeleteCount((prevCount) => prevCount + 1);
    })
  }

  let navigate = useNavigate()
  const routeHandler = (URL) => {
    navigate(URL)
  }

  const [isShown, setIsShown] = useState(false)

  const [mainCourseList, setMainCourseList] = useState([])
  const [updateCount, setUpdateCount] = useState(0);
  const [deleteCount, setDeleteCount] = useState(0);


  const getData = () => {
    axiosInstance.get('course/' + paramss.course_id + '/list-lessons').then((response) => {
      setMainCourseList(response.data)
    })
  }

  const paramss = useParams();
  useEffect(() => {
    getData();
  }, [updateCount, deleteCount])



  return (
    <div className="main">
      <Sidebar />
      <div className='settings-block_t'>
        <h1 className="profile-title_t">Редактирование занятий</h1>
        {/* {isShown && <ContactInfoTeach/>} */}
        <section className='course--list'>
          {
            mainCourseList.map((lesson) => (
              <div className="courses-body_t" key={lesson.id}>
                <div className="first-col">
                  <div className="first-row">Дата начала урока</div>
                  <input
                    type="time"
                    placeholder="Время начала урока"
                    name="start_time"
                    className="second-row_e"
                    value={lesson.start_time}
                    onChange={handleChange}
                  />

                  <div className="second-row">Дата окончания урока</div>
                  <input
                    type="time"
                    placeholder="Время окончания урока"
                    name="end_time"
                    className="second-row_e"
                    value={lesson.end_time}
                    onChange={handleChange}
                  />
                </div>
                <div className="second-col">
                  <div className="first-row">Дата Урока:</div>
                  <input
                    type="date"
                    name="date"
                    className="second-row_e"
                    value={lesson.date}
                    onChange={handleChange}
                  />
                  <button onClick={() => { handleUpdate(lesson.related_course.id, lesson.id); }} className="second-row_t_c">Сохранить</button>
                  <button onClick={() => { handleDelete(lesson.related_course.id, lesson.id); }} className="second-row_t_c">Удалить</button>
                </div>
              </div>
            ))
          }
        </section>

        <h1 className="profile-title_t">Добавить занятие</h1>
        <AddSubjComponentEdit />
      </div>
    </div>
  )
}

export default SubjectPageEdit
