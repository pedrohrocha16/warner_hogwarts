import { useState } from 'react'
import './Home.css'
import Card from '../components/Card'
import { useFetch } from '../hooks/useFetch'
import Loader from '../components/Loader'

const Home = () => {

  const {removeLoader} = useFetch()

  const [movie, setMovie] = useState([
    {id:1, name:"Harry Potter and the Sorcerer's Stone", year:2001, image:"./1.jpg"},
    {id:2, name:"Harry Potter and the Chamber of Secrets", year:2002, image:"./2.jpg"},
    {id:3, name:"Harry Potter and the Prisoner of Azkaban", year:2004, image:"./3.jpg"},
    {id:4, name:"Harry Potter and the Goblet of Fire", year:2005, image:"./4.jpg"},
    {id:5, name:"Harry Potter and the Order of the Phoenix", year:2007, image:"./5.jpg"},
    {id:6, name:"Harry Potter and the Half-Blood Prince", year:2009, image:"./6.jpg"},
    {id:7, name:"Harry Potter and the Deathly Hallows Part 1", year:2010, image:"./7.jpg"},
    {id:8, name:"Harry Potter and the Deathly Hallows Part 2	", year:2011, image:"./8.jpg"},

  ])

  return (
    <div className='home_page'>
      <h1>Harry Potter - Sequence Movies</h1>
      <ul className='cards'>
        {movie && movie.map((movies) => (
          <div key={movies.id}>
            <Card
              img={movies.image}
              movie_title={movies.name}
              movie_desc={movies.year}
            />
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Home

//src, movie_title, movie_desc

