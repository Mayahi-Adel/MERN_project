const PostModel = require("../models/post.model");
const UserModel = require("../models/user.model");
const ObjectID = require("mongoose").Types.ObjectId;

module.exports.readPosts = async (req, res) => {
  PostModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error to get data : " + err);
  });
  //   try {
  //     const posts = await PostModel.find();
  //     res.status(200).json({ posts });
  //   } catch (err) {
  //     res.status(500).json({ msg: err.message });
  //   }
};

module.exports.createPost = async (req, res) => {
  const { posterId, message, picture, video } = req.body;

  const newPost = new PostModel({
    posterId,
    message,
    video,
    likers: [],
    comments: [],
  });

  try {
    const post = await newPost.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports.updatePost = async (req, res) => {
  const { id } = req.params;
  const { message } = req.body;

  if (!ObjectID.isValid(id)) return res.status(400).json("ID unknown : " + id);

  const updateRecord = {
    message,
  };

  PostModel.findByIdAndUpdate(
    id,
    {
      $set: {
        message,
      },
    },
    { new: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log("Update error : " + err);
    }
  );
};

module.exports.deletePost = async (req, res) => {
  const { id } = req.params;
  if (!ObjectID.isValid(id)) return res.status(400).json("ID unknown : " + id);

  PostModel.findByIdAndRemove(id, (err, docs) => {
    if (!err) {
      res.send({ id: docs._id });
    } else console.log("Delete error : " + err);
  });
};
