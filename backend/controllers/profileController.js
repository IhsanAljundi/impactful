const User = require("../models/User");
const Profile = require("../models/Profile");

exports.getCurrentProfile = async (req, res) => {
  const { id } = req.user;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }

    const profile = await Profile.findOne({
      "user.username": user.username,
    }).populate("user");

    return res.send({
      email: user.email,
      username: user.username,
      role: user.role,
      ...profile,
    });
  } catch (e) {
    return res.status(500).send({ error: "Error retrieving profile" });
  }
};

exports.getProfileByUsername = async (req, res) => {
  const { username } = req.params;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }

    const profile = await Profile.findOne({
      "user.username": username,
    }).populate("user");

    return res.send({
      email: user.email,
      username: user.username,
      role: user.role,
      ...profile,
    });
  } catch (e) {
    return res.status(500).send({ error: "Error retrieving profile" });
  }
};
