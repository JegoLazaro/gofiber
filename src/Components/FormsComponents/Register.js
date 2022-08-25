import React from 'react'
import {Card, Form, FloatingLabel, Row, Col, Modal, Button, Image, OverlayTrigger, Tooltip} from 'react-bootstrap'
import './style.css';
import {Link} from 'react-router-dom'

function RegisterModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="" style={{textAlign: 'center'}}>
          HOW TO REGISTER
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ol>
          <li>Go to Gofiber.ph or Gofiber mobile app and click the Register button.</li>
          <li>Enter your email address, mobile number, first name and last name, and set a password. 
            Make sure that the criteria in setting the password will be met.</li>
          <li>Click the Terms of Use and Privacy Policy check box. 
            You can click the hyperlink for Terms of Use and Privacy Policy if you want to read the content.</li>
          <li>Click the Register button.</li>
          <li>A message will be sent to the email address you entered. 
            Click the verification link to proceed with the registration process.</li>
            <li>Once it has been verified, the registration will be successfully completed.</li>
        </ol>
      </Modal.Body>
    </Modal>
  );
}

function Register() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className='container-div'>
        <Card className='container-card'>
        <Form className='checkAvForm'>
        <Link to='/'><Image src='./images/Converge_ICT_logo.png' className='logo'/></Link>
                <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip id="button-tooltip-2" variant="light">Click here to check availability in your area.</Tooltip>}
                    >
                    {({ ref, ...triggerHandler }) => (
                        <Image
                        {...triggerHandler}
                            className='info'
                            ref={ref}
                            roundedCircle
                            src="/images/info.png"
                            style={{marginLeft:"5px", marginTop: '45px'}}
                        />
                    )}
                    </OverlayTrigger>
                    
                <h4 className='welcome'>Welcome to Converge</h4>
                <p className='p'>For old Xperience app users and new Converge account, please register a new account.</p>
                
          <Row>
          <Col>
              <FloatingLabel controlId="floatingInput" label="Email" >
                  <Form.Control type="email" className='emailForm'placeholder="Email" />
              </FloatingLabel>
              </Col>
            <Col>
              <FloatingLabel controlId="floatingInput" label="Mobile Number" className=" mb-3" >
                  <Form.Control type='tel' className="mobNumberForm" defaultValue="+ 63 "/>
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col>
                <FloatingLabel controlId="floatingInput" label="First Name" className="mb-3">
                    <Form.Control type="name" className="fNameForm" placeholder="First Name" />
                </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel controlId="floatingInput" label="Last Name" >
                    <Form.Control type="name" className="lNameForm" placeholder="Last Name" />
                </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col>
                <FloatingLabel controlId="floatingInput" label="Password" className="mb-3">
                    <Form.Control type="password" className="fNameForm" placeholder="Password" />
                </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel controlId="floatingInput" label="Confirm Password" >
                    <Form.Control type="password" className="lNameForm" placeholder="Confirm Password" />
                </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col>
              {['checkbox'].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check 
                    type={type}
                    id={`default-${type}`}
                    className="checkBox"
                    label={`
                    I have read and agreed to all Converge ICT's Terms of Use and Privacy Policy
                    `}
                  />
                </div>
              ))}
              </Col>
              </Row>
                <Col>
                    <Button variant="primary" size="md" className='login-btn'>REGISTER</Button>
                </Col>
                <div className="mb-3">
                <Form.Text className='new-converge'> Already Have an Account?</Form.Text>
                <Form.Text className='register-link' as={Link} to='/login'>Login</Form.Text>
                
            </div>
            <Form.Text className='how-to-login' onClick={() => setModalShow(true)}> How to Register?</Form.Text>
            <RegisterModal
                show={modalShow}
                onHide={() => setModalShow(false)}/>
        </Form>
      </Card>
    </div>
  )
}

export default Register;