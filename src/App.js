import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import LandingCarousel from './components/LandingCarousel'

// import { BrowserRouter, Route, Link } from "react-router-dom";
import NavBar from './components/NavBar';
import Weather from './components/Weather.jsx'
import Traffic from './components/Traffic.jsx'
import Video from './components/Video.jsx'


function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col className="bords">
            <NavBar />
          </Col>
        </Row>
        <Row>
          <Col md="3" className="bords">
          <Weather />
          <Traffic />
          <Video />
          </Col>
          
          <Col md="6" className="bords">
            <LandingCarousel />
          </Col>
        
          <Col md="3" className="bords">.col-3</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
