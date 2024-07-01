const User = require("../models/User");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;

const generateToken = (id) => {
  return jwt.sign({ id }, jwtSecret, {
    expiresIn: "7d",
  });
};

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    res.status(422).json({ erros: ["Por favor, utilize outro e-mail"] });
    return;
  }

  const salt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(password, salt);

  const newUser = await User.create({
    name,
    email,
    password: passwordHash,
  });

  if (!newUser) {
    res
      .status(422)
      .json({ erros: ["Houve um erro, por favor tente mais tarde."] });
    return;
  }

  //custom
  const resMessage = "Usuário criado com sucesso!";

  res.status(201).json({
    _id: newUser._id,
    token: generateToken(newUser._id),
    // custom
    resMessage,
  });
};

const login = (req, res) => {
  res.send("Logado com sucesso!");
};

module.exports = { register, login };
