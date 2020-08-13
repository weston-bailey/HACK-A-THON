import React from 'react';
import Weather from './Weather.jsx';
import Traffic from './Traffic.jsx';
import Video from './Video.jsx';
import AdsHome from './AdsHome.jsx';
import { Container, Row, Col } from 'react-bootstrap';
import LandingCarousel from './LandingCarousel';

export default function Home() {
  return (
    <div>
    <Container>
      <Row>
        <Col md="3" className="bords">
        <Weather />
        <Traffic />
        <Video />
        </Col>
        
        <Col md="6" className="bords">
          <LandingCarousel />
        </Col>
      
        <Col md="3" className="bords">
          <AdsHome />
        </Col>
      </Row>
    </Container>
    </div>
  )
}