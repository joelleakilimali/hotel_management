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

const create_new_user = async (req, res) => {
  body = req.body;
  if (!body) {
    return res.status(400).send({ error: "Empty body" });
  }
  if (!body.email) {
    return res.status(400).send({ error: "Email is required" });
  }

  email = body.email;

  const emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if (!email.match(emailFormat)) {
    return res.status(400).send({ error: "Invalid email" });
  }
  user = await createUser(body);
  return res.status(201).json({ data: user });
};

const findUserById = async (req, res) => {
  user_id = req.params.id;
  const user = await getUserById(user_id);
  return res.status(200).json({ data: user });
};
const update_a_user = async (req, res) => {
  user_id = req.params.id;
  const body = req.body;
  const user_updated = updateUser(user_id, body);

  return res.status(200).json({ data: user_updated });
};

module.exports = {
  findAllUsers,
  create_new_user,
  findUserById,
  update_a_user,
};
