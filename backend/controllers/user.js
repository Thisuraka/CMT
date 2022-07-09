const User = require("../models/user");
const jwt = require("jsonwebtoken");


module.exports.index = async (req, res) => {
  const Users = await User.find({
    isActive: "1",
  });
  res.status(202).send({
    Users,
  });
};

module.exports.show = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(503).send({
      message: "No Data Available",
    });
  }
  res.status(200).send({
    user,
  });
};

module.exports.register = async (req, res) => {
  const {
    name,
    mobile,
    role,
    email,
    specialization,
    participant,
    designation,
    affiliation,
    isPaid,
    username,
    password,
  } = req.body;

  let newUser = new User({
    name,
    email,
    username,
    role,
    mobile,
    participants: {
      specialization: specialization,
      participant: participant,
      designation: designation,
      affiliation: affiliation,
    },
    isPaid: isPaid,
    reviewer: {
      specialization: specialization,
      participant: participant,
    },
  });

  const registeredUser = await User.register(newUser, password);
  res.status(202).send({
    user: registeredUser,
    message : "Successfully Registered"
  });
};

module.exports.update = async (req, res) => {
  const { id } = req.params;
  // console.log(req.body);
  const users = await User.findByIdAndUpdate(id, { ...req.body });
  await users.save();

  res.status(202).send({
    message: "Successfully Updated the users!",
    users,
  });
};

module.exports.login = async (req, res) => {
  const token = generateAccessToken({ username: req.body.username , role :req.user.role , id : req.user.id  });
  res.status(202).send({
    token,
    username : req.body.username,
    role : req.user.role,
    id : req.user.id,
  });
};

module.exports.verify = async (req, res) => {
  const { token } = req.query;
  // console.log("verify",token);

  jwt.verify(token, process.env.TOKEN_SECRET, function (err, decoded) {
    // console.log(decoded);
    res.status(202).send({
      token,
      username : decoded.username,
      role : decoded.role,
      id : decoded.id,
    });
  });
};

module.exports.logout = (req, res) => {
  req.logOut();
  res.status(202).send({
    message: "Successfully Updated the events!",
  });
};

function generateAccessToken(username) {
  return jwt.sign(username, process.env.TOKEN_SECRET, {
    expiresIn: "2592000s",
  });
}
