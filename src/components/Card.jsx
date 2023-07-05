import './Card.css'
import Card from 'react-bootstrap/Card';


function BasicExample({img, movie_title, movie_desc}) {
  return (
    <Card className='card'>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title style={{color:"#fff900", fontFamily:"Orbitron, sans-serif", fontSize:"18px"}}>{movie_title}</Card.Title>
        <Card.Text style={{color:"#00e5ff", fontFamily:"Orbitron, sans-serif", fontSize:"14px"}}>{movie_desc}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;