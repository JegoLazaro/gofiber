import {Card, Form, Button} from 'react-bootstrap';
import './Cards.css'

function Cards(props) {
  return (
    <>
        <Card
          bg="light"
          key="dark"
          text="dark"
          className="card-container mb-2">
            <Card.Body className='card-body'>
                <Card.Img className='card-img' variant="top" src={props.image}/>
                <Card.Text className='card-text'>
                {props.text} 
                </Card.Text>
                
            </Card.Body>
            <Card.Header className='card-header' > 
            <Button size='md' className='card-btn'>{props.title}</Button>
            </Card.Header>
        </Card>
    </>
  );
}

export default Cards;