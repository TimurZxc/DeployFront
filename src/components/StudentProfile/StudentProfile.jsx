import Calendar from './Calendar/Calendar'
import Search from '../Search/Search'
import ContactInfo from './ContactInfo/ContactInfo'
import Courses from './Courses/Courses'
import PersonalInfo from './PersonalInfo/PersonalInfo'
import './StudentProfile.scss'
import Sidebar from '../Sidebar/Sidebar'
import Dashboard from '../Dashboard/Dashboard'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../axios'

const StudentProfile = () => {
  let navigate = useNavigate()
  const routeHandler = (URL) => {
    navigate(URL)
  }

  const [mainStudList, setMainStudList] = React.useState([])

  const [studCourseList, setStudCourseList] = React.useState([])


  const CurrentUser = mainStudList.map(data => {
    return <PersonalInfo
      key={data?.id}
      first_name={data?.first_name}
      last_name={data.last_name}
      birth_date={data.birth_date}
      surname={data.surname}
      id={data.id}
      email={data.email}
      phone={data?.student?.phone}
      telegram={data.telegram}
    />
  })

  const StudCourses = studCourseList.map(data => {
    return <Courses
      key={data?.related_course.id}
      course_name={data.related_course.name}
      date={data.date}
      start_time={data.start_time}
      end_time={data.end_time}/>
  })

  React.useEffect(() => {
    axiosInstance
      .get("curr/")
      .then((response) => {
        const mainTeacherData = response.data;
        setMainStudList(mainTeacherData);
        console.log("student data", mainTeacherData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  React.useEffect(() => {
    axiosInstance
      .get("lessons")
      .then((response) => {
        const studCoursesData = response.data;
        setStudCourseList(studCoursesData);
        console.log("courses data", studCoursesData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


  return (
    <div className="main">
      <Sidebar />
      <div className="profile-wrapper">
        {/* <Search /> */}
        <h1 className="profile-title">Настройки профиля ученика</h1>
        <div className="settings-block">
        <section className='course-list'>{CurrentUser}</section>
        <section>{StudCourses}</section>
          <div onClick={() => routeHandler('/studEdit')} className="edit">Редактировать профиль</div>
          {/* <Calendar /> */}
        </div>
      </div>
      {/* <Dashboard/> */}
    </div>
  )
}

export default StudentProfile
