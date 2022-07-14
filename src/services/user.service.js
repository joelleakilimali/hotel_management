const User = require("../models/user.model");

const createUser = async (usr) => {
  return User.create(usr);
};

const getAllUsers = async () => {
  return await User.find();
};

const getUserById = async (id) => {
  return await User.findById(id);
};

const getUserByEmail = async (mail) => {
  return await User.find({ email: mail });
};

const updateUser = async (id, body) => {
  const filter = { _id: id };
  const update = body;
  return await User.findOneAndUpdate(filter, update);
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  getUserByEmail,
};
