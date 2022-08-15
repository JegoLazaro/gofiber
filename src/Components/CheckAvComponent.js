import {Form, FloatingLabel, Row, Col, Button} from 'react-bootstrap';
import './Features.css';

function CheckAvailComp() {
  return (
    <>
      <Form className='checkAvForm'>
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
              <FloatingLabel controlId="floatingInput" label="Mobile Number" className=" mb-3" >
                  <Form.Control type='tel' className="mobNumberForm" defaultValue="+ 63 "/>
              </FloatingLabel>
              </Col>
              <Col>
              <FloatingLabel controlId="floatingInput" label="Email" >
                  <Form.Control type="email" className='emailForm'placeholder="Email" />
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
                    label={`I have read and agreed to Converge to use my information accordance with their Privacy Policy`}
                  />
                </div>
              ))}
              </Col>
              <Col><Button variant="dark" className="continue ">CONTINUE</Button></Col>
          </Row>
        </Form>
    </>
  );
}

export default CheckAvailComp;