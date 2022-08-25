import Cards_IMG from './ViewPlansCards/Cards_IMG';
import Cards_Plans from './ViewPlansCards/Cards_Plans';
import {Row, Col, Container, Card} from 'react-bootstrap'
import './Features.css'


function ViewPlansComponent() {
  return (
    <>
        <Container md="auto" className="view-plans-container  " >
          <h1>ALL THE MORE REASONS TO LOVE CONVERGE FIBER INTERNET EXPERIENCE</h1>
          <Card className="view-plans-card">
            <Row className="justify-content-around row-plans " >
                  <Col md="auto" className="" >
                      <Cards_IMG 
                      image="./images/stock_img4.png" 
                      />
                  </Col>
                  <Col md="auto" >
                      <Cards_Plans 
                        text="With a wide range of Plans to suit your requirements,
                        check our best plans for a great Fiber experience."
                        button="VIEW PLANS"
                      />
                  </Col>
                  <Col md="auto">
                      <Cards_IMG 
                      image="./images/stock_img3.png" 
                      />
                  </Col>
                  <Col md="auto">
                      <Cards_Plans 
                        text="Now, cater to all your family’s internet requirements
                         and more with the best plan recommendation."
                        button="RECOMMEND PLAN"
                      />
                  </Col>
                  <Col md="auto">
                      <Cards_IMG 
                      image="./images/stock_img4.png" 
                      />
                  </Col>
                  <Col md="auto">
                      <Cards_Plans 
                        text="Whether you’re value-driven, performance-driven,
                         or a high-tech enthusiast, we have the perfect plan for you!"
                        button="COMPARE PLANS"
                      />
                  </Col>
                  </Row>
            </Card>
        </Container>
    </>
  );
}

export default ViewPlansComponent;