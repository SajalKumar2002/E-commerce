require("dotenv").config();
const express = require("express");
const connection = require("./config/db");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const PORT = process.env.PORT || 5000;

const app = express();

const ProductRouter = require("./routes/product");

app.use("/api/product", ProductRouter);

app.use(notFound);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Api is Running");
});

app.listen(PORT, () => {
  try {
    connection;
    console.log("connected successfully to DB");
  } catch (error) {
    console.error(error);
  }
  console.log("Server is running on " + PORT);
});