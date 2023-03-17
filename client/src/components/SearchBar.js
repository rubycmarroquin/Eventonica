import { useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({setEvents}) => {
  const [searchInput, setSearchInput] = useState("");

  const onChange = (e) => {
    console.log("e:", e.target.value)
    setSearchInput(e.target.value);
    loadEvents(e.target.value)
    
  };

  async function loadEvents(title) {
    // fetch the data from the backend
    const response = await fetch(`http://localhost:8080/events/${title}`);
    const json =  await response.json();
    setEvents(json);
  }

return (
      <form>
        <label className="SearchBarText">
            <FontAwesomeIcon icon={faSearch} className="SearchIcon"/>
           <input className="SearchBar" type="text" value={searchInput} onChange={onChange}
           placeHolder="Search" /> 
        </label>
      </form>
    );
};

export default SearchBar;
