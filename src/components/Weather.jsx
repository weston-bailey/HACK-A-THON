import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

export default function Weather() {
    return (
        <Container>
            <Row>
                <h3>Weather</h3>
            </Row>
            <Row>
                <Image src="/weather.png" width="100%" rounded fluid />
            </Row>
      </Container>
    )
}