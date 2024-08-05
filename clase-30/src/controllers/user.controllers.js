const USERS = require("../models/user.model.js");

const login = (req, res) => {
  const { name, pass } = req.body;

  const usuario = USERS.find((user) => user.name === name);

  if (!usuario) return res.send("El usuario no existe");

  if (name === usuario.name && pass === usuario.pass) {
    console.log("Inicio de sesion con exito");

    req.session.name = name;
    req.session.isAdmin = usuario.isAdmin;

    res.redirect("/");
    return;
  }
  res.send("Inicio de sesion incorrecto");
};

const logout = (req, res) => {
  console.log(`El usuario: ${req.session.name} cerro sesion.`);

  req.session.destroy();
  res.redirect("/login");
};

const getUser = (req, res) => {
  res.json({ USERS });
};

module.exports = {
  login,
  logout,
  getUser,
};
