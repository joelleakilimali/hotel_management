const jwt = require("jsonwebtoken");
const { getUserById } = require("../services/user.service");

JWT_KEY = process.env.JWT_KEY;

const securedRoute = async (req, res, next) => {
  if (req.headers.authorization) {
    const authorization = req.headers.authorization;
    if (authorization.startsWith("Bearer")) {
      try {
        const splits = authorization.split(" ");
        const token = splits[1];
        const verified = await jwt.verify(token, JWT_KEY);
        if (verified) {
          user_id = verified.user_id;
          const user = await getUserById(user_id);
          if (user) {
            next();
          } else {
            return res.status(403).json({ message: "Not authorized" });
          }
        } else {
          return res.status(400).json({ message: "Invalid token" });
        }
      } catch (e) {
        return res
          .status(400)
          .json({ message: "Invalid token or token expired" });
      }
    }
  } else {
    return res.status(403).json({ message: "Not authorized" });
  }
};

module.exports = securedRoute;
