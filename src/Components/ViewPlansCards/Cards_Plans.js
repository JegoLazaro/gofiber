import {Card, Button} from 'react-bootstrap';
import './Cards.css';

function Cards_Plans(props) {
    return (
        <>
            <Card className="cards-plans-txt plans-cards" >
                <Card.Body>
                    <Card.Text style={{fontSize: '15px'}}>
                    {props.text}
                    </Card.Text>
                    <Button className='card-btn plans-btn' variant="primary">{props.button}</Button>
                </Card.Body>
            </Card>
        </>
    );
}

export default Cards_Plans ;