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

  async function addEvent(data){
    await fetch("http://localhost:8080/events/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(() => {
      console.log("added event"); 
      window.location.reload();
    });
  }

  const handleClick = () => {
    // api patch call 
    let validatedTAndL = validateTitleLocation(eventName, eventLocation);
    let validatedDate = validateDate(eventDate);
    console.log("Inside the post modal handle click"); 
    if(validatedDate === true && validatedTAndL === true) {
     let eventObj = {title: eventName, location: eventLocation, eventtime: eventDate};
     addEvent(eventObj)
    } else if(validatedDate === true) {
      alert(`${validatedTAndL}`);
    } else if (validatedTAndL === true) {
      alert(`${validatedDate}`)
    } else {
      alert(`WRONG ENTRY: ${validatedDate} and ${validatedTAndL}`);
    }
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
