import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Weather() {
    return (
        <Container>
            <Row>
                <Col>Weather</Col>
            </Row>
            <Row>
                <Col>
                <img src="http://placekitten.com/200/200" alt="weather"></img>
                </Col>
            </Row>
            <Row >
                <Col>Today: 200 °F | -130 °F</Col>
                <Col>Tomorrow: 180 °F | -120 °F</Col>
            </Row>
        </Container>     
    )
}