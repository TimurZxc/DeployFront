import './Sidebar.scss'
import Sprite from '../Sprite/Sprite'
import { useNavigate } from 'react-router-dom'
import jwt_decode from "jwt-decode";


const Sidebar = () => {
  let navigate = useNavigate()
  const routeHandler = (URL) => {
    navigate(URL)
  }

  function logout() {
    localStorage.removeItem('access_token'),
    localStorage.removeItem('refresh_token')
    navigate('/')
  }

  const user = localStorage.getItem('access_token')
  let decode 

  if (user){
    decode = jwt_decode(user)
  }

  const is_teacher = decode?.is_teacher
  const is_student = decode?.is_student

  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-content">
        <div className="logo">
          <Sprite id="logo" />
          <h1 className="logo-title">Teach2U</h1>
        </div>
        <div className="menu">
          <h1 className="menu-title">Главное Меню</h1>
          <div className="navigation">
            <div
              onClick={() => routeHandler('/')}
              className={
                window.location.pathname === '/'
                  ? `navigation-item active`
                  : `navigation-item`
              }
            >
              <Sprite id="mainpage" />
              <h1>Главная</h1>
            </div>
            <div
              onClick={() => routeHandler('/teach')}
              className={
                window.location.pathname === '/teach'
                  ? `navigation-item active`
                  : `navigation-item`
              }
            >
              <Sprite id="learn" />
              <h1>Репетиторы</h1>
            </div>
            {/* <div
              onClick={() => routeHandler('/courses')}
              className={
                window.location.pathname === '/courses'
                  ? `navigation-item active`
                  : `navigation-item`
              }
            >
              <Sprite id="book" />
              <h1>Курсы</h1>
            </div> */}
            {user ? <div></div> : <div
              onClick={() => routeHandler('/regDefolt')}
              className={
                window.location.pathname === '/regDefolt'
                  ? `navigation-item active`
                  : `navigation-item`
              }
            >
              <Sprite id="registerdefault" />
              <h1>Регистрация</h1>
            </div>}

{user && is_teacher ?
  <div
    onClick={() => routeHandler('/profileTeacher')}
    className={
      window.location.pathname === '/profileTeacher'
        ? `navigation-item active`
        : `navigation-item`
      }
      >
    <Sprite id="profile" />
    <h1>Профиль Учителя</h1>
  </div> : <div></div>}

{user && is_student ?
  <div
    onClick={() => routeHandler('/profile')}
    className={
      window.location.pathname === '/profile'
        ? `navigation-item active`
        : `navigation-item`
      }
      >
    <Sprite id="profile" />
    <h1>Профиль</h1>
  </div> : <div></div>}

    {user ? (
              <div
                onClick={() => logout()}
                className={
                  window.location.pathname === '/login'
                    ? `navigation-item active`
                    : `navigation-item`
                }
              >
                <Sprite id="register" />
                <h1>Выход</h1>
              </div>
            ) : (
              <div
                onClick={() => routeHandler('/login')}
                className={
                  window.location.pathname === '/login'
                    ? `navigation-item active`
                    : `navigation-item`
                }
              >
                <Sprite id="register" />
                <h1>Войти</h1>
              </div>
            )
            }

          </div>
        </div>
        {/* <div className="settings">
          <h1 className="settings-title">Настройки</h1>
          <div className="navigation">
            <div className="navigation-item">
              <Sprite id="wallet" />
              <h1>Кошелек</h1>
            </div>
            <div className="navigation-item">
              <Sprite id="tech-support" />
              <h1>Тех. поддержка</h1>
            </div>
            <div className="navigation-item">
              <Sprite id="faq" />
              <h1>FAQ</h1>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Sidebar
