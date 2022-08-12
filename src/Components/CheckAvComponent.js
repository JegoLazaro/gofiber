import {Form, FloatingLabel, Row, Col, Button} from 'react-bootstrap';

function CheckAvailComp() {
  return (
    <>
      <Form className='checkAvForm'>
          <Row>
            <Col>
              <FloatingLabel controlId="floatingInput" label="First Name" className="fNameForm mb-3">
                  <Form.Control type="name" placeholder="First Name" />
              </FloatingLabel>
              </Col>
              <Col>
              <FloatingLabel controlId="floatingInput" label="Last Name" className='lNameForm'>
                  <Form.Control type="name" placeholder="Last Name" />
              </FloatingLabel>
              </Col>
          </Row>
          <Row>
            <Col>
              <FloatingLabel controlId="floatingInput" label="Mobile Number" className="mobNumberForm mb-3" >
                  <Form.Control type='tel' defaultValue="+ 63 "/>
              </FloatingLabel>
              </Col>
              <Col>
              <FloatingLabel controlId="floatingInput" label="Email" className='emailForm'>
                  <Form.Control type="email" placeholder="Email" />
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