import React from 'react'
import '../CoursesTeach.css'
import { useParams } from 'react-router-dom';
import axiosInstance from '../../../../axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const SubjComponent = (props) => {

  const [registrationStatus, setRegistrationStatus] = React.useState(null); 

  const currentDate = new Date();

  const paramss = useParams();

  const handleModalClose = () => {
    setRegistrationStatus(null);
  };  

  function handleSubmit(event){
    event.preventDefault()
    axiosInstance.post('enroll/course/'+paramss.course_id+`/lesson/${props.lesson_id}`,{
    }).then((response)=>{
        setRegistrationStatus('success: Вы успешно записаны на урок! Проверьте почту.');
        console.log(response)
        .catch((error) => {
          console.log('error', error);
          setRegistrationStatus(`error: ${error.message}`);
        });
    })
};

  return (
    <div className={`courses-body_t-${currentDate > props.date ? 'time-is-over' : ''}`}>
      <div className="first-col">
        <div className="first-row">Время начала урока</div>
        <p className="second-row">{props.start_time}</p>
        <br />
        <div className="first-row">Время окончания урока</div>
        <p className="second-row">{props.end_time}</p>
        </div>
        <div className="second-col">
          <div className="first-row">Дата урока</div>
          <div className="second-row">{props.date}</div>
          {currentDate > props.date && <div className='time-over'>Урок просрочен</div>}
        <br />
        <button onClick={handleSubmit} className="second-row_t_c">Записаться</button>
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

export default SubjComponent
