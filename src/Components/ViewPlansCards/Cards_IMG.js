import React from 'react';
import {Card, Button} from 'react-bootstrap';
import './Cards.css'

function Cards_IMG(props) {
    return (
    <>
        <Card className="cards-plans-img plans-cards" >
            <Card.Img  variant="top" src={props.image} />
        </Card>
    </>
    );
}
  
export default Cards_IMG ;
