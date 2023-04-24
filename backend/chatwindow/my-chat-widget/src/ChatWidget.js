import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { IoChatbubblesSharp } from "react-icons/io5";

function ChatWidget({ twilioNumber, moderatorPhoneNumber }) {
  const [showChatModal, setShowChatModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [object, setObject] = useState("");

  function handleChatButtonClick() {
    setShowChatModal(true);
  }

  function handleChatModalClose() {
    setShowChatModal(false);
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePhoneChange(event) {
    setPhone(event.target.value);
  }

  function handleMessageChange(event) {
    setMessage(event.target.value);
  }

  function handleObjectChange(event) {
    setObject(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitting chat message: ", {
      name,
      email,
      phone,
      message,
      object,
    });
    fetch("/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, message, object }),
    })
      .then((response) => {
        console.log("Chat message submitted successfully:", response);
        setShowChatModal(false);
      })
      .catch((error) => console.error("Error submitting chat message:", error));
  }

  return (
    <div>
      <Button
        variant="light"
        onClick={handleChatButtonClick}
        style={{
          backgroundColor: "#ed1c24",
          borderColor: "#ed1c24",
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 9999,
        }}
      >
        <IoChatbubblesSharp size={22} style={{ marginRight: "5px" }} />
        <span style={{ fontWeight: "bold" }}>Chat with us</span>
      </Button>
      <Modal show={showChatModal} onHide={handleChatModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Chat with us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={handleNameChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicPhone">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter phone number"
                value={phone}
                onChange={handlePhoneChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicObject">
              <Form.Label>Object of message</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter object of message"
                value={object}
                onChange={handleObjectChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter message"
                value={message}
                onChange={handleMessageChange}
                required
              />
            </Form.Group>
            <Button variant="danger" type="submit">
              Send
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ChatWidget;
