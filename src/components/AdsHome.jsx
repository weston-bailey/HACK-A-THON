import React from 'react'
import { Image, Container, Row } from 'react-bootstrap';

export default function AdsHome(){
    return (
        <Container>
            <Row>
                <Image src="/terror.png"  rounded fluid />
            </Row>
            <Row>
                <Image src="/gardner.png"  rounded fluid />
            </Row>
            <Row>
                <Image src="/cassini.jpg"  rounded fluid />
            </Row>
      </Container>
    )
}