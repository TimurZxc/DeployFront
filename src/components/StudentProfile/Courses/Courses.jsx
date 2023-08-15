import React from 'react'
import './Courses.scss'
import axiosInstance from '../../../axios'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Lottie from 'lottie-react'
import animationData from '../../../assets/animation_lktzbjcg.json'

const Courses = (props) => {

  const [studCourseList, setStudCourseList] = React.useState([])
  const [deleteCount, setDeleteCount] = React.useState(0);
  const [registrationStatus, setRegistrationStatus] = React.useState(null); // Registration status state

  const handleModalClose = () => {
    setRegistrationStatus(null);
  };

  function cancleLesson(id) {
    axiosInstance.delete(`cancel/${id}`).then(() => {
      setDeleteCount((prevCount) => prevCount + 1),
        setRegistrationStatus('success: Урок был успешно отменен!');
    }).catch((error) => {
      setRegistrationStatus(`Error cancelling lesson: ${error.message}`);
    })
  }

  React.useEffect(() => {
    axiosInstance
      .get("lessons")
      .then((response) => {
        const studCoursesData = response.data;
        setStudCourseList(studCoursesData);
      })
      .catch((error) => {
        setRegistrationStatus(`Error fetching data:: ${error.message}`);
      });
  }, [studCourseList]);

  const getData = () => {
    axiosInstance
      .get("lessons")
      .then((response) => {
        const studCoursesData = response.data;
        setStudCourseList(studCoursesData);
      })
      .catch((error) => {
        setRegistrationStatus(`Error fetching data:: ${error.message}`);
      });
  }

  const currentDate = new Date();

  React.useEffect(() => {
    getData();
  }, [deleteCount])

  return (
    <section>
      {
        studCourseList.map((data) => (
          <div className={`courses-body ${currentDate > new Date(data?.lessons?.date) ? 'time-is-over': ''}`} key={data?.lessons?.related_course?.id}>
            <div className="first-col">
              <div className="first-row">Курс:</div>
              <div className="second-row">{data?.lessons?.related_course?.name}</div>
              <button onClick={() => { cancleLesson(data.id) }} className='cancle-delete'>Отменить</button>
            </div>
            <div className="second-col">
              <div className="first-row">Дата проведения урока</div>
              <div className="second-row">{data?.lessons?.date}</div>
            </div>
            <div className="third-col">
              <div className="first-row">Время проведения урока</div>
              <div className="second-row">c {data?.lessons?.start_time}</div>
              <div className="third-row">до {data?.lessons?.end_time}</div>
              {currentDate > new Date(data?.lessons?.date) && <p className='time-over'>Урок просрочен</p>}
            </div>
          </div>
        ))
      }

      <Modal show={registrationStatus !== null} onHide={handleModalClose}>
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

    </section>
  )
}

export default Courses
