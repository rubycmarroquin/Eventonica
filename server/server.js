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
    const { rows: events } = await db.query("SELECT * FROM events ORDER BY title");
    res.send(events);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
});

app.get("/events/:eventName", async (req, res) => {
  const event_name = req.params.eventName;
  // real connection with the DB eventonica
  try {
    const { rows: events } = await db.query(
      `SELECT * FROM events WHERE title iLIKE '%${event_name}%' ORDER BY title`
    );
    res.send(events);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
});

app.post("/events/", async (req, res) => {
  const { title, location, eventtime } = req.body;

  db.query(
    `INSERT INTO events (title, location, eventtime, "isFavorite") VALUES ('${title}', '${location}', '${eventtime}', false)`,
    (error, results) => {
      if (error) {
        throw error;
      } else {
        res.send("Success!!");
      }
    }
  );
});

app.patch("/events/:id", async (req, res) => {
  const { eventName, eventLocation, eventDate } = req.body;
  const event_id = req.params.id;

  db.query(
    `UPDATE events SET title = '${eventName}', location = '${eventLocation}', eventtime = '${eventDate}' WHERE id = ${event_id}`,
    (error, results) => {
      if (error) {
        throw error;
      } else {
        res.send("Success!!");
      }
    }
  );
});

app.delete("/events/:id", async (req, res) => {
  const event_id = req.params.id;
  db.query(`DELETE FROM events WHERE id = ${event_id}`, (error, results) => {
    if (error) {
      throw error;
    } else {
      res.send("Success!!");
    }
  });
});

app.listen(PORT, () =>
  console.log(`Hola! Server running on Port http://localhost:${PORT}`)
);
