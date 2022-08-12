import Card from 'react-bootstrap/Card';
import './Cards.css'

function Cards() {
  return (
    <>
        <Card
          bg="light"
          key="dark"
          text="dark"
          className="card-container mb-2"
        >
          <Card.Header className='card-header' >Header:</Card.Header>
          <Card.Body className='card-body'>
            <Card.Img className='card-img' variant="top" src="./images/home.png" />
            <Card.Text className='card-text'>
              Explanation: 
            </Card.Text>
          </Card.Body>
        </Card>
    </>
  );
}

export default Cards;