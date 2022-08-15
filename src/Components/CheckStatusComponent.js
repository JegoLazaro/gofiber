import {Form, FloatingLabel, Row, Col, Button} from 'react-bootstrap';
import './Features.css';


function CheckStatusComp() {
    return (
      <>
        <Form className='referenceNumber'>
            <Row>
                <Col>
                <FloatingLabel controlId="floatingInput" label="Reference Number" >
                    <Form.Control type="tel" className='refNum'placeholder="Reference Number" />
                </FloatingLabel>
                </Col>
            </Row>
            <Row>
                <Col><Button variant="dark" className="continueRefNo " disabled>CHECK STATUS</Button></Col>
            </Row>
          </Form>
      </>
    );
  }
  
  export default CheckStatusComp;