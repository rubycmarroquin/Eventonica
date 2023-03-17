import { useState } from "react";
import Button from "react-bootstrap/Button";

const DeleteButton = ({id}) => {
    const [promptUser, setPromptUser] = useState(false);

    const handleDelete = () => {
        window.location.reload();
    };

    const confirmation = () => {
        let password = window.prompt("What is the password?");
        if(password === 'ruby') {
            setPromptUser(true);
        } else {
            alert("Incorrect password");
        }
    }

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
            {!promptUser ? (
            <Button variant="danger" onClick={confirmation}>Delete</Button>
            ) : (
            <Button variant="danger" onClick={deleteEvent}>Confirm Delete</Button>
            )}
        </div>
    )
}

export default DeleteButton;