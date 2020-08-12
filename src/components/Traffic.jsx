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
        <Image src="https://placekitten.com/400/200" rounded fluid />
      </Row>
    </Container>
  );
};

export default Traffic;