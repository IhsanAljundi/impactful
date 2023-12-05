const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { generateToken, verifyToken } = require("./auth");
const User = require("./models/User");
const Profile = require("./models/Profile");

const {
  getCurrentProfile,
  getProfileByUsername,
} = require("./controllers/profileController");

const {
  createPost,
  getAllPosts,
  getPostsByUid,
} = require("./controllers/postController");

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

app.use(cors());
app.options("*", cors());

app.use(express.json());
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

app.post("/signup", async (req, res) => {
  const { email, username, password, role } = req.body;

  // Check if email already exists
  const existingEmail = await User.findOne({ email });
  if (existingEmail) {
    return res.status(400).send({ error: "Email already taken" });
  }

  // Check if email already exists
  const existingUsername = await User.findOne({ username });
  if (existingUsername) {
    return res.status(400).send({ error: "Username already taken" });
  }

  const user = new User({ email, username, password, role });
  await user.save();

  const token = generateToken(user);
  res.status(201).send({ token });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.comparePassword(password))) {
    const token = generateToken(user);
    return res.status(200).json({ token });
  }

  res.status(400).json({ error: "Invalid credentials" });
});

app.get("/profile", verifyToken, getCurrentProfile);
app.get("/profile/:username", getProfileByUsername);

app.post("/post", verifyToken, createPost);
app.get("/posts", getAllPosts);
app.get("/posts/:uid", getPostsByUid);
