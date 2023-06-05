import './confirm.css'
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../../axios';

const ConfirmPass = () => {
  const [formData, setFormData] = React.useState({
    password: '',
    uidb64: '',
    token: ''
  });

  const [pass, setPass] = React.useState({
    password: ''
  })

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

  function handleChange1(event) {
    const { name, value } = event.target;
    setPass(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  }

  const paramss = useParams();
  React.useEffect(()=>{
    axiosInstance.get('password-reset/'+paramss.u_id+'/'+paramss.token+'/').then((response)=>{
      
      setFormData(response.data)
        console.log('url_data:', response.data)
    })
  }, [])


  const handleSubmit = event => {
    event.preventDefault();
    if (formData.password !== pass.password) {
      console.log('Passwords do not match');
    } else {
      console.log('Passwords match');
    }

    axiosInstance
      .patch('password-reset/'+paramss.u_id+'/'+paramss.token+'/', formData)
      console.log('Data:', formData)
      navigate('/login')
  };


  return (
    <div>
    <div className="background">
    </div>
    <form className='ConfirmForm'  onSubmit={handleSubmit}>
    <h3>Восстановление пароля</h3>


    <label for="password">Придумайте новый, надежный пароль</label>
    <input
        className='form--inpt'
        placeholder='Введите пароль'
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        id="password"/>

    <label for="password1">Повторите пароль</label>
    <input
        className='form--inpt'
        placeholder='Введите пароль'
        type="password"
        name="password"
        value={pass.password}
        onChange={handleChange1}
        id="password"/>

    <button
        className='form--sbt'
        type="submit"
        onClick={handleSubmit}>Подтвердить</button>
</form> 
</div>
  );
};

export default ConfirmPass;
