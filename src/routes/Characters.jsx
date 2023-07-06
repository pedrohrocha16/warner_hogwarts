import './Characters.css'
import { useFetch } from '../hooks/useFetchCharacters'
import Card from '../components/Card'
import Loader from '../components/Loader'

const url = "https://hp-api.onrender.com/api/characters"

const Characters = () => {

  const {data, removeLoader} = useFetch(url)

  return (
    <div className='characters'>
      <h1>Characters</h1>
        <ul className='cards'>
        {data && data.map((person) => (
            <div key={person.id}>
              <Card
                img={person.image}
                movie_title={person.name}  
              />
            </div>
         ))}
          {!removeLoader && <Loader />}
        </ul>
    </div>
  )
}

export default Characters