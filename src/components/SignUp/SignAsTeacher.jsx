import './sign-up.css'
import { useState } from 'react';
import axiosInstance from "../../axios";
import Sidebar from '../Sidebar/Sidebar';
import { useNavigate } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const SignUpTeacher = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    education: '',
    birth_date: '',
    surname: '',
    email: '',
    teacher: {
      phone: ''
    },
    password: '', // ??
    password2: '', // ??
    telegram: '',
    experience: '',
    image: null
  });

  const [registrationStatus, setRegistrationStatus] = useState(null); // Registration status state

  let navigate = useNavigate()

  const routeHandler = (URL) => {
    navigate(URL)
  }


  // const [image, setImage] = useState(null);

  const handleChange = event => {
    const { name, value } = event.target;

    const inputTextEdu = event.target.value;
    if (inputTextEdu.length <= 1000) {
      setTextEdu(inputTextEdu);
    }

    const inputTextExp = event.target.value;
    if (inputTextExp.length <= 1000) {
      setTextExp(inputTextExp);
    }

    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  // const handleImageChange = (event) => {
  //   setImage(event.target.files[0]);
  // };

  const handleSubmit = event => {
    event.preventDefault();
    if (formData.password !== formData.password2) {
      setRegistrationStatus('error: Пароли не совпадают');
    } else {

      // const config = {               ?????????
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //     accept: 'application/json',
      //   }
      // }
      // if (image != null) {
      //   formData.image = image
      // }                              ???????

      console.log('data', formData)   // config ???????
      axiosInstance
        .post('signup/teacher/', formData)
        .then(() => {
          setRegistrationStatus('success: Регистрация прошла успешно! Подтвердите вашу почту.');
          // handle success
        })
        .catch((error) => {
          setRegistrationStatus(`error: ${error.message}`);
          // handle error
        });
    }
  };

  const handleModalClose = () => {
    setRegistrationStatus(null);
  };

  const [textEdu, setTextEdu] = useState(formData.education);

  const [textExp, setTextExp] = useState(formData.experience);

  return (

    <div className="main">
      <Sidebar />
      <form className="form" onSubmit={handleSubmit}>
        <h1 className='regTitle'>Регистрация репетитора</h1>
        <div className="form-buttons">
          <button onClick={() => routeHandler('/regTeach')} className="form--submit" type="button">
            Регистрация репетитора
          </button>
          <button onClick={() => routeHandler('/register')} className="form--submit" type="button">
            Регистрация ученика
          </button>
        </div>

        <p>Введите ваши данные *</p>
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
        
        <p className='exp-label'>Опишите ваш опыт (Впишите свои достижения и своих учеников) *</p>
        <div className="input-row">
          <textarea
            value={textEdu}
            onChange={handleChange}
            name="education"
            className="form--input-area"
            maxLength={1000}
          />
        </div>
        <p className='area-text'>Осталось символов: {1000 - textEdu.length}</p>
        
        <br />

        <p className='exp-label'>Опишите ваш опыт (Впишите свои достижения и своих учеников) *</p>
        <div className="input-row">
          <textarea
            value={textExp}
            onChange={handleChange}
            name="experience"
            className="form--input-area"
            maxLength={1000}
          />
        </div>
        <p className='area-text'>Осталось символов: {1000 - textExp.length}</p>

        <p className='margin-ex'></p>
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
            type="date"
            placeholder="Дата рождения в формате: 10.08.1990"
            name="birth_date"
            className="form--input"
            value={formData.birth_date}
            onChange={handleChange}
          />
        </div>
        <div className="contacts">
          <p>Телефон *</p>
          <p className='c2'>Telegram</p>
        </div>
        <div className="input-row">
          <input
            type="text"
            placeholder="Номер Телефона"
            name="phone"
            className="form--input"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Имя пользователя в Telegram"
            name="telegram"
            className="form--input"
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
        <button className="form--submit-last" type="submit" onClick={handleSubmit}>
          Завершить регистрацию
        </button>
      </form>

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

export default SignUpTeacher;
