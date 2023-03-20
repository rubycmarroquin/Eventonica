import { useState } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const DeleteButton = ({id}) => {

    const handleDelete = () => {
        window.location.reload();
    };

    const confirmation = () => {
        let password = window.prompt("Enter password to confirm: ");
        if(password === 'ruby') {
            deleteEvent();
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
            <Button className="DeleteButton" variant="danger" onClick={confirmation}>
                Delete {" "}<FontAwesomeIcon icon={faTrash} />
                </Button>
        </div>
    )
}

export default DeleteButton;