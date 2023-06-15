// import teacherCard from '../../assets/svg-pictures/teacher.svg'
import React, { useState } from 'react';
// import TeachCard from './TeachCard';
import './sign-up.css'
import axiosInstance from "../../axios";
import Sidebar from '../Sidebar/Sidebar';
import { useNavigate } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const SignUp = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    surname: '',
    birth_date: '',
    email: '',
    phone: '',
    password: '',
    password2: '',
    telegram: '',
    image: null
  });

  const [registrationStatus, setRegistrationStatus] = useState(null); // Registration status state

  let navigate = useNavigate()

  const routeHandler = (URL) => {
    navigate(URL)
  }

  const handleChange = event => {
    const { name, value, type, checked } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (formData.password !== formData.password2) {
      setRegistrationStatus('error: Пароли не совпадают');
    } else {
      axiosInstance
        .post('signup/student/', formData)
        .then(() =>{
          setRegistrationStatus('success: Регистрация прошла успешно! Подтвердите вашу почту.');
        })
        .catch((error) => {
          setRegistrationStatus(`error: ${error.message}`);
        });
    }
  };

  const handleModalClose = () => {
    setRegistrationStatus(null);
  };

  return (
    
    <div className="main">
      <Sidebar/>
        <form className="form" onSubmit={handleSubmit} encType="multipart/form-data">
        <h1 className='regTitle'>Регистрация ученика</h1>
        <div className="form-buttons">
          <button onClick={() => routeHandler('/regTeach')} className="form--submit" type="button">
            Регистрация репетитора
          </button>
          <button onClick={() => routeHandler('/register')} className="form--submit" type="button">
            Регистрация ученика
          </button>
        </div>
      {/* <button onClick={() => routeHandler('/regEduCent')} className="form--submit" type="submit">
        Регистрация образ. центра
      </button> */}
        <p>Информация о ребенке</p>
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
        <div className="input-row">
        <input
          type="text"
          placeholder="Отчество"
          name="surname"
          className="form--input"
          value={formData.surname}
          onChange={handleChange}
        />
        <input
          type="date"
          placeholder="Дата рождения"
          name="birth_date"
          className="form--input"
          value={formData.birth_date}
          onChange={handleChange}
        />
        </div>
        <p>Контакты</p>
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
        <p>Telegram ( Дополнительно )</p>
        <div className="input-row">
        <input
          type="text"
          placeholder="Имя пользователя в Telegram"
          name="telegram"
          className="form--input-tg"
          value={formData.telegram}
          onChange={handleChange}
        />
        <input
          type="file"
          placeholder="Установи сука фото"
          name="image"
          className="form--input-tg"
          value={formData.image}
          onChange={handleChange}
        />
        </div>
        <p>Установите пароль</p>
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
  );
};

export default SignUp;
