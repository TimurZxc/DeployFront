import './ContactInfoTeach.scss'
const ContactInfoTeach = (props) => {
  return (
    <div className="contact-body_t">
      <div className="first-col_c">
        <div className="first-row_c">Номер телефона</div>
        <div className="second-row">{props.phone}</div>
      </div>
      <div className="second-col_c">
        <div className="second-row_с">Эл. почта</div>
        <div className="second-row">{props.email}</div>
      </div>
      <div className='third-col_c'>
        <div className="third-row_с">Телеграм</div>
        <div className='second-row'>{props.telegram}</div>
      </div>
    </div>
  )
}

export default ContactInfoTeach
