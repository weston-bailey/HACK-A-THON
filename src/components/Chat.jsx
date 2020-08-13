import React, { useState} from 'react';
import './chat.css'
import {Button, Modal, Form, FormControl} from 'react-bootstrap';

const chatTexts = [
  "Where was the Kaboom? There was supposed to be an earth-shattering kabaoom!",
  "Other Thing",
  "Thing Three",
  "Thing For"
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
    setZorkTextInc((zorkTextInc + 1) % 4)
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