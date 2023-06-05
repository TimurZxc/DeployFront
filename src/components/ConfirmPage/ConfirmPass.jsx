import './confirm.css'
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../../axios';

const ConfirmPass = () => {
  const [formData, setFormData] = React.useState({
    password: '',
    password1: ''
  });

  const [urlData, setUrlData] = React.useState({
    u_id: '',
    token: ''
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

  const paramss = useParams();
  React.useEffect(()=>{
    axiosInstance.get('password-reset/'+paramss.u_id+'/'+paramss.token+'').then((response)=>{

      setUrlData(response.data)
        console.log('url_data:', response.data)
    })
  }, [])


  const handleSubmit = event => {
    event.preventDefault();
    if (formData.password !== formData.password1) {
      console.log('Passwords do not match');
    } else {
      console.log('Passwords match');
    }
    let formattedData = JSON.stringify(formData)
    axiosInstance
      .post('password-reset/uid/token/', formData.password, paramss.u_id, paramss.token)
      .then(() =>
        console.log(`Data has been send successfully: ${formattedData}`)
      )
      .catch((error) => console.log(error.response.data))
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
        name="password1"
        value={formData.password1}
        onChange={handleChange}
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
