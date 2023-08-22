import "./sign-in.css";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axios";
import Sidebar from "../Sidebar/Sidebar";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


const SignIn = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const [registrationStatus, setRegistrationStatus] = useState(null); // Registration status state
  const [passError, setPassError] = useState(null)
  const [emailError, setEmailError] = useState(null)
  const [signError, setSignError] = useState(null)
  const [isPopupActive, setIsPopupActive] = useState(localStorage.getItem('popup_active'))

  const urlParams = new URLSearchParams(window.location.search);
  const trueParam = urlParams.get('True');
  const falseParam = urlParams.get('False');

  const navigate = useNavigate();
  const routeHandler = (URL) => {
    navigate(URL)
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email & !formData.password) {
      setSignError('Пожалуйста заполните все поля')
    }

    else if (!formData.password) {
      setPassError('Пожалуйста введите ваш пароль')
    }

    else if (!formData.email) {
      setEmailError('Пожалуйста введите вашу почту')
    }
    else {
      axiosInstance
        .post('login/', formData)
        .then((res) => {
          localStorage.setItem('access_token', res.data.access);
          localStorage.setItem('refresh_token', res.data.refresh);
          axiosInstance.defaults.headers['Authorization'] =
            'Bearer ' + localStorage.getItem('access_token');
          navigate('/');
          setRegistrationStatus('success: Вход в аккаунт произошел успешно!');
        }).catch((error) => {
          if (error.response && error.response.status === 401) {
            setRegistrationStatus('error: Неверный логин или пароль')
          }
          else {
            setRegistrationStatus(`error: ${error.message}`);
          }
        });
    }
  };

  const handleModalClose = () => {
    setRegistrationStatus(null);
  };

  const clocePopup = ()=> {
    setIsPopupActive(false)
    localStorage.removeItem('popup_active')
  }

  React.useEffect(() => {
    // Set registration status based on the value of loggedIn parameter
    if (trueParam != null) {
      setRegistrationStatus('success: Регистрация прошла успешно! Войдите в аккаунт.');
    } else if (falseParam != null) {
      setRegistrationStatus('error: Ссылка недействительна');
    }
  }, []);


  return (
    <div className="main">
      <Sidebar />
      <form className='SignInFrom' onSubmit={handleSubmit}>

        {signError && (
          <p className="error-text">{signError}</p>
        )}
        {passError && (
          <p className="error-text">{passError}</p>
        )}
        {emailError && (
          <p className="error-text">{emailError}</p>
        )}

        <h3>Войдите в аккаунт</h3>

        <label htmlFor="username">Электронная почта</label>

        <input
          className='form--inpt'
          type="email"
          name="email"
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
          id="username" />

        <label className='signLabel' htmlFor="password">Пароль</label>
        <input
          className='form--inpt'
          placeholder='Введите пароль'
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          id="password" />

        <button className='form--sbt' type="submit" >Войти</button>
        <div
          onClick={() => routeHandler('/resetPass')}
          id='signUp'
          className={
            window.location.pathname === '/resetPass'
              ? `navigation-item active`
              : `navigation-item`
          }
        >Забыли пароль?</div>
        <div
          onClick={() => routeHandler('/register')}
          id='signUp'
          className={
            window.location.pathname === '/register'
              ? `navigation-item active`
              : `navigation-item`
          }
        >Нет аккаунта - Зарегиситрируйтесь!</div>
      </form>

      {/* Info Modal */}
      <Modal show={isPopupActive} onHide={clocePopup} backdrop="static" keyboard={false}>
        <Modal.Body>
          <p className="success-message">Пожалуйста подтвердите вашу новую почту по ссылке в письме</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={clocePopup} className="close-button">
            Ок
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={registrationStatus !== null} onHide={handleModalClose} backdrop="dynamic" keyboard={true}>
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

export default SignIn;
