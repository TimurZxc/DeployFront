import { useEffect, useState } from 'react'
import './subjects.css'
import { useNavigate } from 'react-router-dom'
import { useParams } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axiosInstance from '../../../../axios'
import Sidebar from '../../../Sidebar/Sidebar'
import AddSubjComponentEdit from './AddSubjComp';
import SubjComponentEdit from './SubjectCompEdit';
import Lottie from 'lottie-react'
import animationData from '../../../../assets/animation_lktzbjcg.json'

const SubjectPageEdit = (props) => {

  function toggleShown() {
    setIsShown(prevShown => !prevShown)
  }

  let navigate = useNavigate()
  const routeHandler = (URL) => {
    navigate(URL)
  }

  const [formDataList, setFormDataList] = useState([]);

  const [registrationStatus, setRegistrationStatus] = useState(null); // Registration status state

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
        setRegistrationStatus('success: Данные были успешно обновлены!');
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

  const handleModalClose = () => {
    setRegistrationStatus(null);
  };


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

export default SubjectPageEdit
