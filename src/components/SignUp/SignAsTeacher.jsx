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
    birth_date:'',
    surname: '',
    email: '',
    phone: '',
    password: '',
    password2: '',
    telegram: ''
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
 
  return (
    
    <div className="main">
      <Sidebar/>
      <form className="form" onSubmit={handleSubmit}>
      <h1 className='regTitle'>Регистрация репетитора</h1>   
      <div className="form-buttons">
      <button onClick={() => routeHandler('/regTeach')} className="form--submit" type="submit">
        Регистрация репетитора
      </button>
      <button onClick={() => routeHandler('/register')} className="form--submit" type="submit">
        Регистрация ученика
      </button>
      </div>
      {/* <button onClick={() => routeHandler('/regEduCent')} className="form--submit" type="submit">
        Регистрация образ. центра
      </button> */}
      <p>Введите ваши данные</p>
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
        type="text"
        placeholder="Образование"
        name="education"
        className="form--input"
        value={formData.education}
        onChange={handleChange}
      />
      </div>
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
          <p>Телефон</p>
          <p className='c2'>Telegram - Необязательно</p>
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
      <button className="form--submit-last" type="submit">
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
        <br />
        <Button variant="secondary" onClick={handleModalClose} className="close-button">
          Закрыть
        </Button>
      </Modal.Body>
    </Modal>
    </div>
  );
};

export default SignUpTeacher;
