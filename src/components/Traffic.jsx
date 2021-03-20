import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Traffic = () => {
  return (
    <Container>
      <Row>
        <h3>Moon Traffic</h3>
      </Row>
      
      <Row>
        <Image src="/traffic.png" width="100%" rounded fluid />
      </Row>
    </Container>
  );
};

export default Traffic;