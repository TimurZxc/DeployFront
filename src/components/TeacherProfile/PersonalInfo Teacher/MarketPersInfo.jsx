import './PersonalInfoTeach.css'
import userpic from '../../../images/blue_user.png'


const MarketPersInfo = (props) => {

  return (
    <div className="body_t">
      <div className="first-col_t">
        <div className="first-row_t">
          <div className="first_t">Имя</div>
          <div className="first_t_edu">{props.first_name}</div>
        </div>
        <div className="second-row_t">
          <div className="first_t">Фамилия</div>
          <div className="first_t_edu">{props.last_name}</div>
        </div>
        <div className="third-row_t">
          <div className="first_t">Образование</div>
          <div className="first_t_edu">{props.education}</div>
        </div>
        <div className="fourth-row_t">
          <div className="first_t">Опыт и достижения</div>
          <div className="first_t_edu">{props.experience}</div>
        </div>
        <div className="fourth-row_t">
          <div className="first_t">Дата рождения</div>
          <div className="first_t_edu">{props.birth_date}</div>
        </div>
        </div>

      <div className="second-col_t">
        <img className='pers-img' src={props.image ? `http://localhost:8000${props.image}` : userpic} alt="Avatar" crossOrigin="anonymous"/>
      </div>

    </div>
  )
}

export default MarketPersInfo
