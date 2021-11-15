const UserModel = require("../models/user.model");

module.exports.uploadProfil = async (req, res) => {
  res.send(req.file);
};
