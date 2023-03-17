const Post = (props) => {
  return (
    <form className="PostForm">
      <div>
        <label>
          Event Name:<span className="maxlength"> *(Max 50 Characters)</span>
          <br />
          <input
            className="inputEAndL"
            type="text"
            value={props.eventName}
            onChange={(e) => props.setEventName(e.target.value)}
            maxLength={50}
            placeholder="Enter name of event"
            required
          />{" "}
          <br />
        </label>
      </div>
      <div>
        <label>
          Location: <span className="maxlength"> *(Max 50 Characters)</span>
          <br />
          <input
            className="inputEAndL"
            type="text"
            value={props.eventLocation}
            onChange={(e) => props.setEventLocation(e.target.value)}
            maxLength={50}
            placeholder="Enter location"
            required
          />
        </label>
      </div>
      <div>
        <label>
          Date:<br></br>
          <input
            type="textarea"
            value={props.eventDate}
            onChange={(e) => props.setEventDate(e.target.value)}
            maxLength={10}
            placeholder="YYYY-MM-DD"
            required
          />
        </label>
      </div>
      <div>
        <label>
          Description:<span className="maxlength"> *(Max 150 Characters)</span><br></br>
          <textarea  className="DescriptionInput"
            type="text"
            value={props.eventDescription}
            onChange={(e) => props.setEventDescription(e.target.value)}
            maxLength={500}
            placeholder="Enter description for event"
            required/>
        </label>
      </div>
    </form>
  );
};

export default Post;
