const express = require("express");
const mongoose = require("mongoose");

const { generateToken, verifyToken } = require("./auth");
const User = require("./models/User");

const app = express();
const port = 3001;

mongoose.connect("mongodb://mongo:27017/impactful", {
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

app.post("/signup", async (req, res) => {
  const { username, password, role } = req.body;

  // Check if username already exists
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(400).send({ error: "Username already taken" });
  }

  const user = new User({ username, password, role });
  await user.save();

  res.status(201).send({ message: "User created successfully" });
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (user && (await user.comparePassword(password))) {
    const token = generateToken(user);
    return res.status(200).json({ token });
  }

  res.status(400).json({ error: "Invalid credentials" });
});
