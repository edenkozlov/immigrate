const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

// Database configuration
const db = mysql.createPool({
  host: "localhost",
  user: "edenkozlov@gmail.com",
  password: "Oykaramba25!",
  database: "your_database_name",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route to save client name and code to database
app.post("/src/components/myClients/myClients.js", (req, res) => {
  const name = req.body.name;
  const code = req.body.code;

  const sql = "INSERT INTO clients (name, code) VALUES (?, ?)";
  db.query(sql, [name, code], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error saving client to database");
    } else {
      res.status(200).send("Client saved to database");
    }
  });
});

// Route to retrieve client code from database
app.get("/get-client-code/:name", (req, res) => {
  const name = req.params.name;

  const sql = "SELECT code FROM clients WHERE name = ?";
  db.query(sql, [name], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error retrieving client code from database");
    } else {
      res.status(200).send(result[0].code);
    }
  });
});

// Start server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
