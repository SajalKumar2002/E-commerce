require("dotenv").config();
const express = require("express");

const PORT = process.env.PORT || 5000;
const connection = require("./config/db");

const app = express();

const ProductRouter = require('./routes/product')

app.use("/api/product", ProductRouter);

app.get("/", (req, res) => {
  res.send("Api is Running");
});

app.listen(PORT, () => {
  try {
    connection;
    console.log("connected successfully to Database");
  } catch (error) {
    console.error(error);
  }
  console.log("Server is running on " + PORT);
});