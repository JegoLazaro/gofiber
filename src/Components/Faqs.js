import {Accordion, Container, Button} from 'react-bootstrap';
import './Features.css'

function FaqComp() {
  return (
    <>
        <Container className="faq-container">
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header className='faq-header' >My payment has already been credited, how do I follow-up on my installation?</Accordion.Header>
                    <Accordion.Body className='faq-ans'>
                    Please help us by preparing all permits required to reach your house, if any (ex: brgy permits, gate passes, 
                    subdivision or bldg permits, etc.).Kindly send us your account number via: <a href='#'>customercare@convergeict.com</a>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header className='faq-header' style={{borderColor: '#239586'}}>I have settled my payment but I'm not sure if it was already posted.
                        How can I follow up on my installation?</Accordion.Header>
                    <Accordion.Body className='faq-ans'>
                    To check if payment has been posted (which is a necessary step prior to installation), 
                    please visit:  <a href='#'>https://gofiber.ph/#check-status</a>. Kindly key-in your reference number or 
                    registered email address. Posting of payments may vary depending on the payment channel. 
                    To learn more about payment channels, please visit: <a href='#'>https://gofiber.ph/paybills#/paybills </a>
                    <br /> <br/>
                    You may help us by preparing all permits required to reach your house, 
                    if any (ex: brgy permits, gate passes, subdivision or bldg permits, etc.). 
                    Thank you for your patience.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header className='faq-header'>What initial payments do I need to settle before installation?</Accordion.Header>
                    <Accordion.Body className='faq-ans'>
                    To know more about your initial payment and for billing guide,
                     please visit <a href="#">https://convergeict.com/ask-conrad-billing-tip-1/</a> 
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Button className='card-btn plans-btn faq-btn' variant="primary">VIEW ALL FAQS</Button>
        </Container>
    </>
  );
}

export default FaqComp;