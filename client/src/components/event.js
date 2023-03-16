import Card from "react-bootstrap/Card";
import Moment from "react-moment";
import DeleteButton from "./Delete";
import EditScreenModal from "./EditScreenModal";

const EventCard = (props) => {

  const onUpdate = (eventObj) => {
    // api patch call 
    let validatedTAndL = validateTitleLocation(eventObj.eventName, eventObj.eventLocation);
    let validatedDate = validateDate(eventObj.eventDate);
    console.log("This is inside the onUpdate", eventObj);
    if(validatedDate === true && validatedTAndL === true) {
     alert("Make API CAlL")
    } else if(validatedDate === true) {
      alert(`${validatedTAndL}`);
    } else if (validatedTAndL === true) {
      alert(`${validatedDate}`)
    } else {
      alert(`WRONG ENTRY: ${validatedDate} and ${validatedTAndL}`);
    }
  }

  return (
    <div>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Date:{" "}
              {!props.time ? (
                "TBD"
              ) : (
                <Moment format={"DD/MM/YYYY"}>{props.time}</Moment>
              )}
            </Card.Subtitle>
            <Card.Text>{props.location}</Card.Text>
          </Card.Body>
          <DeleteButton id={props.eventId} />
          <EditScreenModal {...props} id={props.eventId} onSubmit={onUpdate}/>
        </Card>
    </div>
  );
};

export default EventCard;

