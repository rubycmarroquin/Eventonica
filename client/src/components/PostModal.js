import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Post from "./Post";
import validateDate from "./validateDate";
import validateTitleLocation from "./validateTitleLocation";

const PostModal = () => {
  const [eventName, setEventName] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClick = () => {
    alert("Make API call")
  }

  return (
    <>
    <div className="PostModalMainDiv">
      <Button className="PostModalButton" variant="success" onClick={handleShow}>
        Create Event
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Post
            eventName={eventName}
            setEventName={setEventName}
            eventLocation={eventLocation}
            setEventLocation={setEventLocation}
            eventDate={eventDate}
            setEventDate={setEventDate}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </>
  );
};

export default PostModal;
