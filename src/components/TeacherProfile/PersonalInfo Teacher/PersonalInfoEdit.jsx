import axiosInstance from '../../../axios';
import './PersonalInfoTeach.css'
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import userpic from '../../../images/blue_user.png'
import Sprite from '../../Sprite/Sprite';


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
    teacher:{
      phone: props.phone,
      education: props.education,
      experience: props.experience
    },
    telegram: props.telegram
  });

  const [registrationStatus, setRegistrationStatus] = useState(null); // Registration status state

  const [isDeleteClicked, setIsDeleteClicked] = useState(false);

  const [image, setImage] = useState(null);

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
    const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
    requestData.append('first_name', formData.first_name);
    requestData.append('last_name', formData.last_name);
    requestData.append('email', formData.email);
    requestData.append('teacher.phone', formData.teacher.phone);
    requestData.append('teacher.education', formData.teacher.education);
    requestData.append('teacher.experience', formData.teacher.experience);
    requestData.append('surname', formData.surname);
    requestData.append('birth_date', formData.birth_date);
    requestData.append('telegram', formData.telegram);
    console.log('isDeleteClicked', isDeleteClicked)
    if (isDeleteClicked) {
      requestData.append('image', '');
    } else if (image) {
      requestData.append('image', image);
    }
    axiosInstance.patch('/update/teacher/', requestData, config)
      .then(() => {
        setRegistrationStatus('success: Данные были успешно обновлены!');
      })
      .catch((error) => {
        console.log('error', error);
        setRegistrationStatus(`error: ${error.message}`);
      });
  };

  const requestData = new FormData();

  function handleDelete() {
    setIsDeleteClicked(true);
    setRegistrationStatus('success: Фото было успешно удалено! Сохраните изминения.');
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
              name="teacher.education"
              className="form--input"
              value={formData.teacher.education}
              onChange={handleChange}
            />
          </div>
          <div className="fourth-row_t">
            <input
              type="text"
              placeholder="Опыт и достижения"
              name="teacher.experience"
              className="form--input"
              value={formData.teacher.experience}
              onChange={handleChange}
            />
          </div>
          <div className="fourth-row_t">
          <input
            type="text"
            placeholder="Номер Телефона"
            name="teacher.phone"
            className="form--input"
            value={formData.teacher.phone}
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
              <img className='puple-teach-img' src={props.image ? props.image : userpic} alt="image was not found" crossOrigin="anonymous"/>
              <div className="round">
              <input
                      accept='image/*'
                      type="file"
                      name="image"
                      onChange={handleImageChange}
                    />
              <Sprite id='camera' />
              </div>
            </div>
          <br />
          <button onClick={() => { handleDelete() }} className="second-row_t_c">Удалить Фото</button>
          <br />
          <button onClick={() => { handleUpdate(props.id) }} className="second-row_t_c">Сохранить</button>
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
