import {Container, Navbar, Button, Row, Col} from 'react-bootstrap/';
import LinksComponent from './FooterLinks/LinksComponent';
import './Features.css'

function FooterComponent() {
  return (
    <Navbar className='footer-navbar'>
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/images/Converge_ICT_logo_white.png"
              width="140"
              height="60"
              className="d-inline-block align-top footer-img"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Row>
            <Col>
                <LinksComponent btn="Plans" />
                <LinksComponent btn="Check Availability"/>
                <LinksComponent btn="Pay Bill"/>
                <LinksComponent btn="Help & Support"/>
                <LinksComponent btn="Branch Locator"/>
                <LinksComponent btn="Apply Now"/>
            </Col>
          </Row>
          <Navbar.Brand href="#home">
            <img
              src="/images/gofiber_logo.png"
              width="140"
              height="60"
              className="d-inline-block align-top footer-img"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
  );
}

export default FooterComponent;