const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { getUserByEmail, createUser } = require("../services/user.service");

const register = async (req, res) => {
  body = req.body;
  if (!body) {
    return res.status(400).json({ error: "Empty body" });
  }
  if (!body.email && !body.password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  email = body.email;
  const emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if (!email.match(emailFormat)) {
    return res.status(400).send({ error: "Invalid email" });
  }
  find_user = await getUserByEmail(email);
  if (find_user.length) {
    return res
      .status(400)
      .json({ message: "Account with same email already in the system" });
  }

  password = body.password;

  const salt = await bcrypt.genSalt(10);
  const hashed_password = await bcrypt.hash(password, salt);

  new_user = await createUser({ ...body, password: hashed_password });

  return res.status(200).json({ message: "user created", data: new_user });
};

const login = async (req, res) => {
  body = req.body;
  if (!body) {
    return res.status(400).json({ error: "Empty body" });
  }
  if (!body.email && !body.password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  email = body.email;

  find_user = await getUserByEmail(email);
  if (find_user.length) {
    user = find_user[0];
    const password_verified = await bcrypt.compare(
      body.password,
      user.password
    );
    if (password_verified) {
      const token = jwt.sign({ user_id: user._id, email }, JWT_KEY, {
        expiresIn: "2h",
      });
      return res.status(200).json({ message: "login successes", token, user });
    } else {
      return res.status(400).json({ message: "Username/Password invalid" });
    }
  } else {
    return res.status(400).json({ message: "Username/Password invalid" });
  }
};

module.exports = {
  register,
  login,
};
