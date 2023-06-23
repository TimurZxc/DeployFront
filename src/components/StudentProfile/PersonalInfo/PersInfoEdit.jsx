import axiosInstance from '../../../axios';
import './PersonalInfo.scss'
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import userpic from '../../../images/puple.png'
import Sprite from '../../Sprite/Sprite';

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
    student:{
      phone: props.phone,
    },
    telegram: props.telegram,
    image_pr: props.image
  });
  const config = {
    headers:{
      'Content-Type': 'application/json',
    }
  };
  const [registrationStatus, setRegistrationStatus] = useState(null); // Registration status state

  const [image, setImage] = useState(null)
  // const handleChange = event => {
  //   const { name, value } = event.target;
  //   setFormData(prevFormData => ({
  //     ...prevFormData,
  //     [name]: value
  //   }));
  // };

  const handleChange = event => {
    const { name, value } = event.target;
  
    // Split the name into nested keys
    const nameParts = name.split('.');
  
    // Update the nested state correctly
    if (nameParts.length === 1) {
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value
      }));
    } else if (nameParts.length === 2) {
      setFormData(prevFormData => ({
        ...prevFormData,
        [nameParts[0]]: {
          ...prevFormData[nameParts[0]],
          [nameParts[1]]: value
        }
      }));
    }
  };
  

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

    function handleUpdate() {

      console.log('formData', formData);
      axiosInstance.patch('/update/student/', {
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        image: image ? image : formData.image_pr,
        student:{phone: formData.student.phone},
        surname: formData.surname,
        birth_date: formData.birth_date,
        telegram: formData.telegram
      }).then(() => {
        setRegistrationStatus('success: Данные были успешно обновлены!');
      })
        .catch((error) => {
          console.log('error', error)
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
              name="student.phone"
              className="form--input"
              value={formData.student.phone}
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
              type="text"
              placeholder="Telegram"
              name="telegram"
              className="form--input"
              value={formData.telegram}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="second-col">

          <div className="upload1">
            <img className='puple-teach-img' src={props.image ? props.image : userpic} alt="image was not found" crossorigin="anonymous" />
            <div className="round">
              <input
                accept='image/*'
                type="file"
                name="image"
                onChange={handleImageChange}
              />
              <Sprite id='camera' className='icon' />
            </div>
          </div>
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
