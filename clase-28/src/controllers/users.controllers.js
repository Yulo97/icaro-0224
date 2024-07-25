const registrarUsuario = (req, res) => {
  const body = req.body;

  if (body.password.length <= 3) {
    res
      .status(400)
      .json({ status: "error", message: "La contraseña debe tener al menos 4 digitos" });
  } else {
    res.status(201).json({ status: "success", message: "Registro Exitoso" });
  }
};

const fullUsers = (req, res) => {
  res.status(200).json({ message: "Aca estan todos los usuarios" });
};

const getUserById = (req, res) => {
  res.status(200).json({ message: "Aca hay un usuario" });
};

module.exports = { registrarUsuario, fullUsers, getUserById };
