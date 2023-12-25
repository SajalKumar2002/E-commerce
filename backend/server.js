require("dotenv").config();
const express = require("express");

const PORT = process.env.PORT || 5000;
const connection = require("./config/db");

const app = express();

app.get("/", (req, res) => {
  res.send("Api is Running");
});

app.listen(PORT, () => {
    connection;
    console.log("Server is running on " + PORT);
});
