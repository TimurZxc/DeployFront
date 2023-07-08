import Search from '../Search/Search'
import './StudentProfile.scss'
import Sidebar from '../Sidebar/Sidebar'
import { useNavigate} from "react-router-dom";
import Dashboard from '../Dashboard/Dashboard'
import React from 'react'
import PersonalInfoEdit from './PersonalInfo/PersInfoEdit'
import axiosInstance from '../../axios'

const StudentEdit = () => {

  const [mainStudList, setMainStudList] = React.useState([])
  const [registrationStatus, setRegistrationStatus] = React.useState(null); // Registration status state

  const navigate = useNavigate();
  const routeHandler = (URL) => {
    navigate(URL)
  }

  React.useEffect(() => {
    axiosInstance
      .get("curr/")
      .then((response) => {
        const data = response.data;
        setMainStudList(data);

        console.log("student data", data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

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

  const CurrentUser = mainStudList.map(data => {
    return <PersonalInfoEdit
      key={data?.id}
      id={data?.id}
      first_name={data?.first_name}
      last_name={data?.last_name}
      birth_date={data?.birth_date}
      email={data?.email}
      telegram={data?.telegram}
      phone={data?.student?.phone}
      image={data?.image}
      {...data} />
  })
  return (
    <div className="main">
      <Sidebar />
      <div className="profile-wrapper">
        {/* <Search /> */}
        <h1 className="profile-title">Настройки профиля ученика</h1>
        <div className="settings-block">
          <section className='course-list'>{CurrentUser}</section>
          <button onClick={() => { handleDelete() }} className="second-row_t_c_delete">Удалить Профиль</button>
        </div>
      </div>
          {/* Registration status modal */}
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
  )
}

export default StudentEdit
