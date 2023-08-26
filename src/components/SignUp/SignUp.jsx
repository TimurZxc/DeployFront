import React, { useState } from 'react';
import './sign-up.css'
import axiosInstance from "../../axios";
import Sidebar from '../Sidebar/Sidebar';
import { useNavigate } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Lottie from 'lottie-react'
import animationData from '../../assets/animation_lktzbjcg.json'
// bootstrap/dist/css/bootstrap.min.css

const SignUp = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    surname: '',
    birth_date: '',
    email: '',
    telegram: '',
    student: {
      phone: ''
    },
    image: null
  });

  const [registrationStatus, setRegistrationStatus] = useState(null); // Registration status state

  let navigate = useNavigate()

  const routeHandler = (URL) => {
    navigate(URL)
  }

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!formData.first_name || !formData.last_name || !formData.birth_date ||
      !formData.email || !formData.password || !formData.password2 || !formData.phone) {
      setRegistrationStatus('error: Пожалуйста заполните все поля корректно');
    }

    else if (formData.password !== formData.password2) {
      setRegistrationStatus('error: Пароли не совпадают');
    } else {

      // const config = {
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //     accept: 'application/json',
      //   }
      // }
      // if (image != null) {
      //   formData.image = image
      // }

      console.log('formData', formData) // config ???????

      axiosInstance.post('signup/student/', formData).then(() => {
        setRegistrationStatus('success: Регистрация прошла успешно! Подтвердите вашу почту.');
      }).catch((error) => {
        setRegistrationStatus(error.message);
      })
    }
  };


  const handleModalClose = () => {
    setRegistrationStatus(null);
  };

  return (

    <div className="main">
      <Sidebar />
      <form className="form" onSubmit={handleSubmit} encType='multipart/form-data'>
        <h1 className='regTitle'>Регистрация ученика</h1>
        <div className="form-buttons">
          <button onClick={() => routeHandler('/regTeach')} className="form--submit" type="button">
            Регистрация репетитора
          </button>
          <button onClick={() => routeHandler('/register')} className="form--submit" type="button">
            Регистрация ученика
          </button>
        </div>

        <p>Информация о ребенке *</p>
        <div className="input-row">
          <input
            type="text"
            placeholder="Имя"
            name="first_name"
            className="form--input"
            value={formData.first_name}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Фамилия"
            name="last_name"
            className="form--input"
            value={formData.last_name}
            onChange={handleChange}
          />
        </div>
        <div className="contacts-m">
          <p className='sur'>Отчетсво</p>
          <p className='date'>Дата рождения *</p>
        </div>
        <div className="input-row">
          <input
            type="text"
            placeholder="Отчество"
            name="surname"
            className="form--input"
            value={formData.surname}
            onChange={handleChange}
          />
          <p className='date-m'>Дата рождения *</p>
          <input
            type="date"
            placeholder="Дата рождения"
            name="birth_date"
            className="form--input"
            value={formData.birth_date}
            onChange={handleChange}
          />
        </div>
        <p>Контакты *</p>
        <div className="input-row">
          <input
            type="email"
            placeholder="Email адрес"
            name="email"
            className="form--input"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Номер Телефона"
            name="phone"
            className="form--input"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <p>Telegram</p>
        <div className="input-row">
          <input
            type="text"
            placeholder="Имя пользователя в Telegram"
            name="telegram"
            className="form--input-tg"
            value={formData.telegram}
            onChange={handleChange}
          />
        </div>
        <p>Установите пароль *</p>
        <div className="input-row">
          <input
            type="password"
            placeholder="Введите пароль"
            name="password"
            className="form--input"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Подтвердите пароль"
            name="password2"
            className="form--input"
            value={formData.password2}
            onChange={handleChange}
          />
        </div>
        <br />
        <button className="form--submit-last" type="submit" onClick={handleSubmit} >
          Завершить регистрацию
        </button>
      </form>

      {/* Registration status modal */}
      <Modal show={registrationStatus !== null} onHide={handleModalClose} backdrop="dynamic" keyboard={true}>
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
  );
};

export default SignUp;
