import Cards from './ApNowCards/Cards';
import {Row, Col} from 'react-bootstrap'


function ApplyNowComp() {
  return (
    <>
        <Row>
            <Col>
                <Cards image="./images/home.png" 
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." 
                title="Residential"/>
            </Col>
             <Col>
             <Cards image="./images/sales_partner.png" 
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." 
                title="Sales Partner"/>
            </Col>
            <Col>
            <Cards image="./images/referral.png" 
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." 
                title="Referral"/>
            </Col>
            <Col>
            <Cards image="./images/commercial.png" 
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." 
                title="Commercial / SME"/>
            </Col>
        </Row>
    </>
  );
}

export default ApplyNowComp;