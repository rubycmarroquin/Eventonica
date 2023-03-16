const DeleteButton = ({id, setRefreshPage}) => {
    const handleDelete = () => {
        window.location.reload();
    };

    async function deleteEvent() {
        await fetch("http://localhost:8080/events/" + id, {
            method: "DELETE",
        }).then(()=> {
            console.log("deleted event");
            handleDelete();
        })

    }

    return (
        <div>
            <button type="button" onClick={deleteEvent}>Delete</button>
        </div>
    )
}

export default DeleteButton;

// props.eventId