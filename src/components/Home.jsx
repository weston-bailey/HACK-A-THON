import React from 'react';
import Chat from './Chat';
import Weather from './Weather.jsx';
import Traffic from './Traffic.jsx';
import Video from './Video.jsx';
import AdsHome from './AdsHome.jsx';
import { Container, Row, Col } from 'react-bootstrap';
import LandingCarousel from './LandingCarousel';
import Stories from './Stories'

export default function Home() {
  return (
    <div>
    <Container>
      <Row>
        <Col md="3"  >
        <Weather />
        <Traffic />
        <Video />
        </Col>
        
        <Col md="6"  >
          <LandingCarousel />
          <Stories />
        </Col>
      
        <Col md="3"  >
          <AdsHome />
        </Col>
      </Row>
      
    </Container>
    </div>
  )
}