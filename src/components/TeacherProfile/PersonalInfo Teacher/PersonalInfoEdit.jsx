import axiosInstance from '../../../axios';
import './PersonalInfoTeach.css'
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import userpic from '../../../images/user.png'


const PersonalInfoTeachEdit = (props) => {

  const navigate = useNavigate();
  const routeHandler = (URL) => {
    navigate(URL)
  }

  const [formData, setFormData] = useState({
    first_name: props.first_name,
    last_name: props.last_name,
    birth_date: props.birth_date,
    email: props.email,
    surname: props.surname,
    phone: props.phone,
    education: props.education,
    telegram: props.telegram,
    experience: 'fhosiefjlsejfls', 
  });

  const [registrationStatus, setRegistrationStatus] = useState(null); // Registration status state


  const [image, setImage] = useState(null);
  const handleChange = event => {
    const { name, value} = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  function handleUpdate() {
    axiosInstance.put(`/update/teacher/`, {
      first_name: formData.first_name,
      last_name: formData.last_name,
      birth_date: formData.birth_date,
      email: formData.email,
      surname: formData.surname,
      telegram: formData.telegram,
      teacher: {
        phone: formData.phone,
        education: formData.education
      }
    }) .then(() =>{
      setRegistrationStatus('success: Данные были успешно обновлены!');
    })
    .catch((error) => {
      setRegistrationStatus(`error: ${error.message}`);
    });
  };

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

  const handleModalClose = () => {
    setRegistrationStatus(null);
  };

  return (
    <>
      <div className="body_t">
        <div className="first-col_t">
          <div className="first-row_t">
            <input
              type="text"
              placeholder="Имя"
              name="first_name"
              className="form--input"
              value={formData.first_name}
              onChange={handleChange}
            />
          </div>
          <div className="second-row_t">
            <input
              type="text"
              placeholder="Фамилия"
              name="last_name"
              className="form--input"
              value={formData.last_name}
              onChange={handleChange}
            />
          </div>
          <div className="third-row_t">
          </div>
          <div className="fourth-row_t">
            <input
              type="date"
              placeholder="Возраст"
              name="birth_date"
              className="form--input"
              value={formData.birth_date}
              onChange={handleChange}
            />
          </div>
          <div className="fourth-row_t">
            <input
              type='text'
              placeholder="ВУЗ, Специальность, год окончания"
              name="education"
              className="form--input"
              value={formData.education}
              onChange={handleChange}
            />
          </div>
          <div className="fourth-row_t">
          <input
            type="text"
            placeholder="Номер Телефона"
            name="phone"
            className="form--input"
            value={formData.phone}
            onChange={handleChange}
          />
          </div>
          <div className="fourth-row_t">
          <input
            type="email"
            placeholder="Email адрес"
            name="email"
            className="form--input"
            value={formData.email}
            onChange={handleChange}
          />
          </div>
          <div className="fourth-row_t">
          <input
            type="email"
            placeholder="Telegram"
            name="telegram"
            className="form--input"
            value={formData.telegram}
            onChange={handleChange}
          />
          </div>
        </div>
        <div className="second-col_t">
          <div className="upload1">
              <img className='puple-img' src={props.image ? props.image : userpic} alt="image was not found" crossorigin="anonymous"/>
              <div className="round">
              <input
                      accept='image/*'
                      type="file"
                      name="image"
                      onChange={handleImageChange}
                    />
              <FontAwesomeIcon icon={faCamera} className='icon'/>
              </div>
            </div>
          <br />
          <button onClick={() => { handleUpdate(props.id) }} className="second-row_t_c">Сохранить</button>
          <br />
          <button onClick={() => { handleDelete() }} className="second-row_t_c">Удалить</button>
        </div>
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
    </>
  )
}

export default PersonalInfoTeachEdit
