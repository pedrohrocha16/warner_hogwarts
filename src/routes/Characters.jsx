import './Characters.css'
import { useFetch } from '../hooks/useFetch'
import Card from '../components/Card'



const Characters = () => {
  return (
    <div className='characters'>
      <h1>Characters</h1>
        <ul className='cards'>
        </ul>
    </div>
  )
}

export default Characters