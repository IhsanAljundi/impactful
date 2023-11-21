const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3001;

mongoose.connect("mongodb://mongo:27017/myapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB successfully");
});

app.use(express.json());
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});
