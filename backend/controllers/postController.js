const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  const { id } = req.user;
  const { title, content, cover } = req.body;

  try {
    const post = await new Post({
      user: id,
      title,
      content,
      cover,
      comments: [],
      likes: [],
    });
    await post.save();

    return res.status(201).send();
  } catch (e) {
    return res.status(500).send({ error: "Error creating post" });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .sort({ createdAt: "desc" })
      .populate("user")
      .populate("comments")
      .populate("likes");

    return res.send(
      posts.map((post) => ({
        id: post._id,
        createdAt: post.createdAt,

        user: {
          id: post.user._id,
          email: post.user.email,
          username: post.user.username,
          role: post.user.role,
        },

        title: post.title,
        content: post.content,
        cover: post.cover,

        comments: post.comments,
        likes: post.likes,
      }))
    );
  } catch (e) {
    return res.status(500).send({ error: "Error retrieving posts" });
  }
};

exports.getPostsByUid = async (req, res) => {
  const { uid } = req.params;

  try {
    const posts = await Post.find({ user: uid })
      .populate("user")
      .populate("comments")
      .populate("likes");

    return res.send(
      posts.map((post) => ({
        id: post._id,
        createdAt: post.createdAt,

        user: {
          id: post.user._id,
          email: post.user.email,
          username: post.user.username,
          role: post.user.role,
        },

        title: post.title,
        content: post.content,
        cover: post.cover,

        comments: post.comments,
        likes: post.likes,
      }))
    );
  } catch (e) {
    return res.status(500).send({ error: "Error retrieving posts" });
  }
};
