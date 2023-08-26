import Search from '../Search/Search'
import './StudentProfile.scss'
import Sidebar from '../Sidebar/Sidebar'
import { useNavigate } from "react-router-dom";
import Dashboard from '../Dashboard/Dashboard'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React from 'react'
import PersonalInfoEdit from './PersonalInfo/PersInfoEdit'
import axiosInstance from '../../axios'
// bootstrap/dist/css/bootstrap.min.css
const StudentEdit = () => {

  const [mainStudList, setMainStudList] = React.useState([])
  const [registrationStatus, setRegistrationStatus] = React.useState(null); // Registration status state
  const [showConfirmationModal, setShowConfirmationModal] = React.useState(false);


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
    setShowConfirmationModal(true); // Show the confirmation modal
  }

  function confirmDelete() {
    axiosInstance.delete('delete/user/', {
    }).then(() => {
      setRegistrationStatus('success: Данные были успешно удалены!');
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      navigate('/');
    }).catch((error) => {
      setRegistrationStatus(`error: ${error.message}`);
    });

    setShowConfirmationModal(false); // Hide the confirmation modal after deletion

  }

  function cancelDelete() {
    setShowConfirmationModal(false); // Hide the confirmation modal if the user cancels the deletion
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

      {/* Confirmation Modal */}
      <Modal show={showConfirmationModal} onHide={cancelDelete}>
        <Modal.Body>
          <p className="error-message">Вы уверены, что хотите удалить свой профиль? Это действие нельзя отменить.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cancelDelete} className="close-button">
            Отмена
          </Button>
          <Button variant="danger" onClick={() => { confirmDelete() }} className="close-button-delete">
            Удалить
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Registration status modal */}
      <Modal show={registrationStatus !== null} onHide={handleModalClose} backdrop="dynamic" keyboard={true}>
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
