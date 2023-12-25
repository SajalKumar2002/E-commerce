require("dotenv").config();
const express = require("express");

const PORT = process.env.PORT || 5000;
const connection = require("./config/db");

const products = require("./Data/product")

const app = express();

app.get("/", (req, res) => {
  res.send("Api is Running");
});

app.get("/api/products", async (req,res) => {
  res.send(products.default);
})

app.get("/api/products/:id", (req,res) => {
  
  res.json(products);
})

app.listen(PORT, () => {
    connection;
    console.log("Server is running on " + PORT);
});
