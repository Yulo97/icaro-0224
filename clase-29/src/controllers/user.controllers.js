const { validationResult } = require("express-validator");

const loginUser = (req, res) => {
  const body = req.body;

  const errors = validationResult(req);

  if (errors.isEmpty()) {
    if (body.user == usuario.user && body.pass == usuario.pass) {
      // res.cookie("usuario", usuario.user, { httpOnly: true });
      req.session.username = body.user;

      res.status(200).json({ status: "success", message: "Se realizo el logueo correctamente" });
    } else {
      res.status(400).json({ status: "failure", message: "No existe el usuario" });
    }
  } else {
    res.status(400).json({
      status: "failure",
      message: "NO SE realizo el logueo correctamente",
      errors: errors.array(),
    });
  }
};

module.exports = loginUser;

const usuario = {
  user: "user@hotmail.com",
  pass: "123456",
};
