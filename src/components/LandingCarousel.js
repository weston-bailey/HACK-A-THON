import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function LandingCarousel() {
    return (
        <div>  
            <div class='container-fluid' >  
                <div className="row title" style={{ marginBottom: "20px" }} >  
                    <div class="col-sm-12 btn btn-warning"> 
                        <p>Aliens!</p> 
                    </div>  
                </div>  
            </div>  
            <div className='container-fluid' >  
            <Carousel>  
                <Carousel.Item style={{'height':"400px"}} >  
                    <img style={{'height':"400px"}}  
                    className="d-block w-100"  
                    src={'https://placekitten.com/400'}  />  
                    <Carousel.Caption>  
                        <h3>First Demo </h3>  
                    </Carousel.Caption>  
                </ Carousel.Item>  

                <Carousel.Item style={{'height':"400px"}}>  
                    <img style={{'height':"400px"}}  
                        className="d-block w-100"  
                        src={'https://placekitten.com/400'}    />  
                    <Carousel.Caption>  
                        <h3>Second Demo</h3>  
                    </Carousel.Caption>  
                </Carousel.Item>  

                <Carousel.Item style={{'height':"400px"}}>  
                    <img style={{'height':"400px"}}  
                        className="d-block w-100"  
                        src={'https://placekitten.com/400'}   />  
                    <Carousel.Caption>  
                        <h3>Third Demo</h3>  
                    </Carousel.Caption>  
                </Carousel.Item>  
            </Carousel>  
            </div>  
        </div>  

    )
}

export default LandingCarousel;