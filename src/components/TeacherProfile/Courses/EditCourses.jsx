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
        if (mainTeachList?.teacher?.id) {
          const id = mainTeachList?.teacher?.id
          console.log('id', id)
          axiosInstance
            .get(`course-list/${id}`)
            .then((response) => {
              setMainCourseList(response.data[0].courses);
            })
            .catch((error) => {
              console.error("Error fetching course data:", error);
            });
        }
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
    console.log('updateCount', updateCount)
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
 
    <div>
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
