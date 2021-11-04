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
    res.status(400).json({ message: "Unknown ID : " + id });

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
        if (!err) return res.send(docs);
        if (err) console.log(err);
      }
    );
  } catch (err) {
    res.status(500).json({ err });
  }
};
