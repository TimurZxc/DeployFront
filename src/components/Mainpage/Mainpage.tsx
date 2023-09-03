import Search from '../Search/Search'
import MainpageCard from '../MainpageCard/MainpageCard'
import HorizontalMainpageCard from '../HorizontalMainpageCard/HorizontalMainpageCard'
import studentPicture from '../../images/puple.png'
import teacherCard from '../../assets/svg-pictures/teacher.svg'
import parent from '../../assets/svg-pictures/parents.svg'
import school from '../../assets/svg-pictures/school.svg'
import Sidebar from '../Sidebar/Sidebar'
import Dashboard from '../Dashboard/Dashboard'
import './Mainpage.scss'

const Mainpage = () => {
  return (
    <div className="main">
      <Sidebar />
      <div className="main-wrapper">
        {/* <Search /> */}
        <h3 className="main-title">
          Добро пожаловать в онлайн образовательную платформу Teach2U
        </h3>
        <div className="cards-block">
          <div className="card-row all-cards">
            <MainpageCard
              src={studentPicture}
              text="Проходи обучение как ученик и получай качественное образование от лучших преподователей"
              buttonText="Начать обучение"
              url='/register'
            />
            <MainpageCard
              src={teacherCard}
              text="Стань репетитором, создавай курсы, обучай, находи новых клиентов быстро и легко"
              buttonText="Начать обучать"
              url='/regTeach'
            />
            {/* <HorizontalMainpageCard
              src={parent}
              text="Следите за успеваемостью вашего ребенка и общайтесь с репетиторами через аккаунт родителя"
              buttonText="Регистрация"
              url='/#'
            /> */}
            {/* <HorizontalMainpageCard
              src={school}
              text="Зарегистрируйте свой образовательный центр и начните получать заявки на обучение"
              buttonText="Регистрация"
              url='/regEduCent'
            /> */}
          </div>
        </div>
        <div className='discount'>
          <h3>📚Внимание преподавателям!📚</h3>
          <p>Мы рады пригласить вас для участия в бета-тестировании нашего образовательного сайта!
            Вместе мы создадим будущее образования, и для вас у нас есть особенное предложение!</p>
          <br />
          <h4>⭐Ваши выгоды:</h4>
          <ul>
            <li><span>✅ </span>Во время бета-тестирования вы будете абсолютно бесплатно размещать свои объявления на сайте!</li>
            <li><span>✅ </span>И, самое главное, вы получите эксклюзивную скидку в размере 30% на наши услуги при долгосрочной поддержке проекта!</li>
          </ul>
          <br />
          <p>🤝Нам вaжно ваше мнение, ваш опыт и потребности в предоставлении своих услуг на образовательных платформах. Присоединяйтесь к нам,
            и вместе мы создадим образовательное пространство, которое будет соответствовать вашим идеалам!</p>
          <br />
          <p>📅 Сроки акции ограничены, поэтому не упустите свой шанс внести вклад в будущее образования и воспользоваться уникальной скидкой!</p>
        </div>
      </div>
      {/* <Dashboard/> */}
    </div>
  )
}

export default Mainpage
