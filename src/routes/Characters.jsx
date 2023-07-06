import './Characters.css'
import { useFetch } from '../hooks/useFetch'
import Card from '../components/Card'



const Characters = () => {
  const url = "https://hp-api.onrender.com/api/characters/"

  const {data: personagens} = useFetch(url)

 const newArray = personagens.slice(0,25)

  console.log(newArray)

  return (
    <div className='characters'>
      <h1>Characters</h1>
        <ul className='cards'>
          {newArray.map((person) => (
              <div key={person.id}>
                <Card
                  img={person.image}
                  movie_title={person.name}  
                />
              </div>
          ))}
        </ul>
    </div>
  )
}

export default Characters