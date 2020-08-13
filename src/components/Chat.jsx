import React, { useState} from 'react';
import './chat.css'
import {Button, Modal, Form, FormControl} from 'react-bootstrap';

const chatTexts = [
  "Where was the Kaboom? There was supposed to be an earth-shattering kabaoom!",
  "Have you tried restarting it?",
  "Sometimes you just have to keep smashing until they fit.",
  "When humans smack each other's hands it is a sign of respect, when they smack each other's faces it is an insult. Don’t mix it up.",
  "Turn the third knob three degrees to the right and hit ignite.",
  "It is no longer polite to smash a glass on the ground as a sign of appreciation for the drink."
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
    <>
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
          <Modal.Title>Ask Zork</Modal.Title>
        </Modal.Header>

        <Modal.Body className="orangeBg">

          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Zork Says</Form.Label>
              <Form.Control as="textarea" rows="3" value={zorkText} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Talk to Zork</Form.Label>
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
    </>
)
};

export default Chat;