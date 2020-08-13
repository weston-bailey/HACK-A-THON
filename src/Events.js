import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Events1 from './pics/Events1U.png';
import Events2 from './pics/Events2U.png';
import Events3 from './pics/Events3U.png';
import Events4 from './pics/Events4U.png';
import Events5 from './pics/Events5U.png';
import Events6 from './pics/Events6U.png';
import Events7 from './pics/Events7U.png';
import Events8 from './pics/Events8U.png';
import Calendar from './pics/calendar.png';


function Event () {
    
    
    return (
        <div className="events">
            <Container>
                <Row>
                    <Col lg="8" className="searchbar">
                        <img src={Calendar} height="50" widht="65" alt="calendar icon"></img>
                        <input type="text" placeholder="To" className="selected"></input>
                        <img src={Calendar} height="50" widht="65" alt="calendar icon"></img>
                        <input type="text" placeholder="From" className="selected"></input>
                    </Col>
                </Row>
                
                <Row>
                    <h4> Location | Festivals | Exhibitions | Sports | <span className="selected-sort-bar">All</span></h4>
                </Row>
                
                <Row>
                    <Col lg="12" className="events-img">
                        <div>
                            <img src={Events1} height="250" width="250" alt="events page info"></img>
                            <p>The best music festival with DJ GALAXY. Registration open through teleporting communication. No human entry!</p>
                        </div>
                        <div>
                            <img src={Events2} height="250" width="250" alt="events page info"></img>
                            <p>Official Martian Derby Kickoff! Martians running a rat race. Join the madness with slurpy food and sparkling drinks.</p>
                        </div>
                        <div>
                            <img src={Events3} height="250" width="250" alt="events page info"></img>
                            <p>Experience Earthling Culture by learning how to play their most popular sport.</p>
                        </div>
                        <div>
                            <img src={Events4} height="250" width="250" alt="events page info"></img>
                            <p>Love story of Alma & Dromo is now in theatres. Dromo, the orphan meets Alma, the princess of Centuria Universe.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg="12" className="events-img">
                        <div>
                            <img src={Events5} height="250" width="250" alt="events page info"></img>
                            <p>Skate with the crazies on the Rings of Saturns. Adult only event! </p>
                        </div>
                        <div>
                            <img src={Events6} height="250" width="250" alt="events page info"></img>
                            <p>Enter ‘Area 51’ exhibition showcasing work of reckless human scientists. Captured by famous artist Kraken.</p>
                        </div>
                        <div>
                            <img src={Events7} height="250" width="250" alt="events page info"></img>
                            <p>Join us in celebrating our Yearly Human Collections. You’re not a true alien if you don’t have five or more humans </p>
                        </div>
                        <div>
                            <img src={Events8} height="250" width="250" alt="events page info"></img>
                            <p>Celebrating the Month of Whispers with fresh beers from ten planets.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default Event;
