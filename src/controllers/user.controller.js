const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
} = require("../services/user.service");

const findAllUsers = async (req, res) => {
  allUser = await getAllUsers();
  return res.status(200).json({ data: allUser });
};

module.exports = {
  findAllUsers,
};
