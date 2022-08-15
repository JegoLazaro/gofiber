import {Accordion, Container} from 'react-bootstrap';

function FaqComp() {
  return (
    <>
        <Container className="faq-container">
        <Accordion defaultActiveKey="">
        <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        </Container>
    </>
  );
}

export default FaqComp;