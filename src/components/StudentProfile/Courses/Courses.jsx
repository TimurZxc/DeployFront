import React from 'react'
import './Courses.scss'
import CourseComponent from './CourseComponent'
import axiosInstance from '../../../axios'

const Courses = (props) => {

const [studCourseList, setStudCourseList] = React.useState([])

  const StudCourses = studCourseList.map(data => {
    return <CourseComponent
      key={data?.lessons?.related_course?.id}
      course_name={data?.lessons?.related_course?.name}
      date={data?.lessons?.date}
      start_time={data?.lessons?.start_time}
      end_time={data?.lessons?.end_time}/>
  })
  
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
    <div className="courses-body">
      <section>{StudCourses}</section>
    </div>
  )
}

export default Courses
