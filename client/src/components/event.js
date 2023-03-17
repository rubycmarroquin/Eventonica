import Card from "react-bootstrap/Card";
import Moment from "react-moment";
import DeleteButton from "./Delete";
import EditScreenModal from "./EditScreenModal";
import validateDate from "./validateDate";
import validateTitleLocation from "./validateTitleLocation";
import Favorite from "./favorite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";

const EventCard = (props) => {
  async function editEvent(eventObj) {
    await fetch("http://localhost:8080/events/" + eventObj.eventId, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventObj),
    }).then(() => {
      console.log("updated event");
      window.location.reload();
    });
  }

  async function updateFavoriteStatus(favoriteObj) {
    await fetch("http://localhost:8080/favorites/" + props.eventId, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(favoriteObj),
    }).then(() => {
      console.log("updated event");
    });
  }

  const onUpdate = (eventObj) => {
    // api patch call
    let validatedTAndL = validateTitleLocation(
      eventObj.eventName,
      eventObj.eventLocation
    );
    let validatedDate = validateDate(eventObj.eventDate);
    console.log("This is inside the onUpdate", eventObj);
    if (validatedDate === true && validatedTAndL === true) {
      editEvent(eventObj);
    } else if (validatedDate === true) {
      alert(`${validatedTAndL}`);
    } else if (validatedTAndL === true) {
      alert(`${validatedDate}`);
    } else {
      alert(`WRONG ENTRY: ${validatedDate} and ${validatedTAndL}`);
    }
  };

  return (
    <div className="CardMainDiv">
      <Card
        style={{
          width: "20rem",
          height: "22rem",
          margin: "5px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <FontAwesomeIcon icon={faCalendarDay} />{" "}
            <Moment format={"DD/MM/YYYY"}>{props.time}</Moment>
          </Card.Subtitle>
          <Card.Text style={{ color: "" }}>
            <FontAwesomeIcon style={{ color: "red" }} icon={faLocationDot} />{" "}
            {props.location}
          </Card.Text>
          <p className="Description">{props.description}</p>
        </Card.Body>
        <div className="CardButtons">
          <DeleteButton id={props.eventId} />
          <EditScreenModal {...props} id={props.eventId} onSubmit={onUpdate} />
          <Favorite
            id={props.eventId}
            favoriteStatus={props.isFavorite}
            updateFavoriteStatus={updateFavoriteStatus}
          />
        </div>
      </Card>
    </div>
  );
};

export default EventCard;
