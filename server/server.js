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
    const { rows: events } = await db.query(
      "SELECT * FROM events ORDER BY eventtime"
    );
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
  const { title, location, eventtime, description } = req.body;
  console.log(description);
  db.query(
    `INSERT INTO events (title, location, eventtime, "isFavorite", description) VALUES($1, $2, $3, $4, $5)`, [title, location, eventtime, false, description],
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
  const { eventName, eventLocation, eventDate, eventDescription } = req.body;
  const event_id = req.params.id;

  db.query(
    "UPDATE events SET title = $1, location = $2, eventtime = $3, description = $4 WHERE id =$5",
    [eventName, eventLocation, eventDate, eventDescription, event_id],
    (error, results) => {
      if (error) {
        throw error;
      } else {
        res.send("Success!!");
      }
    }
  );
});

app.patch("/favorites/:id", async (req, res) => {
  const event_id = req.params.id;
  let status = req.body.status;
  console.log(status);
  if (status === true) {
    status = false;
  } else {
    status = true;
  }

  db.query(
    `UPDATE events SET "isFavorite" = ${status} WHERE id = ${event_id}`,
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
