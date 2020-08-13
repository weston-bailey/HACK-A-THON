import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Events1 from './pics/Events1.jpg';
import Events3 from './pics/Events3.jpg';
import Events4 from './pics/Events4.jpg';
import Events5 from './pics/Events5.jpg';


function Event () {
    return (
        <div className="events">
            <Container>
                <Row>
                    <Col lg="8" className="bords">
                        <img src="" alt="calendar icon"></img>
                        <input type="text" placeholder="To" className="selected"></input>
                        <img src="" alt="calendar icon"></img>
                        <input type="text" placeholder="From" className="selected"></input>
                    </Col>
                </Row>
                
                <Row>
                        <h4> Location | Festivals | Exhibitions | Sports | <span className="selected-sort">All</span></h4>

                </Row>
                
                <Row>
                    <Col lg="12" className="bords events-img">
                        <div >
                            <img src={Events1} height="250" width="250" alt="events page info"></img>
                            <p>The engine that gives its mysterious inner life to a work of art must be the </p>
                        </div>
                        <div>
                            <img src={Events1} height="250" width="250" alt="events page info"></img>
                            <p>The engine that gives its mysterious inner life to a work of art must be the </p>
                        </div>
                        <div>
                            <img src={Events3} height="250" width="250" alt="events page info"></img>
                            <p>The engine that gives its mysterious inner life to a work of art must be the </p>
                        </div>
                        <div>
                            <img src={Events4} height="250" width="250" alt="events page info"></img>
                            <p>The engine that gives its mysterious inner life to a work of art must be the </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg="12" className="bords events-img">
                        <div>
                            <img src={Events5} height="250" width="250" alt="events page info"></img>
                            <p>The engine that gives its mysterious inner life to a work of art must be the </p>
                        </div>
                        <div>
                            <img src={Events1} height="250" width="250" alt="events page info"></img>
                            <p>The engine that gives its mysterious inner life to a work of art must be the </p>
                        </div>
                        <div>
                            <img src={Events1} height="250" width="250" alt="events page info"></img>
                            <p>The engine that gives its mysterious inner life to a work of art must be the </p>
                        </div>
                        <div>
                            <img src={Events1} height="250" width="250" alt="events page info"></img>
                            <p>The engine that gives its mysterious inner life to a work of art must be the </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default Event;
