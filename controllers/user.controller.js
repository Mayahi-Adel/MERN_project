const UserModel = require("../models/use.model");
const ObjectID = require("mongoose").Types.ObjectId;

module.exports.getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find().select("-password");
    res.status(200).json({ users });
  } catch (err) {
    res.status(500).json({ err });
  }
};

module.exports.userInfo = async (req, res) => {
  const { id } = req.params;

  if (!ObjectID.isValid(id))
    return res.status(400).json({ message: "Unknown ID : " + id });
  UserModel.findById(id, (err, docs) => {
    if (!err) res.status(200).json(docs);
    else console.log("Unkown ID : " + err);
  }).select("-password");

  //   try {
  //     const user = await UserModel.findById(id).select("-password");
  //     res.status(200).json({ user });
  //   } catch (err) {
  //     res.status(500).json({ err });
  //   }
};

module.exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { bio } = req.body;

  if (!ObjectID.isValid(id))
    return res.status(400).json({ message: "Unknown ID : " + id });

  try {
    await UserModel.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          bio,
        },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true },
      (err, docs) => {
        if (!err) return res.status(201).json({ docs });
        else return res.status(500).json({ msg: err });
      }
    );
  } catch (err) {
    //return res.status(500).json({ err });
  }
};

module.exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!ObjectID.isValid(id))
    return res.status(400).json({ message: "Unknown ID : " + id });

  try {
    await UserModel.remove({ _id: id }).exec();
    res.status(200).json({ message: "Successfuly deleted." });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports.followUser = async (req, res) => {
  if (
    !ObjectID.isValid(req.params.id) ||
    !ObjectID.isValid(req.body.idToFollow)
  )
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    // add to the follower list
    await UserModel.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { following: req.body.idToFollow } },
      { new: true, upsert: true }
    );

    // add to following list
    await UserModel.findByIdAndUpdate(
      req.body.idToFollow,
      { $addToSet: { followers: req.params.id } },
      { new: true, upsert: true },
      (err, docs) => {
        if (!err) res.status(201).json(docs);
        else return res.status(400).json(err);
      }
    );
  } catch (err) {
    //return res.status(500).json({ message: err });
  }
};

module.exports.unfollowUser = async (req, res) => {
  if (
    !ObjectID.isValid(req.params.id) ||
    !ObjectID.isValid(req.body.idToUnfollow)
  )
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    await UserModel.findByIdAndUpdate(
      req.params.id,
      { $pull: { following: req.body.idToUnfollow } },
      { new: true, upsert: true }
      // ,
      // (err, docs) => {
      //   if (!err) res.status(201).json(docs);
      //   else return res.status(400).jsos(err);
      // }
    );
    // remove to following list
    await UserModel.findByIdAndUpdate(
      req.body.idToUnfollow,
      { $pull: { followers: req.params.id } },
      { new: true, upsert: true },
      (err, docs) => {
        if (!err) res.status(201).json(docs);
        if (err) return res.status(400).jsos(err);
      }
    );
  } catch (err) {
    //return res.status(500).json({ message: err });
  }
};
