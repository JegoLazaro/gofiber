import Cards from './ApNowCards/Cards';
import {Row, Col} from 'react-bootstrap'


function ApplyNowComp() {
  return (
    <>
        <Row>
            <Col>
                <Cards image="./images/home.png" 
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." 
                title="Residential"
                link='https://gofiber.ph/onboard'/>
            </Col>
             <Col>
             <Cards image="./images/sales_partner.png" 
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." 
                title="Sales Partner"
                link='/login'/>
            </Col>
            <Col>
            <Cards image="./images/referral.png" 
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." 
                title="Referral"
                link='https://legacy.gofiber.ph/applicant#/application-referral'/>
            </Col>
            <Col>
            <Cards image="./images/commercial.png" 
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." 
                title="Commercial / SME"
                link='https://legacy.gofiber.ph/applicant#/application-contact-info-commercial'/>
            </Col>
        </Row>
    </>
  );
}

export default ApplyNowComp;