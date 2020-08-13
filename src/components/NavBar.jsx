import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/button';
import { Container, Row, Col, Modal } from 'react-bootstrap';


const NavBar = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const parallelogramOrange = {
    width: '100%',
    height: '100%',
    transform: 'skew(49deg)',
    background: '#E77225',
    position: 'relative',
    'z-index': '-11'
  }

  const parallelogramGray = {
    width: '30%',
    height: '100%',
    transform: 'skew(49deg)',
    background: '#C4C4C4',
    position: 'relative',
    'z-index': '-1'
  }

  const foreground = {
    position: 'absolute',
    'z-index': '1',
    'font-weight': 'bold',
    'color': 'Black',
  }

  const title = {
    'font-size': '2rem',
    'color': 'Black',
    'font-weight': 'bold'
  }

  const searchForm = {
    border:'none',
    // position: 'absolute',
    // 'z-index': '1',
    'background-color': 'rgba(0,0,0,0)',
    'padding-left': '1rem'
  }

  return (
    <Container>
      <Row>
        <Col xs={2}>
          <Navbar.Brand href="/home" style={title}>Lunar Tribune</Navbar.Brand>
        </Col>
        <Col xs={10}></Col>
      </Row>
      <Navbar bg=" " expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Container>
          <div style={parallelogramOrange}>&nbsp;</div>   
            
          <div style={foreground}>
            <Nav className="mr-auto">
              <Nav.Link href="/home">Earthling News</Nav.Link>
              <Nav.Link href="/events">Outpost Events</Nav.Link>
              <Nav.Link href="/realestate">Real Estate</Nav.Link>
              <Nav.Link href="/home">Asteroid Watch</Nav.Link>
            </Nav>
          </div>
        </Container>

        <Container>
            <div style={parallelogramGray}>&nbsp;</div>   
          <Form inline style={foreground}>
            {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" style={searchForm}/> */}
            <input type="text" placeholder="Search" style={searchForm}></input>
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>

          <Button variant="secondary" onClick={handleShow}>
            profile
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Login</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Form>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Submit
              </Button>
            </Modal.Footer>
          </Modal>
{/*   
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Containerider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
        </Container>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavBar;