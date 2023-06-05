import './reset.css'
import React from 'react';
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../axios';

const ResetPass = () => {
  const [formData, setFormData] = React.useState({
    email: ''
  });

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
    console.log('data-email', formData)
		axiosInstance
			.post('request-reset-email/', formData)
	};

  return (
    <div>
    <form className='ResetForm'  onSubmit={handleSubmit}>
    <h3>Восстановление пароля</h3>

    <label for="username">Введите вашу электронную почту</label>

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
</div>
  );
};

export default ResetPass;
