import React, { Component } from 'react'
import { Nav, Navbar, Carousel, Container, Button, Offcanvas, OverlayTrigger, Tooltip, Image } from 'react-bootstrap'
import './Navbar.css';

export default class NavbarComponent extends Component {
  render() {
    return (
      <div>
        {['md'].map((expand) => (
        <Navbar sticky="top" key={expand} bg="light" expand={expand} className="navbar mb-1 bg-white rounded">
          <Container fluid>
            <Navbar.Brand href="#"><img src='/images/Converge_ICT_logo.svg' width={130} /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className=" justify-content-end flex-grow-1 pe-3">
                  <Nav.Link className="plans" href="#plans">PLANS</Nav.Link>
                  <Nav.Link className="help_support" href="#help_support">HELP & SUPPORT</Nav.Link>
                  <Nav.Link className="branch_near" href="#branch">BRANCH NEAR ME</Nav.Link>
                  <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip id="button-tooltip-2" variant="light">For Old Xperience App Users and New Converge Account, please register using the register button.</Tooltip>}
                    >
                    {({ ref, ...triggerHandler }) => (
                        <Button
                        variant="light"
                        {...triggerHandler}
                        
                        >
                        <Image
                            className='info'
                            ref={ref}
                            roundedCircle
                            src="/images/info.png"
                        />
                        </Button>
                    )}
                    </OverlayTrigger>
                  <Nav.Link className="register" href="#register">REGISTER</Nav.Link>
                  
                </Nav>
                <Button variant="primary" className="login d-grid gap-2">LOGIN</Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

    <Carousel >
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src="/images/converge_img3.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src="/images/converge_img2.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/converge_img1.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
      </div>
    )
  }
}
