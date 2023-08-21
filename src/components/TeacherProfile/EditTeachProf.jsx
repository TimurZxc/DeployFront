import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './teacherProfile.css'
import Sidebar from '../Sidebar/Sidebar'
import PersonalInfoTeachEdit from './PersonalInfo Teacher/PersonalInfoEdit'
import AddCourseTeach from './Courses/AddCourse'
import axiosInstance from '../../axios'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Lottie from 'lottie-react'
import animationData from '../../assets/animation_lktzbjcg.json'
import 'bootstrap/dist/css/bootstrap.min.css'; 

const EditTeacherProfile = (props) => {

  const [isShown, setIsShown] = React.useState(false)

  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const [confirmationModal, setConfirmationModal] = useState(false);

  let navigate = useNavigate()
  const routeHandler = (URL) => {
    navigate(URL)
  }

  function toggleShown() {
    setIsShown(prevShown => !prevShown)
  }

  function handleDeleteP() {
    setShowConfirmationModal(true); // Show the confirmation modal
  }

  function confirmDelete() {
    axiosInstance.delete('delete/user/', {
    }).then(() => {
      setRegistrationStatus('success: Данные были успешно удалены!');
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      navigate('/');
    }).catch((error) => {
      setRegistrationStatus(`error: ${error.message}`);
    });

    setShowConfirmationModal(false); // Hide the confirmation modal after deletion

  }

  function cancelDelete() {
    setShowConfirmationModal(false); // Hide the confirmation modal if the user cancels the deletion
  }

  function cancelDeleteСourse() {
    setConfirmationModal(false); // Hide the confirmation modal if the user cancels the deletion
  }

  const [mainCourseList, setMainCourseList] = React.useState([])

  const [courseId, setCourseId] = React.useState(0)

  const [mainTeachList, setMainTeachList] = React.useState([])

  const [registrationStatus, setRegistrationStatus] = useState(null); // Registration status state

  const [updateCount, setUpdateCount] = useState(0);
  const [deleteCount, setDeleteCount] = useState(0);

  const [formDataList, setFormDataList] = useState([]);


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

  const handleChange = (event, index) => {
    const { name, value, type, checked } = event.target;
    setFormDataList((prevFormDataList) => {
      const updatedFormDataList = [...prevFormDataList];
      updatedFormDataList[index] = {
        ...updatedFormDataList[index],
        [name]: type === 'checkbox' ? checked : value,
      };
      return updatedFormDataList;
    });
  };

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


  function handleUpdate(id, formData) {
    axiosInstance.put(`/update/course/${id}`, {
      name: formData.name,
      description: formData.description,
      price: formData.price,
      number_of_students: formData.number_of_students
    })
      .then(() => {
        setUpdateCount((prevCount) => prevCount + 1);
        setRegistrationStatus('success: Курс был успешно обнавлен!')
      })
      .catch((error) => {
        setRegistrationStatus(`Error updating course: ${error.message}`);
      });
  };

  function handleDelete(id) {
    axiosInstance.delete(`/delete/course/${id}`)
      .then(() => {
        setDeleteCount((prevCount) => prevCount + 1),
          setRegistrationStatus('success: Курс был успешно удален!')
      })
      .catch((error) => {
        setRegistrationStatus(`Error deleting course: ${error.message}`);
      });
    // window.location.reload(true)
  }

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
  }, [mainTeachList])


  const getData = () => {
    mainTeachList.map(data => {
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
    )
  }

  const handleModalClose = () => {
    setRegistrationStatus(null);
  };

  useEffect(() => {
    if (mainCourseList.length > 0) {
      const initialFormDataList = mainCourseList.map((lesson) => ({
        name: lesson.name,
        description: lesson.description,
        price: lesson.price,
        number_of_students: lesson.number_of_students,
        language: lesson.language,
        student_level: lesson.student_level,
      }));
      setFormDataList(initialFormDataList);
    }
  }, [mainCourseList]);


  useEffect(() => {
    getData();
  }, [updateCount, deleteCount])

  return (
    <div className="main">
      <Sidebar />
      <div className='settings-block_t'>
        <section className='course-list'>{CurrentUser}</section>
        <h1 className="profile-title_t">Актуальные курсы</h1>
        <section className='course-list'>
          {
            mainCourseList.map((lesson, index) => (
              <div className="courses-body_t-" key={lesson.id}>
                <div className="first-col">
                  <div className="first-row">Предмет</div>
                  <input
                    type="text"
                    placeholder="Название предмета"
                    name="name"
                    className="second-row_e"
                    value={formDataList[index]?.name}
                    onChange={(e) => handleChange(e, index)} />
                  <div className="first-row">Cтоимость</div>
                  <input
                    type="text"
                    placeholder="Цена"
                    name="price"
                    className="second-row_e"
                    value={formDataList[index]?.price}
                    onChange={(e) => handleChange(e, index)} />

                  <div className="first-row">Язык преподавания</div>

                  <select className='course_selector' name="language" value={formDataList[index]?.language} onChange={(e) => handleChange(e, index)}>
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
                    value={formDataList[index]?.description}
                    onChange={(e) => handleChange(e, index)} />
                  <div className="first-row">Количестово мест</div>
                  <input
                    type="text"
                    placeholder="Количество студентов"
                    name="number_of_students"
                    className="second-row_e"
                    value={formDataList[index]?.number_of_students}
                    onChange={(e) => handleChange(e, index)} />

                  <div className="first-row">Уровень обучения</div>

                  <select className='course_selector' name="student_level" value={formDataList[index]?.student_level} onChange={(e) => handleChange(e, index)}>
                    <option value="">Уровень</option>
                    <option value="1-4 класс">1-4 класс</option>
                    <option value="5-8 класс">5-8 класс</option>
                    <option value="9-11 класс">9-11 класс</option>
                    <option value="1 курс">1 курс</option>
                  </select>

                </div>
                <div className="third-col">
                  <div className="first-row"></div>

                  <button onClick={() => { handleUpdate(lesson.id, formDataList[index]) }} className="second-row_t_c">Сохранить</button>
                  <button onClick={() => {setConfirmationModal(true); setCourseId(lesson.id)}} className="second-row_t_c">Удалить</button>
                  <button onClick={() => routeHandler(`/subjectsByHoursEdit/${lesson.id}`)} className="second-row_t_c">Список занятий</button>
                </div>
              </div>
            ))
          }
        </section>

        {isShown && <AddCourseTeach />}
        <div className="edit" onClick={toggleShown}>Добавить курс</div>
        <button onClick={() => { handleDeleteP() }} className="second-row_t_c_delete">Удалить Профиль</button>
      </div>

      {/* Confirmation Modal */}
      <Modal show={showConfirmationModal} onHide={cancelDelete} backdrop="dynamic" keyboard={true}>
        <Modal.Body>
          <p className="error-message">Вы уверены, что хотите удалить свой профиль? Это действие нельзя отменить.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cancelDelete} className="close-button">
            Отмена
          </Button>
          <Button variant="danger" onClick={() => { confirmDelete() }} className="close-button-delete">
            Удалить
          </Button>
        </Modal.Footer>
      </Modal>

       {/* Confirmation Modal Course */}
       <Modal show={confirmationModal} onHide={cancelDeleteСourse} backdrop="dynamic" keyboard={true}>
        <Modal.Body>
          <p className="error-message">Вы уверены, что хотите удалить курс? Это действие нельзя отменить.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cancelDeleteСourse} className="close-button">
            Отмена
          </Button>
          <Button variant="danger" onClick={() => { handleDelete(courseId) }} className="close-button-delete">
            Удалить
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={registrationStatus !== null} onHide={handleModalClose} backdrop="dynamic" keyboard={true}>
        <Modal.Body>
          {registrationStatus && registrationStatus.startsWith('error') ? (
            <p className="error-message">{registrationStatus.substr(7)}</p>
          ) : registrationStatus && registrationStatus.startsWith('success') ? (
            <>
              <Lottie animationData={animationData} />
              <p className="success-message">{registrationStatus.substr(9)}</p>
            </>
          ) : null}
          <Button variant="secondary" onClick={handleModalClose} className="close-button">
            Закрыть
          </Button>
        </Modal.Body>
      </Modal>

    </div >
  )
}

export default EditTeacherProfile
