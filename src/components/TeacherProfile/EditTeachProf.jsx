import React, { useEffect, useState } from 'react'
import Calendar from './Calendar/CalendarTeach'
import './teacherProfile.css'
import Sidebar from '../Sidebar/Sidebar'
import PersonalInfoTeachEdit from './PersonalInfo Teacher/PersonalInfoEdit'
import EditCoursesTeach from './Courses/EditCourses'
import AddCourseTeach from './Courses/AddCourse'
import axiosInstance from '../../axios'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const EditTeacherProfile = (props) => {

  const [isShown, setIsShown] = React.useState(false)

  function toggleShown() {
    setIsShown(prevShown => !prevShown)
  }

  function handleDelete() {
    axiosInstance.delete('delete/user/', {
    }).then(() => {
      setRegistrationStatus('success: Данные были успешно удалены!');
      navigate('/');
    }).catch((error) => {
      setRegistrationStatus(`error: ${error.message}`);
      localStorage.removeItem('access_token'),
      localStorage.removeItem('refresh_token');
    });
  }

  const [mainCourseList, setMainCourseList] = React.useState([])

  const [mainTeachList, setMainTeachList] = React.useState([])

  const [registrationStatus, setRegistrationStatus] = useState(null); // Registration status state

  const CourseListArr = mainCourseList.map(course => {
    return <EditCoursesTeach
      key={course.id}
      course_id={course.id}
      name={course.name}
      descriptionription={course.description}
      price={course.price}
      number_of_students={course.number_of_students}
      student_level={course.student_level}
      language={course.language}
      {...course} />
  })

  const CurrentUser = mainTeachList.map(data => {
    return <PersonalInfoTeachEdit
      key={data.id}
      id={data.id}
      first_name={data.first_name}
      last_name={data.last_name}
      education={data?.teacher?.education}
      experience={data?.teacher?.experience}
      phone={data?.teacher?.phone}
      birth_date={data.birth_date}
      email={data.email}
      surname={data.surname}
      telegram={data?.user?.telegram}
      image={data?.image}
      {...data} />
  })

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

  React.useEffect(() => {
    mainTeachList.map(data => {
      if (mainTeachList && data?.teacher?.id) {
        const id = data?.teacher?.id

        axiosInstance
          .get(`course-list/${id}`)
          .then((response) => {
            setMainCourseList(response.data[0].courses);
            console.log("course data", response);
          })
          .catch((error) => {
            console.error("Error fetching course data:", error);
          });
      }
    })

  }, [mainTeachList]);

  const handleModalClose = () => {
    setRegistrationStatus(null);
  };


  return (
    <div className="main">
      <Sidebar />
      <div className='settings-block_t'>
        <section className='course-list'>{CurrentUser}</section>
        <h1 className="profile-title_t">Актуальные курсы</h1>
        <section className='course-list'>{CourseListArr}</section>
        {isShown && <AddCourseTeach />}
        <div className="edit" onClick={toggleShown}>Добавить курс</div>
        <button onClick={() => { handleDelete() }} className="second-row_t_c_delete">Удалить Профиль</button>
      </div>

      <Modal show={registrationStatus !== null} onHide={handleModalClose}>
        <Modal.Body>
          {registrationStatus && registrationStatus.startsWith('error') ? (
            <p className="error-message">{registrationStatus.substr(7)}</p>
          ) : registrationStatus && registrationStatus.startsWith('success') ? (
            <p className="success-message">{registrationStatus.substr(9)}</p>
          ) : null}
          <Button variant="secondary" onClick={handleModalClose} className="close-button">
            Закрыть
          </Button>
        </Modal.Body>
      </Modal>

    </div>
  )
}

export default EditTeacherProfile
