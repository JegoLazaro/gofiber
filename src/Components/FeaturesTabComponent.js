import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {Container, Card, OverlayTrigger, Tooltip, Image} from 'react-bootstrap';
import { createRipples } from 'react-ripples'
import {Link} from 'react-router-dom';
import './Features.css';

import ApplyNowComp from './ApplyNowComponent';
import CheckAvailComp from './CheckAvComponent';
import CheckStatusComp from './CheckStatusComponent';


function FeaturesTab() {

  return (
    <Container md="auto" className="container">
      <Card className="cards">
        <Tabs
          defaultActiveKey="checkAvailability"
          id="fill-tab-example"
          className="tabs mb-3"
          fill
          TabIndicatorProps
        >
          <Tab eventKey="checkAvailability" title="Check Availability" tabClassName='checkAvTab' className='checkAv'>
            <p className='p-text'>Check the availability of our services in your area, and get the internet that you deserve! Let’s start with your basic details!</p>
            <CheckAvailComp/>
          </Tab>
          <Tab eventKey="applyNow" title="Apply Now" tabClassName='applyNowTab' className='applyNow'>
            <p className='p-text'>Take advantage of the most affordable and most reliable high speed fiber internet in the market today. 
              Finally, your money’s worth. And yes, there is NO DATA CAP.</p>
              
            <ApplyNowComp/>
          </Tab>
          <Tab eventKey="payHere" title="Pay Here" tabClassName='payHereTab' className='payHere'>
            <p className='p-text'>Please <Link to='/login'>Login</Link>/<Link to='/register'>Register</Link> to proceed with checking your outstanding 
                balance and making your payment.</p>
          </Tab>
          <Tab eventKey="checkStatus" title="Check Status" tabClassName='checkStatusTab' className='checkStatus'>
            <p className='p-text'>Please enter the reference number we sent to your registered email address to check the status of your existing application. If your reference number 
              starts with SS, kindly go through <a href='https://legacy.gofiber.ph/application/check-status'>this link.</a></p>
            <CheckStatusComp />
          </Tab>
        </Tabs>
      </Card>
    </Container>
  );
}

export default FeaturesTab;