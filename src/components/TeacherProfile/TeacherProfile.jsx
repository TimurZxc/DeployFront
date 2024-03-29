import React from 'react'
import Calendar from './Calendar/CalendarTeach'
import ContactInfoTeach from './ContactInfo/ContactInfoTeach'
import CoursesTeach from './Courses/CoursesTeach'
import PersonalInfoTeach from './PersonalInfo Teacher/PersonalInfoTeach'
import './teacherProfile.css'
import Sidebar from '../Sidebar/Sidebar'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../axios'


const TeacherProfile = (props) => {

  function toggleShown() {
    setIsShown(prevShown => !prevShown)
  }

  let navigate = useNavigate()
  const routeHandler = (URL) => {
    navigate(URL)
  }

  const [isShown, setIsShown] = React.useState(false)

  const [mainCourseList, setMainCourseList] = React.useState([])

  const [mainTeachList, setMainTeachList] = React.useState([])

  const CourseListArr = mainCourseList?.map(course => {
    return <CoursesTeach
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
    return <PersonalInfoTeach
      key={data.id}
      id={data.id}
      first_name={data.first_name}
      last_name={data.last_name}
      education={data?.teacher?.education}
      birth_date={data.birth_date}
      surname={data.surname}
      image={data.image}
      experience={data?.teacher?.experience}
      {...data} />
  })

  const CurrUserContacts = mainTeachList.map(data => {
    return <ContactInfoTeach
      key={data.id}
      phone={data?.teacher?.phone}
      email={data.email}
      telegram={data.telegram}
    />
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
          })
          .catch((error) => {
            console.error("Error fetching course data:", error);
          });
      }
    })

  }, [mainTeachList]);




  return (
    <div className="main">
      <Sidebar />
      <div className='settings-block_t'>
        <section className='course-list'>{CurrentUser}</section>
        <div onClick={toggleShown} className="edit">{isShown ? `Скрыть контакты` : `Показать контакты`}</div>
        {isShown ?  CurrUserContacts : <div></div>}
        <h1 className="profile-title_t">Актуальные курсы</h1>
        <section className='course--list'>{CourseListArr}</section>
        {/* <Calendar /> */}
        <div onClick={() => routeHandler('/editTeach')} className="edit">Редактировать профиль</div>
      </div>
    </div>
  )
}

export default TeacherProfile