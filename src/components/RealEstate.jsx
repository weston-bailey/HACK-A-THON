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
            <h4> For Rent | For Sale | Abductee Storage | Best Deals | <span className="selected-sort">All</span></h4>
        </Row>
        <Row>
          <Col lg="9" className="bords">
            <Row noGutters='true'>
              <Col>
                <Image src="./crater-for-sale.png" width="85%" />          
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
                  Walkability Score: -90
                </h5>
                <p>
                The engine that gives its mysterious inner life to a work of art must be the subterranean expression of a wish, working its way to the surface of a narrative. change is an easy panacea. it takes character to stay in one…
                </p>
              </Col>
            </Row>
          </Col>
          <Col lg="3" className="bords">
            <Image src="./forbidden.png" height="100%" width="85%"/> 
          </Col>
        </Row>
          <Row>
            <Col lg="9" className="bords">            
              <Row noGutters='true'>
                <Col>
                  <Image src="./re-1.jpg" width="325vw"/>          
                </Col>
                <Col style={listing}>
                  <h3>
                    Jetson Condo
                  </h3>
                  <h6 style={locationText}>
                    3,000,000 Stones
                  </h6>
                  <h6 style={locationText}>
                    Location: Vallis Alpes  48.5°N 3.2°E
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
            <Image src="./virgil.png" height="100%" width="85%" />
          </Col>
        </Row>
          <Row>
            <Col lg="9" className="bords">            
              <Row noGutters='true'>
                <Col>
                  <Image src="./re-2.jpg" width="325vw"/>         
                </Col>
                <Col style={listing}>
                  <h3>
                    Spare Human Container
                  </h3>
                  <h6 style={locationText}>
                    250,000 Stones
                  </h6>
                  <h6 style={locationText}>
                    Location: Vallis Baade  45.9°S 76.2°W 
                  </h6>
                  <h5>
                    Walkability Score: 15
                  </h5>
                  <p>
                  There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and literally, it is a task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning.
                  </p>
                </Col>
            </Row>
          </Col>
          <Col lg="3" className="bords">
            <Image src="/fashion.png" height="100%" width="85%"/>
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
                    Nebula Lounge
                  </h3>
                  <h6 style={locationText}>
                    500,000 Stones
                  </h6>
                  <h6 style={locationText}>
                  Location: Vallis Bouvard  38.3°S 83.1°W
                  </h6>
                  <h5>
                    Walkability Score: 99
                  </h5>
                  <p>
                  There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and literally, it is a task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning.
                  </p>
                </Col>
            </Row>
          </Col>
          <Col lg="3" className="bords">
            <Image src="./drink.png" height="100%" width="85%"/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default RealEstate;