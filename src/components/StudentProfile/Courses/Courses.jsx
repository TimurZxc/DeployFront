import React from 'react'
import './Courses.scss'
import CourseComponent from './CourseComponent'
import axiosInstance from '../../../axios'

const Courses = (props) => {

  const [studCourseList, setStudCourseList] = React.useState([])

  // React.useEffect(() => {
  //   mainTeachList.map(data => {
  //     if (mainTeachList && data?.teacher?.id) {
  //       const id = data?.teacher?.id

  //       axiosInstance
  //         .get(`course-list/${id}`)
  //         .then((response) => {
  //           setMainCourseList(response.data[0].courses);
  //         })
  //         .catch((error) => {
  //           console.error("Error fetching course data:", error);
  //         });
  //     }
  //   })

  // }, [mainTeachList]);

  const StudCourses = studCourseList.map(data => {
    console.log(data)
    return <CourseComponent
      id={data?.id}
      key={data?.lessons?.related_course?.id}
      course_name={data?.lessons?.related_course?.name}
      date={data?.lessons?.date}
      start_time={data?.lessons?.start_time}
      end_time={data?.lessons?.end_time} />
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
    <section>{StudCourses}</section>
  )
}

export default Courses
