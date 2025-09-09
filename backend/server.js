const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: process.env.MYSQL_HOST || "mysql",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "root",
  database: process.env.MYSQL_DB || "mydb",
});

app.get("/api/items", (req, res) => {
  db.query("SELECT * FROM items", (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});