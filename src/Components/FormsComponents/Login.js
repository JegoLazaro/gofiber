import React from 'react'
import {Card, Form, FloatingLabel, OverlayTrigger, Tooltip, Image, Button, Modal, Row, Col, ModalBody} from 'react-bootstrap'
import './style.css';
import {Link} from 'react-router-dom'

function LoginModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="" style={{textAlign: 'center'}}>
            HOW TO LOGIN
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ol>
            <li>Go to Gofiber.ph or Gofiber mobile app and click the Login button.</li>
            <li>Enter your credentials (email and password).</li>
            <li>Click the I'm not a robot checkbox for the captcha.</li>
            <li>Click the Login button.</li>
            <li>You will now be logged in.</li>
          </ol>
          <p>Note: For first time login with existing Converge subscription,
             you can now “Link your Account” so you can view your personalized dashboard 
             and manage your account. If you wish to subscribe, click “Apply now”.</p>
        </Modal.Body>
      </Modal>
    );
  }
  

function Login() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className='container-div'>
            <Card className='container-card'>
                <Form>
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
                    <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3 email-form">
                        <Form.Control  type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password" className="password-form" >
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                    
                        {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                    <Form.Check 
                        type={type}
                        id={`default-${type}`}
                        label="Keep me logged in"
                        className="checkbox-form"
                    />
                        </div>
                    ))} 
                    <Form.Text className='forgot-pw' as={Link} to=''> Forgot Password?</Form.Text>
                <div className="d-grid gap-2" style={{marginTop: '10px'}}>
                    <Button variant="primary" size="md" className='login-btn'>LOGIN</Button>
                </div>
                <div className="mb-3">
                    <Form.Text className='new-converge'> New to Converge?</Form.Text>
                    <Form.Text className='register-link' as={Link} to='/register'>Register</Form.Text>
                    
                </div>
                <Form.Text className='how-to-login' onClick={() => setModalShow(true)}> How to Login?</Form.Text>
                <LoginModal
                show={modalShow}
                onHide={() => setModalShow(false)}/>
            </Form>
        </Card>
        </div>
    )
}

export default Login;