import { useState, useEffect } from "react";
import "./App.css";
import Events from "./components/events";
import PostModal from "./components/PostModal";
import SearchBar from "./components/SearchBar";

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/events")
      .then((response) => response.json())
      .then((events) => {
        setEvents(events);
        console.log("Events fetched...", events);
      });
  }, []);

  return (
    <div className="App">
      <PostModal />
      <h1 className="Header">Upcoming Events (2023)</h1>
      <SearchBar setEvents={setEvents} />
      <div className="AppInnerDiv">
        <Events events={events} />
      </div>
    </div>
  );
}

export default App;
