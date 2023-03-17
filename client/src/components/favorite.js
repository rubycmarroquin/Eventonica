import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import Button from "react-bootstrap/Button";

const Favorite = ({ id, favoriteStatus, updateFavoriteStatus }) => {
  const [favorite, setFavorite] = useState(favoriteStatus);
  const handleClick = () => {
    let password = window.prompt("Enter password");
    if (password === "ruby") {
      favorite ? setFavorite(false) : setFavorite(true);
       const favoriteObj = {status: favorite};
       updateFavoriteStatus(favoriteObj);
    } else {
        alert("Incorrect password");
    }
  };

  return <Button variant="" onClick={handleClick} style={{background: "lightpink"}}> <FontAwesomeIcon icon={faStar} style={{color: favorite ? "yellow" : "white"}} /></Button>;
};

export default Favorite;
