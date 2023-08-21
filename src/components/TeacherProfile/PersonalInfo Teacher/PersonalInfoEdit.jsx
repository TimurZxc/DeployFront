import axiosInstance from '../../../axios';
import './PersonalInfoTeach.css'
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import userpic from '../../../images/blue_user.png'
import Sprite from '../../Sprite/Sprite';
import Avatar from 'react-avatar-edit';
import axios from 'axios';
import Lottie from 'lottie-react'
import animationData from '../../../assets/animation_lktzbjcg.json'
import 'bootstrap/dist/css/bootstrap.min.css'; 


const PersonalInfoTeachEdit = (props) => {

  const navigate = useNavigate();
  const routeHandler = (URL) => {
    navigate(URL)
  }
  const [preview, setPreview] = useState(props.image ? props.image : null);

  const [src, setSrc] = useState(props.image);

  useEffect(() => {
    async function getImage() {
      try {
        const response = await axios.get(preview, { responseType: 'blob', crossOrigin: 'anonymus' });
        const file = new File([response.data], 'image.jpg', { type: 'image/jpeg' });
        setSrc(URL.createObjectURL(file));
      } catch (error) {
        console.error(error);
      }
    }

    getImage();
  }, []);

  function onClose() {
    setPreview(null);
    handleImgDelete()
  }

  function onCrop(preview) {
    setPreview(preview);
  }

  function onBeforeFileLoad(elem) {
    if (elem.target.files[0].size > 517168000) {
      alert('File is too big!');
      elem.target.value = '';
    }
  }

  const [formData, setFormData] = useState({
    first_name: props.first_name,
    last_name: props.last_name,
    birth_date: props.birth_date,
    email: props.email,
    surname: props.surname,
    teacher: {
      phone: props.phone,
      education: props.education,
      experience: props.experience
    },
    telegram: props.telegram
  });

  const [registrationStatus, setRegistrationStatus] = useState(null); // Registration status state

  const [isDeleteClicked, setIsDeleteClicked] = useState(false);

  const [image, setImage] = useState(null);

  const [croppedImage, setCroppedImage] = useState(null);

  const [isImageUpdated, setIsImageUpdated] = useState(false);

  const [isModalOpen, setModalOpen] = useState(null);

  const [isEmailChanged, setIsEmailChanged] = useState(false);

  function dataURLtoFile(dataURL, filename) {
    const arr = dataURL.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }


  function onSave() {
    const config = {
      headers: {
        Authorization: localStorage.getItem('access_token')
          ? 'Bearer ' + localStorage.getItem('access_token')
          : null,
        'Content-Type': 'image/jpeg',
        accept: 'application/json'
      },
    };

    const requestDataImg = new FormData();

    const file = dataURLtoFile(preview, 'image.png');
    requestDataImg.append('image', file);
    axiosInstance.patch('/update/teacher/', requestDataImg, config)
      .then(() => {
        setRegistrationStatus('success: Фото было успешно обновлено!');
        setIsImageUpdated(true); // Set the state variable to true on successful image update
      })
      .catch((error) => {
        console.log('error', error);
        setRegistrationStatus(`error: ${error.message}`);
      });
  }

  useEffect(() => {
    if (isImageUpdated || isDeleteClicked) {
      // Reload the page
      window.location.reload();
    }
  }, [isImageUpdated, isDeleteClicked]);


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

    // Handle each textarea separately
    if (name === 'teacher.education') {
      const inputTextEdu = value;
      if (inputTextEdu.length <= 1000) {
        setTextEdu(inputTextEdu);
      }
    }

    if (name === 'teacher.experience') {
      const inputTextExp = value;
      if (inputTextExp.length <= 1000) {
        setTextExp(inputTextExp);
      }
    }

  };

  const handleEmailChange = event => {
    const { value } = event.target;
    
    if (value !== props.email) {
      setIsEmailChanged(true);
    }
  
    setFormData(prevFormData => ({
      ...prevFormData,
      email: value
    }));
  };
  

  // const handleImageChange = (event) => {
  //   setImage(event.target.files[0]);
  // };

  const requestData = new FormData();

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

    if (isDeleteClicked) {
      requestData.append('image', '');
    } else if (image) {
      requestData.append('image', image);
    }
    axiosInstance.patch('/update/teacher/', requestData, config)
      .then(() => {
        setRegistrationStatus('success: Данные были успешно обновлены!');
        if (isEmailChanged) {
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
          navigate('/')
        }
      })
      .catch((error) => {
        console.log('error', error);
        setRegistrationStatus(`error: ${error.message}`);
      });
  };

  const handleImgDelete = ()=> {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    const requestDataImg = new FormData();
    requestDataImg.append('image', '');

    axiosInstance.patch('/update/teacher/', requestDataImg, config)
    .then(() => {
      setRegistrationStatus('success: Фото было успешно удалено!');
      setIsDeleteClicked(true)
    })
    .catch((error) => {
      console.log('error', error);
      setRegistrationStatus(`error: ${error.message}`);
    });
  }

  const handleModalClose = () => {
    setRegistrationStatus(null);
  };

  const handleModalClosePhoto = () => {
    setModalOpen(null);
  };

  function handleOpenModal() {
    setModalOpen(1);
  }

  const [textEdu, setTextEdu] = useState(formData.teacher.education);

  const [textExp, setTextExp] = useState(formData.teacher.experience);


  return (
    <>
      <div className="body_t">
        <div className="first-col_t_edit">
          <div className="first-row_t_edit">
            <input
              type="text"
              placeholder="Имя"
              name="first_name"
              className="form--input"
              value={formData.first_name}
              onChange={handleChange}
            />
          </div>
          <div className="second-row_t_edit">
            <input
              type="text"
              placeholder="Фамилия"
              name="last_name"
              className="form--input"
              value={formData.last_name}
              onChange={handleChange}
            />
          </div>
          <div className="third-row_t_edit">
          </div>
          <div className="fourth-row_t_edit">
            <input
              type="date"
              placeholder="Возраст"
              name="birth_date"
              className="form--input"
              value={formData.birth_date}
              onChange={handleChange}
            />
          </div>
          <div className="fourth-row_t_edit">
            <textarea
              value={textEdu}
              onChange={handleChange}
              name="teacher.education"
              className="form--input-area"
              maxLength={1000}
            />
          </div>
          <p className='area-text'>{1000 - textEdu.length}</p>
          <div className="fourth-row_t_edit">
            <textarea
              value={textExp}
              onChange={handleChange}
              name="teacher.experience"
              className="form--input-area"
              maxLength={1000}
            />
          </div>
          <p className='area-text'>{1000 - textExp.length}</p>
          <div className="fourth-row_t_edit">
            <input
              type="text"
              placeholder="Номер Телефона"
              name="teacher.phone"
              className="form--input"
              value={formData.teacher.phone}
              onChange={handleChange}
            />
          </div>
          <div className="fourth-row_t_edit">
            <input
              type="email"
              placeholder="Email адрес"
              name="email"
              className="form--input"
              value={formData.email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="fourth-row_t_edit">
            <input
              type="email"
              placeholder="Telegram"
              name="telegram"
              className="form--input"
              value={formData.telegram}
              onChange={handleChange}
            />
          </div>
          <br />
          <button onClick={() => { handleUpdate(props.id) }} className="edit-save-but">Сохранить</button>
        </div>

        <div className="second-col_t">

          <div className="upload">
            <img src={props.image ? props.image : userpic} alt="image was not found" className='teach-puple-img' crossOrigin="anonymous" />
            <div className="round">
              <div onClick={handleOpenModal} type='button' className='photoButt'>
                <Sprite id='camera' />
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>

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

      <Modal show={isModalOpen === 1} onHide={handleModalClosePhoto}>
        <Avatar
          width={'auto'}
          height={350}
          minWidth={350}
          onCrop={onCrop}
          onClose={onClose}
          onBeforeFileLoad={onBeforeFileLoad}
          src={src}
          cropRadius={70}
          labelStyle={{ 'width': 350 }}
          label={"Загрузите фотографию"}
        />
        <div className='imgControls'>
          <button onClick={onSave} className="second-row_t_c_photo">Изменить фото</button>
          <Button variant="secondary" onClick={handleModalClosePhoto} className="close-button-photo">
            Закрыть
          </Button>
        </div>
      </Modal>

    </>
  )
}

export default PersonalInfoTeachEdit
