import './ContactInfoTeach.scss'
const ContactInfoTeach = (props) => {
  return (
    <div className="contact-body_t">
      <div className="first-col_c">
        <div className="first-row_c">Номер телефона</div>
        <div className="second-row_с">Эл. почта</div>
        <div className="third-row">Телеграм</div>
      </div>
      <div className="second-col_c">
        <div className="first-row_c">{props.phone}</div>
        <br />
        <div className="second-row">{props.email}</div>
        <br />
        <div className='third-row'>{props.telegram}</div>
      </div>
    </div>
  )
}

export default ContactInfoTeach
