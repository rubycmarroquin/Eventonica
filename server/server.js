//This is the minimal express server.
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const db = require("../server/db/db-connection.js");

const app = express();
const PORT = 8080;

// Configuring cors middleware
app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// //creates an endpoint for the route `/`
app.get("/", (req, res) => {
  res.json("Hello Techtonica Server for an app with Events");
});

app.get("/events", async (req, res) => {
  // real connection with the DB eventonica
  try {
    const { rows: events } = await db.query("SELECT * FROM events");
    res.send(events);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }

  // // hardcode the events response for testing reasons. This call has one more event that the real DB
  // const events = [

  //     {id: 1, title: 'Women in Tech Techtonica Panel', location: 'Overland Park Convention Center'},
  //     {id: 2, title: 'Japanese Cultural Education', location: 'Seattle Convention Center'},
  //     {id: 3, title: "Haven 90's Party Night Club", location: 'Hilton Hotel Kansas City'},
  //     {id: 4, title: 'Comedy Night at the Station', location: 'SF Hilton Hotel'},
  //     {id: 5, title: 'A Decadent Arts Experience', location: 'West Ridge Mall'},
  //     {id: 6, title: 'Techtonica Classroom Course', location: 'Techtonica HQ'}
  //   ];
  //   res.send(events);
});

app.get("/events/:eventName", async (req, res) => {
  const event_name = req.params.eventName;
  // real connection with the DB eventonica
  try {
    const { rows: events } = await db.query(
      `SELECT * FROM events WHERE title iLIKE '%${event_name}%'`
    );
    res.send(events);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
});

app.post("/events/", async (req, res) => {
  const title = req.params.title;
  const event_time = req.params.eventTime;
  // const description = req.params.description;
  const location = req.params.location;
  // const seats = req.params.seats; // int
  // const numOfAttendees = req.params.attendees; // int
  // const organizer = req.params.organizer;
  // const email = req.params.email;

  // real connection with the DB eventonica
  // db.query(`INSERT INTO events (title, location, eventtime) VALUES (${title}, ${location}, ${event_time})`);
  db.query("INSERT INTO events (title, location, eventtime) VALUES (PartyInTheUSA, My House, 2023-06-25");
});

app.listen(PORT, () =>
  console.log(`Hola! Server running on Port http://localhost:${PORT}`)
);
