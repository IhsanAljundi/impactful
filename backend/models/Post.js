const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  content: String,
});

const LikeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
});

const PostSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  title: String,
  content: String,
  cover: String,
  comments: [CommentSchema],
  likes: [LikeSchema],
});

module.exports = mongoose.model("Post", PostSchema);
