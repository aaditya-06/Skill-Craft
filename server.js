require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT;
const dbUrl = process.env.MONGO_URI;

mongoose
  .connect(dbUrl)
  .then(() => console.log("Connected to MongoDB Database"))
  .catch((err) => console.log(err, " Error in connecting the DataBase"));

app.get("/HTML", (req, res) => {
  res.send("Hello From HTML");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
