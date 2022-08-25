import React, { Component } from 'react'
import { Nav, Navbar, Carousel, Container, Button, Offcanvas, OverlayTrigger, Tooltip, Image } from 'react-bootstrap'
import './Navbar.css';
import { useNavigate, Link }  from 'react-router-dom';

function NavbarComponent()  {
    let navigate = useNavigate();

    return (
      <div>
        {['sm'].map((expand) => (
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
                <img src='/images/Converge_ICT_logo.svg' width={130} />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className=" justify-content-end flex-grow-1 pe-3" style={{fontFamily: 'Montserrat'}}>
                  <Nav.Link className="plans" href="https://gofiber.ph/plans">PLANS</Nav.Link>
                  <Nav.Link className="help_support" href="https://gofiber.ph/help">HELP & SUPPORT</Nav.Link>
                  <Nav.Link className="branch_near" href="https://gofiber.ph/branches">BRANCH NEAR ME</Nav.Link>
                  
                  <Nav.Link className="register" as={Link} to="/register">
                    REGISTER 
                    <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip id="button-tooltip-2" variant="light">For Old Xperience App Users and New Converge Account, please register using the register button.</Tooltip>}
                    >
                    {({ ref, ...triggerHandler }) => (
                        <Image
                        {...triggerHandler}
                            className='info'
                            ref={ref}
                            roundedCircle
                            src="/images/info.png"
                            style={{marginLeft:"5px"}}
                        />
                    )}
                    </OverlayTrigger>
                  </Nav.Link>
                  
                </Nav>
                <Button variant="primary" style={{fontFamily: 'Montserrat'}} className="login d-grid gap-2" onClick={() => {
            navigate("/login");
        }}>LOGIN</Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

    <Carousel>
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

export default NavbarComponent;
