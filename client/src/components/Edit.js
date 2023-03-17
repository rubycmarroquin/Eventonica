const EditButton = ({...props }) => {
  return (
    <form>
      <div>
      <label>
        Event Name:<span className="maxlength"> *(Max 50 Characters)</span><br/>
        <input className="inputEAndL"
          type="text"
          value={props.eventName}
          onChange={(e) => props.setEventName(e.target.value)}
          maxLength = {50}
          placeholder="Enter name of event"
          required
        />
      </label>
      </div>
      <div>
      <label>
        Location: <span className="maxlength"> *(Max 50 Characters)</span><br/>
        <input className="inputEAndL"
          type="text"
          value={props.eventLocation}
          onChange={(e) => props.setEventLocation(e.target.value)}
          maxLength = {50}
          placeholder="Enter location"
          required
        />
      </label>
      </div>
      <div>
      <label>
       Date:<br></br>
        <input
          type="text"
          value={props.eventDate}
          onChange={(e) => props.setEventDate(e.target.value)}
          maxLength = {10}
          minLength = {10}
          placeholder="YYYY-MM-DD"
          required
        />
      </label>
      </div>
                  <div>
      <label>
        Description:<br></br>
        <input
          type="text"
          value={props.eventDescription}
          onChange={(e) => props.setEventDescription(e.target.value)}
          maxLength={150}
          placeholder="Enter description for event"
          required
        />
      </label>
      </div>
    </form>
  );
};

export default EditButton;