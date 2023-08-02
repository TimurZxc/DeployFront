import React from 'react'
import './Courses.scss'
import axiosInstance from '../../../axios'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const CourseComponent = (props) => {

  const [registrationStatus, setRegistrationStatus] = React.useState(null); // Registration status state

  function cancleLesson(id) {
    axiosInstance.delete(`cancel/${id}`).then(()=>{
      setRegistrationStatus('success: Урок был успешно удален!');
    }).catch((error)=>{
      setRegistrationStatus(`error: ${error.message}`);
    })
  }

  const handleModalClose = () => {
    setRegistrationStatus(null);
  };

  return (
    <div className='courses-body'>
    <div className="first-col">
        <div className="first-row">Курс:</div>
        <div className="second-row">{props.course_name}</div>
        <button onClick={()=>{cancleLesson(props.id)}} className='cancle-delete'>Отменить</button>
      </div>
      <div className="second-col">
        <div className="first-row">Дата проведения урока</div>
        <div className="second-row">{props.date}</div>
      </div>
      <div className="third-col">
        <div className="first-row">Время проведения урока</div>
        <div className="second-row">c {props.start_time}</div>
        <div className="third-row">до {props.end_time}</div>
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

export default CourseComponent