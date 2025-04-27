require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const engine = require("ejs-mate");

const app = express();
const port = process.env.PORT;
const dbUrl = process.env.MONGO_URI;

mongoose
  .connect(dbUrl)
  .then(() => console.log("Connected to MongoDB Database"))
  .catch((err) => console.log(err, " Error in connecting the DataBase"));

app.engine("ejs", engine);
app.set("views", __dirname + "/views");
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home/home", { title: "SkillCraft - Learn and Build!" });
});

app.get("/html", (req, res) => {
  res.render("courses/html");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
