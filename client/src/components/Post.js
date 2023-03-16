const Post = (props) => {
  return (
    <form>
      <label>
        Event Name<span className="maxlength"> *(Max 50 Characters)</span>:
        <input
          type="text"
          value={props.eventName}
          onChange={(e) => props.setEventName(e.target.value)}
          maxLength={50}
          required
        />
      </label>
      <label>
        Location<span className="maxlength"> *(Max 50 Characters)</span>:
        <input
          type="text"
          value={props.eventLocation}
          onChange={(e) => props.setEventLocation(e.target.value)}
          maxLength={50}
          required
        />
      </label>
      <label>
        Date<span className="maxlength"> (YYYY-MM-DD)</span>:
        <input
          type="text"
          value={props.eventDate}
          onChange={(e) => props.setEventDate(e.target.value)}
          maxLength={50}
          required
        />
      </label>
    </form>
  );
};

export default Post;
