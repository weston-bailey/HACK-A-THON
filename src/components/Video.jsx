import React from 'react'
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


export default function Video() {
  return (
    <Container>
      <Row>
        <h3>Videos</h3>
      </Row>

      <Row>
        <Image src="/videos.png" width="100%" rounded fluid />
      </Row>
    </Container>
  );   
}
