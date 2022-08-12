import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {Container, Card, Form, FloatingLabel, Row, Col, Button} from 'react-bootstrap';
import { createRipples } from 'react-ripples'
import './Features.css';

import ApplyNowComp from './ApplyNowComponent';
import CheckAvailComp from './CheckAvComponent';


function FeaturesTab() {

  const MyRipples = createRipples({
    color: '#239586',
    during: 800,
  })

  return (
    <Container md="auto" className="container">
    <Card className="cards">
    <Tabs
      defaultActiveKey="checkAvailability"
      id="fill-tab-example"
      className="tabs mb-3"
      fill
    >
      <Tab eventKey="checkAvailability" onClick={MyRipples} title="Check Availability" tabClassName='checkAvTab' className='checkAv'>
        <p>Get the internet that you deserve! Let’s start with your basic details!</p>
        <CheckAvailComp/>
      </Tab>
      <Tab eventKey="applyNow" title="Apply Now" tabClassName='applyNowTab' className='applyNow'>
        <p>Take advantage of the most affordable and most reliable high speed fiber internet in the market today. 
          Finally, your money’s worth. And yes, there is NO DATA CAP.</p>
          
      <ApplyNowComp/>
      </Tab>
      <Tab eventKey="payHere" title="Pay Here" tabClassName='payHereTab' className='payHere'>
      <p>Please Login/Register to proceed with checking your outstanding 
      balance and making your payment.</p>
      </Tab>
      <Tab eventKey="checkStatus" title="Check Status" tabClassName='checkStatusTab' className='checkStatus'>
      <p>Please enter the reference number we sent to your registered email address to check the status of your existing application. If your reference number 
        starts with SS, kindly go through this link.</p>
      </Tab>
    </Tabs>
    </Card>
    </Container>
  );
}

export default FeaturesTab;