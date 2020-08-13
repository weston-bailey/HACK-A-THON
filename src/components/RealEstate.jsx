import React from 'react';
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';

function RealEstate () {
  const listing = {
    'text-align': 'left'
  }

  const locationText = {
    'font-weight': '400'
  }

  return (
    <div className="real-estate">
      <Container>
        <Row>
          <Col className="bords">Carosel</Col>
        </Row>
        <Row>
          <Col lg="9" className="bords">
            <Row noGutters='true'>
              <Col>
                <Image src="./crater-for-sale.png" width="325vw"/>          
              </Col>
              <Col style={listing}>
                <h3>
                  Crater For Sale
                </h3>
                <h6 style={locationText}>
                  100,000 Stones
                </h6>
                <h6 style={locationText}>
                  Location: Catena Abulfeda
                </h6>
                <h5>
                  Walkability Score: 95
                </h5>
                <p>
                There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and literally, it is a task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning.
                </p>
              </Col>
            </Row>
          </Col>
          <Col lg="3" className="bords">
            <Image src="https://placekitten.com/200/200" height="200" width="200"/>   
          </Col>
        </Row>
          <Row>
            <Col lg="9" className="bords">            
              <Row noGutters='true'>
                <Col>
                  <Image src="./crater-for-sale.png" width="325vw"/>          
                </Col>
                <Col style={listing}>
                  <h3>
                    Crater For Sale
                  </h3>
                  <h6 style={locationText}>
                    100,000 Stones
                  </h6>
                  <h6 style={locationText}>
                    Location: Catena Abulfeda
                  </h6>
                  <h5>
                    Walkability Score: 95
                  </h5>
                  <p>
                  There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and literally, it is a task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning.
                  </p>
                </Col>
            </Row>
          </Col>
          <Col lg="3" className="bords">
            <Image src="https://placekitten.com/200/200" height="200" width="200"/>
          </Col>
        </Row>
          <Row>
            <Col lg="9" className="bords">            
              <Row noGutters='true'>
                <Col>
                  <Image src="./crater-for-sale.png" width="325vw"/>          
                </Col>
                <Col style={listing}>
                  <h3>
                    Crater For Sale
                  </h3>
                  <h6 style={locationText}>
                    100,000 Stones
                  </h6>
                  <h6 style={locationText}>
                    Location: Catena Abulfeda
                  </h6>
                  <h5>
                    Walkability Score: 95
                  </h5>
                  <p>
                  There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and literally, it is a task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning.
                  </p>
                </Col>
            </Row>
          </Col>
          <Col lg="3" className="bords">
            <Image src="https://placekitten.com/200/200" height="200" width="200"/>
          </Col>
        </Row>
          <Row>
            <Col lg="9" className="bords">            
              <Row noGutters='true'>
                <Col>
                  <Image src="./crater-for-sale.png" width="325vw"/>          
                </Col>
                <Col style={listing}>
                  <h3>
                    Crater For Sale
                  </h3>
                  <h6 style={locationText}>
                    100,000 Stones
                  </h6>
                  <h6 style={locationText}>
                    Location: Catena Abulfeda
                  </h6>
                  <h5>
                    Walkability Score: 95
                  </h5>
                  <p>
                  There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and literally, it is a task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning.
                  </p>
                </Col>
            </Row>
          </Col>
          <Col lg="3" className="bords">
            <Image src="https://placekitten.com/200/200" height="200" width="200"/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default RealEstate;