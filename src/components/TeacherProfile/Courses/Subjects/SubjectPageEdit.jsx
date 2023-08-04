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

  const [formDataList, setFormDataList] = useState([]);

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    setFormDataList((prevFormDataList) => {
      const updatedFormDataList = [...prevFormDataList];
      updatedFormDataList[index] = {
        ...updatedFormDataList[index],
        [name]: value,
      };
      return updatedFormDataList;
    });
  };
  
  const handleUpdate = (course_id, lesson_id, formData) => {
    axiosInstance
      .put(`/update/course/${course_id}/lesson/${lesson_id}`, {
        date: formData.date,
        start_time: formData.start_time,
        end_time: formData.end_time,
      })
      .then(() => {
        setUpdateCount((prevCount) => prevCount + 1);
      })
      .catch((error) => {
        console.error('Error updating lesson:', error);
      });
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

  useEffect(() => {
    if (mainCourseList.length > 0) {
      const initialFormDataList = mainCourseList.map((lesson) => ({
        start_time: lesson.start_time,
        end_time: lesson.end_time,
        date: lesson.date,
      }));
      setFormDataList(initialFormDataList);
    }
  }, [mainCourseList]);
  
  const paramss = useParams();
  useEffect(() => {
    getData();
  }, [updateCount, deleteCount])

  console.log('mainCourseList', mainCourseList)
  console.log('formDataList', formDataList)

  return (
    <div className="main">
      <Sidebar />
      <div className='settings-block_t'>
        <h1 className="profile-title_t">Редактирование занятий</h1>
        {/* {isShown && <ContactInfoTeach/>} */}
        <section className='course--list'>
          {
            mainCourseList.map((lesson, index) => (
              <div className="courses-body_t" key={lesson.id}>
                <div className="first-col">
                  <div className="first-row">Дата начала урока</div>
                  <input
                    type="time"
                    placeholder="Время начала урока"
                    name="start_time"
                    className="second-row_e"
                    value={formDataList[index]?.start_time}
                    onChange={(e) => handleChange(e, index)}
                  />

                  <div className="second-row">Дата окончания урока</div>
                  <input
                    type="time"
                    placeholder="Время окончания урока"
                    name="end_time"
                    className="second-row_e"
                    value={formDataList[index]?.end_time}
                    onChange={(e) => handleChange(e, index)}
                  />
                </div>
                <div className="second-col">
                  <div className="first-row">Дата Урока:</div>
                  <input
                    type="date"
                    name="date"
                    className="second-row_e"
                    value={formDataList[index]?.date}
                    onChange={(e) => handleChange(e, index)}
                  />
                  <button onClick={() => { handleUpdate(lesson.related_course.id, lesson.id, formDataList[index]); }} className="second-row_t_c">Сохранить</button>
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
