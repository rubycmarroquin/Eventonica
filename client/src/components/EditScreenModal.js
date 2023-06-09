import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Edit from "./Edit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare } from "@fortawesome/free-solid-svg-icons";

const EditScreenModal = ({ onSubmit, ...rest }) => {
  const [eventName, setEventName] = useState(rest.title);
  const [eventLocation, setEventLocation] = useState(rest.location);
  const [eventDate, setEventDate] = useState(rest.time.split("T")[0]);
  const [eventDescription, setEventDescription] = useState(rest.description);
  const [eventId, setEventId] = useState(rest.id);

  const handleClick = () => {
    console.log("This is inside the handleClick: ", rest.id);
    onSubmit({
      eventId,
      eventName,
      eventLocation,
      eventDate,
      eventDescription,
    });
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="EditButton" variant="primary" onClick={handleShow}>
        Edit{" "}
        <FontAwesomeIcon icon={faPenSquare} />
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
          <Edit
            eventName={eventName}
            setEventName={setEventName}
            eventLocation={eventLocation}
            setEventLocation={setEventLocation}
            eventDate={eventDate}
            setEventDate={setEventDate}
            eventDescription={eventDescription}
            setEventDescription={setEventDescription}
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
    </>
  );
};
export default EditScreenModal;
