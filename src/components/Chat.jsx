import React, { useState} from 'react';
import './chat.css'
import {Button, Modal, Form, FormControl, Image, Container, Row} from 'react-bootstrap';

const chatTexts = [
  "When humans smack each other's hands it is a sign of respect, when they smack each other's faces it is an insult. Don’t mix it up.",
  "Sometimes you just have to keep smashing until they fit.",
  "Have you tried restarting it?",
  "It is no longer polite to smash a glass on the ground as a sign of appreciation for the drink.",
  "Where was the Kaboom? There was supposed to be an earth-shattering kabaoom!",
  "Turn the third knob three degrees to the right and hit ignite.",
]

const Chat = () => {

  const [show, setShow] = useState(false);
  const [zorkTextInc, setZorkTextInc] = useState(0);
  const [zorkText, setZorkText] = useState('');
  const [inputText, setInputText] = useState('')

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSend = () => {
    setInputText('')
    setZorkTextInc((zorkTextInc + 1) % (chatTexts.length + 1))
    setZorkText(chatTexts[zorkTextInc]);
  }

  const handleInput = (e) => {
    setInputText(e.target.value)
  }


  return ( 
    <Container className="float-right">
      <div className="bubble" onClick={handleShow}>
        <h3>
          Ask Zork
        </h3>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered='true'
      >
        <Modal.Header closeButton className="orangeBg">
          <Modal.Title className="whiteText">Ask Zork</Modal.Title>
        </Modal.Header>

        <Modal.Body className="orangeBg">
          <Container>
          <Row className="justify-content-md-center">
            <Image src="./Zorkhead.png" width="75vw"/> 
          </Row>
          <Row className="justify-content-md-center">
           <p className="whiteText">
            Our award winning advice columnist is here to answer all of your most important questions; maners, relationship advice, and understanding the complexity of human cultures.
           </p>
          </Row>
          </Container>
          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label className="whiteText">Zork Says:</Form.Label>
              <Form.Control as="textarea" rows="3" value={zorkText} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label className="whiteText">Talk to Zork:</Form.Label>
              <Form.Control as="textarea" rows="3" value={inputText} onChange={(e) => handleInput(e)}/>
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer className="orangeBg">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={handleSend}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
      </Container>
  )
};

export default Chat;