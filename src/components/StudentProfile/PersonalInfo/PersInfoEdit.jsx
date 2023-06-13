import axiosInstance from '../../../axios';
import './PersonalInfo.scss'
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const PersonalInfoEdit = (props) => {

  const navigate = useNavigate();
  const routeHandler = (URL) => {
    navigate(URL)
  }

  const [formData, setFormData] = useState({
    email: props.email,
    first_name: props.first_name,
    last_name: props.last_name,
    surname: props.surname,
    birth_date: props.birth_date,
    phone: props.phone,
    telegram: props.telegram
  });

  const [registrationStatus, setRegistrationStatus] = useState(null); // Registration status state

  const handleChange = event => {
    const { name, value, type, checked } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  function handleUpdate() {
    axiosInstance.put('/update/student/', {
      email: formData.email,
      first_name: formData.first_name,
      last_name: formData.last_name,
      surname: formData.surname,
      birth_date: formData.birth_date,
      telegram: formData.telegram,
      student: {
        phone: formData.phone
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
    });
  }

  const handleModalClose = () => {
    setRegistrationStatus(null);
  };

  return (
    <>
      <div className="body">
        <div className="first-col">
          <div className="first-row">
            <input
              type="text"
              placeholder="Имя"
              name="first_name"
              className="form--input"
              value={formData.first_name}
              onChange={handleChange} />
          </div>
          <br />
          <div className="second-row">
            <input
              type="text"
              placeholder="Фамилия"
              name="last_name"
              className="form--input"
              value={formData.last_name}
              onChange={handleChange}
            />
          </div>
          <div className="third-row">
            <input
              type="text"
              placeholder="Отчество"
              name="surname"
              className="form--input"
              value={formData.surname}
              onChange={handleChange}
            />
          </div>
          <div className="fourth-row">
            <input
              type="date"
              placeholder="Возраст"
              name="birth_date"
              className="form--input"
              value={formData.birth_date}
              onChange={handleChange}
            />
          </div>
          <div className="fourth-row">
          <input
            type="text"
            placeholder="Номер Телефона"
            name="phone"
            className="form--input"
            value={formData.phone}
            onChange={handleChange}
          />
          </div>
          <div className="fourth-row">
          <input
            type="email"
            placeholder="Email адрес"
            name="email"
            className="form--input"
            value={formData.email}
            onChange={handleChange}
          />
          </div>
          <div className="fourth-row">
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
        <div className="second-col">
          <div className="img"></div>
          <button onClick={() => { handleUpdate() }} className="second-row_t_c">Сохранить</button>
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

export default PersonalInfoEdit
