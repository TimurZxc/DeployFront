import axiosInstance from '../../../axios';
import './PersonalInfo.scss'
import React, { useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import userpic from '../../../images/blue_user.png'
import Sprite from '../../Sprite/Sprite';
import Avatar from 'react-avatar-edit';
import axios from 'axios';

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
    student: {
      phone: props.phone,
    },
    telegram: props.telegram,
    image_pr: props.image // ???
  });

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
    handleDelete()
  }

  const onCrop =(preview)=> {
    setPreview(preview);
  }

  function onBeforeFileLoad(elem) {
    if (elem.target.files[0].size > 5171680) {
      alert('File is too big!');
      elem.target.value = '';
    }
  }

  const [registrationStatus, setRegistrationStatus] = useState(null); // Registration status state

  const [image, setImage] = useState(null)
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);

  const [preview, setPreview] = useState(props.image ? props.image : null);

  const [src, setSrc] = useState(props.image);

  const [croppedImage, setCroppedImage] = useState(null);

  const [isModalOpen, setModalOpen] = useState(null);

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
        'Content-Type': 'image/jpeg',
      },
    };

  const requestData = new FormData();
  const file = dataURLtoFile(preview, 'image.png');
  requestData.append('image', file);
  console.log('Cropped image URL:', file);

  axiosInstance.patch('/update/teacher/', requestData, config)
    .then(() => {
      setRegistrationStatus('success: Фото было успешно обновлено!');
    })
    .catch((error) => {
      console.log('error', error);
      setRegistrationStatus(`error: ${error.message}`);
    });
  window.location.reload(true)
}

  // const handleChange = event => {
  //   const { name, value } = event.target;
  //   setFormData(prevFormData => ({
  //     ...prevFormData,
  //     [name]: value
  //   }));
  // };


  // const handleImageChange = (event) => {
  //   setImage(event.target.files[0]);
  // };

  const requestData = new FormData();

  function handleDelete() {
    setIsDeleteClicked(true);
    setRegistrationStatus('success: Фото было успешно удалено! Сохраните изминения.');
  }

  function handleUpdate() {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    requestData.append('first_name', formData.first_name);
    requestData.append('last_name', formData.last_name);
    requestData.append('email', formData.email);
    requestData.append('student.phone', formData.student.phone);
    requestData.append('surname', formData.surname);
    requestData.append('birth_date', formData.birth_date);
    requestData.append('telegram', formData.telegram);
    console.log('isDeleteClicked', isDeleteClicked)
    if (isDeleteClicked) {
      requestData.append('image', '');
    } else if (image) {
      requestData.append('image', image);
    }
    axiosInstance.patch('/update/student/', requestData, config)
      .then(() => {
        setRegistrationStatus('success: Данные были успешно обновлены!');
      })
      .catch((error) => {
        console.log('error', error);
        setRegistrationStatus(`error: ${error.message}`);
      });
  }
  

  const handleModalClose = () => {
    setRegistrationStatus(null);
  };

  function handleDelete() {
    setIsDeleteClicked(true);
    setRegistrationStatus('success: Фото было успешно удалено! Сохраните изминения.');
  }

  const handleModalClosePhoto = () => {
    setModalOpen(null);
  };

  function handleOpenModal() {
    setModalOpen(1);
  }


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
            <img className='puple-teach-img' src={props.image ? props.image : userpic} alt="image was not found" crossOrigin="anonymous" />
            <div className="round">
            <div onClick={handleOpenModal} type='button' className='photoButt'>
              <Sprite id='camera' className='icon' />
              </div>
            </div>
          </div>
          <br />
          {/* <button onClick={() => { handleDelete() }} className="second-row_t_c">Удалить фото</button> */}
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

      <Modal show={isModalOpen === 1} onHide={handleModalClosePhoto}>
        <Avatar
          width={'fit-content'}
          height={350}
          minWidth={350}
          onCrop={onCrop}
          onClose={onClose}
          onBeforeFileLoad={onBeforeFileLoad}
          src={src}
          cropRadius={130}
          labelStyle={{ 'width': 350 }}
          label={"Загрузите фотографию"}
        />
        <button onClick={onSave} className="second-row_t_c_photo">Изменить фото</button>
        <Button variant="secondary" onClick={handleModalClosePhoto} className="close-button-photo">
          Закрыть
        </Button>
      </Modal>

    </>
  )
}

export default PersonalInfoEdit
