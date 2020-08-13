import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
function RealEstate () {
  return (
    <div className="real-estate">
      <Container>
        <Row>
          <Col className="bords">Carosel</Col>
        </Row>
        <Row>
          <Col lg="9" className="bords">.col-9</Col>
          <Col lg="3" className="bords">.col-3 </Col>
        </Row>
         <Row>
          <Col lg="9" className="bords">.col-9</Col>
          <Col lg="3" className="bords">.col-3 </Col>
        </Row>
         <Row>
          <Col lg="9" className="bords">.col-9</Col>
          <Col lg="3" className="bords">.col-3 </Col>
        </Row>
         <Row>
          <Col lg="9" className="bords">.col-9</Col>
          <Col lg="3" className="bords">.col-3 </Col>
        </Row>
      </Container>
    </div>
  );
}
export default RealEstate;