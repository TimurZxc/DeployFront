import './reset.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ResetPass = () => {
  const [formData, setFormData] = React.useState({
    email: ''
  });

  const [registrationStatus, setRegistrationStatus] = useState(null); // Registration status state

  let navigate = useNavigate()
  const routeHandler = (URL) => {
    navigate(URL)
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  }

  const handleSubmit = (e) => {
		e.preventDefault();
		axiosInstance
			.post('request-reset-email/', formData)
      .then(() =>{
        setRegistrationStatus('success: Для восстановления пароля перейдите по ссылке в письме');
      })
      .catch((error) => {
        setRegistrationStatus(`error: ${error.message}`);
      });
	};

  const handleModalClose = () => {
    setRegistrationStatus(null);
  };

  return (
    <div>
    <form className='ResetForm'  onSubmit={handleSubmit}>
    <h3>Восстановление пароля</h3>

    <label htmlFor="username">Введите вашу электронную почту</label>

    <input
        className='form--inpt'
        type="email"
        name="email"
        placeholder='Email'
        value={formData.email}
        onChange={handleChange}
        id="username"/>

    <button
        className='form--sbt'
        type="submit"
        >Отправить</button>
</form> 

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

export default ResetPass;
