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
        console.log(docs);
        if (!err) return res.json({ docs });
        else return res.status(500).json({ msg: err });
      }
    );
  } catch (err) {
    //return res.status(500).json({ err });
  }
};
