import './Spells.css'
import Card from '../components/Card'
import {useFetch} from '../hooks/useFetch'
import Loader from '../components/Loader'

const url= "https://hp-api.onrender.com/api/spells"

const Spells = () => {

  const {data: spells, removeLoader}= useFetch(url)

  return (
    <div className='spells'>
      <h1>Spells...</h1>
        <ul className='cards_spells'>
          {spells && spells.map((spell) => (
            <div key={spell.id} className='spells_height'>
              <Card
                movie_title={spell.name}
                movie_desc={spell.description}
              />
            </div>
          ))}
          {!removeLoader && <Loader />}
        </ul>
    </div>
  )
}

export default Spells