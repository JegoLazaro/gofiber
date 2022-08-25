import {Container, Navbar, Nav, Row, Col} from 'react-bootstrap/';
import LinksComponent from './FooterLinks/LinksComponent';
import './Features.css'

function FooterComponent() {
  return (
    <>
    <Navbar className='footer-navbar'>
        <Container>
        <Row className='links-comp justify-content-md-center'>
        <Col xs={6} md={4}>
          <Navbar.Brand href="#home">
            <img
              src="/images/Converge_ICT_logo_white.png"
              width="130"
              height="50"
              className="d-inline-block align-top footer-logo"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          </Col>
          
                <Col xs={12} md={8} className='links'>
                  <LinksComponent  btn="Plans" />
                  <LinksComponent btn="Check Availability"/>
                  <LinksComponent btn="Pay Bill"/>
                  <LinksComponent btn="Help & Support"/>                  
                  <LinksComponent btn="Branch Locator"/>
                  <LinksComponent btn="Apply Now"/>
                  
                </Col>
          </Row>
          <Navbar.Brand href="/" sticky="left">
            <img
              src="/images/gofiber_logo.png"
              width="130"
              height="50"
              className="d-inline-block align-top footer-img position-absolute top-0 end-0"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Navbar className='footer-navbar copyright'>
        <Container>
        <Row className='copyright-txt'>
            <Col xs={6} md={4}>
              © 2022 Converge ICT Solutions Inc. All rights reserved. 
            </Col>
            <Col >
                 <a href='https://gofiber.ph/privacy-notice' className='policies'> Privacy Policy</a>
            </Col>
            <Col>
                 <a href='https://gofiber.ph/termsandconds' className='policies'> Terms & Conditions</a>
            </Col>
            <Col>
                 <a href='https://gofiber.ph/cookie-policy' className='policies'> Cookies Policy</a>
            </Col>
            <Col>
                 <a href='https://gofiber.ph/cookie-policy' className='policies'> Terms of Use</a> 
            </Col>
          </Row>
        </Container>
      </Navbar>
      </>
  );
}

export default FooterComponent;