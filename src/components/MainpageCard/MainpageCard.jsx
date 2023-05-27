import './MainpageCard.scss'
import { useNavigate } from 'react-router-dom'

const MainpageCard = (props) => {

  let navigate = useNavigate()
  const routeHandler = (URL) => {
    navigate(URL)
  }

  return (
    <div className="card-wrapper">
      <img className="card-image" src={props.src} alt="" />
      <h1 className="card-text">{props.text}</h1>
      <p>HUI</p>
      <button onClick={() => routeHandler(`${props.url}`)}  className="card-button">{props.buttonText}</button>
    </div>
  )
}

export default MainpageCard
