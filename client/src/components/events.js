import EventCard from "./event";
import CardGroup from 'react-bootstrap/CardGroup';



function Events({events}) {

  return (
    <CardGroup className="Events">
            {events.map(event =>
            <EventCard key={event.id} title={event.title} location={event.location} time={event.eventtime}/>
            )}
    </CardGroup>
  );
}

export default Events;