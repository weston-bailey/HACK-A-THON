import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CrashedTesla from '../pics/Teslacrash2.png';
import Lasers from '../pics/Lasers2.png';
import Football from '../pics/Football2.png';



function LandingCarousel() {
    const banner = {
        "font":"white",
        "background-color":"rgb(231, 114, 46, 0.6)",
        "font-weight":"bold"
    }
    
    return (
      <div>
        <div className="container-fluid">
          <Carousel>
            <Carousel.Item style={{ height: "400px" }}>
              <img
                style={{ height: "400px" }}
                className="d-block w-100"
                src={CrashedTesla}
                alt="crashed tesla"
              />

              <Carousel.Caption>
                <div>
                  <h3 style={banner}>
                    Scientists claim UFO, known as Tesla, came from Earth
                  </h3>
                </div>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{ height: "400px" }}>
              <img
                style={{ height: "400px" }}
                className="d-block w-100"
                src={Lasers}
                alt="lasers"
              />
              <Carousel.Caption>
                <div>
                  <h3 style={banner}>
                    What Kind of Spaceship Doesn't Have Lasers?
                  </h3>
                </div>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{ height: "400px" }}>
              <img
                style={{ height: "400px" }}
                className="d-block w-100"
                src={Football}
                alt="Footbal"
              />

              <Carousel.Caption>
                <div>
                  <h3 style={banner}>
                    Football vs Football. What's the Difference?
                  </h3>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
}

export default LandingCarousel;