import Loader from '../components/Loader'
import './ErrorPage.css'
import {useNavigate} from 'react-router-dom'

const ErrorPage = () => {

  const navigate = useNavigate()

  const handleSubmit = () => {

    navigate ('/')
  }
  return (
    <div className='errorPage'>
      <h1>OPS! An error occurs, please click the button below and return to the main page!</h1>
      <button onClick={handleSubmit}>Home</button>
    </div>
  )
}

export default ErrorPage