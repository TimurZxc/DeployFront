import "./sign-in.css";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import axiosInstance from "../../axios";
import Sidebar from "../Sidebar/Sidebar";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const SignIn = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const [registrationStatus, setRegistrationStatus] = useState(null); // Registration status state

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
        setRegistrationStatus(`error: ${error.message}`);
      });
	};

  const handleModalClose = () => {
    setRegistrationStatus(null);
  };

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
      <Sidebar/>
    <div className="background">

    </div>
    <form className='SignInFrom'  onSubmit={handleSubmit}>
    <h3>Войдите в аккаунт</h3>

    <label for="username">Электронная почта</label>

    <input
        className='form--inpt'
        type="email"
        name="email"
        placeholder='Email'
        value={formData.email}
        onChange={handleChange}
        id="username"/>

    <label className='signLabel' for="password">Пароль</label>
    <input
        className='form--inpt'
        placeholder='Введите пароль'
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        id="password"/>

    <button className='form--sbt' type="submit" >Войти</button>
    {/* <div className="social">
      <div className="go"><FontAwesomeIcon icon={faGoogle} size="lg"/>  Google</div>
      <div className="fb"><FontAwesomeIcon icon={faFacebook} size="lg"/>  Facebook</div>
    </div> */}
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

export default SignIn;
