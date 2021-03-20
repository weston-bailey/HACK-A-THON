import React from 'react';
import Cassowary from '../pics/Cassowary.jpg'
import Cage from '../pics/Cage.png'
import { Container, Row, Col } from 'react-bootstrap';

const Stories = () => {
  const listing = {
      'text-align': 'left',
      'float': 'right'
  }
  const articlePic = {
      'float': 'left'
  }

  return (
    <div className="stories">
      <Container>
        <Row className="ufo">
          <Col>
            <h4>Unidentified Flying Object Came from Earth</h4>

            <hl></hl>
            <p style={listing}>
              It was close to midnight when Slal Herric was trying to go to
              sleep. Suddenly a huge shock struck his house. Luckily he was
              able to grab a spacesuit before the atomsphere left saving his
              life. Investigators were baffled by the device. It appears to
              have been build for ground travel and has no means of flying but
              somehow ended up in space.

              <br />

              Sgt. Iago of the Moon Police Department recently recongnized the
              object as an “automobile” that is built on Earth. Further more
              it appears to have come from the Tesla Corporation which has
              been spearheading Earth’s most recent space expeditions. The
              events that led up to the automobile leaving Earth’s gravity
              pull are still up to debate.
            </p>
          </Col>
        </Row>

        <Row className="articles">
          <Col>
            <img
              src={Cassowary}
              style={articlePic}
              alt="a story article corresponding"
              height="150"
              width="200"
            ></img>
          </Col>

          <Col>
            <Row>
              <h5> Top 10 Cute Animals that are Actually Killers </h5>
            </Row>

            <Row>
              <p style={listing}>
                Yull Tinbar has visited Earth at least 12 times to study the
                native species. She has encountered all manor of vicious life
                forms just on the continent known as Australia. She talks
                about the most deceptive of those species in her latest
                article and speculates on how much more dangerous the wild
                animals are on Earth’s larger continents.{" "}
              </p>
            </Row>
          </Col>
        </Row>

        <Row className="articles">
          <Col>
            <img
              src={Cage}
              style={articlePic}
              alt="a story article corresponding"
              height="150"
              width="200"
            />
          </Col>

          <Col>
            <h5> The Most Famous Alien on Earth </h5>

            <p style={listing}>
              Galganx Turwool, or Nicolas Cage, as he’s known on Earth, is
              arguably the most famous alien living incognito on Earth. He sat
              down with Kayna Meeeps to tell his rags to riches story.{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Stories;