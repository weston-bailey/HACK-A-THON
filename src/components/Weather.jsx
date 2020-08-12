import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';

export default function Weather() {
    return (
        <Container>
            <Row>
                <Col>
                    <Image src="/weather-main.png" alt="meteor weather" />
                </Col>
            </Row>
            <Row >
                <Col>
                    <Image src="/weather-wed.png" alt="wednesday weather" />
                </Col>
                <Col>
                    <Image src="/weather-thurs.png" alt="wednesday weather" />
                </Col>
                <Col>
                    <Image src="/weather-fri.png" alt="wednesday weather" />
                </Col>
            </Row>
        </Container>     
    )
}