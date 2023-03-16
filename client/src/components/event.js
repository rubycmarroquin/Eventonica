import Card from "react-bootstrap/Card";
import Moment from "react-moment";
import DeleteButton from "./Delete";
import EditScreenModal from "./EditScreenModal";

const EventCard = (props) => {

  const refreshAfterEdit = () => {
    window.location.reload();
  };

  async function editEvent(eventObj) {
    await fetch("http://localhost:8080/events/" + eventObj.eventId, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(eventObj)
    }).then(() => {
      console.log("updated event"); 
      refreshAfterEdit();
    });
  } 

  const onUpdate = (eventObj) => {
    // api patch call 
    let validatedTAndL = validateTitleLocation(eventObj.eventName, eventObj.eventLocation);
    let validatedDate = validateDate(eventObj.eventDate);
    console.log("This is inside the onUpdate", eventObj);
    if(validatedDate === true && validatedTAndL === true) {
     editEvent(eventObj)
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

// validate if date format is correct 
function validateDate(date) {
  if(date.length !== 10) {
    return "Date format incorrect";
  }
  else if(date[4] !== "-" && date[7] !== "-") {
    return "Date format incorrect";
  } else {
    let year = +(date.substring(0,4));
    let month = +(date.substring(5,7));
    let day = +(date.substring(8,10));
    if(typeof year !== "number" && typeof day !== "number" && typeof month !== "number") {
      return "Enter a number for year, day, and month";
    } else if(year >= 2023 && month >= 1 && month <= 12 && day >=1 && day <= 31) {
      return true;
    } else {
      return "Not a valid date";
    }
} 
}

function validateTitleLocation(title, location) {
  if(title.length > 50 || title.length < 5) {
    return "Title must be at least 5 characters";
  } else if(location.length > 50 || location.length < 10) {
    return "Location must be at least 10 characters";
  } else return true;
}