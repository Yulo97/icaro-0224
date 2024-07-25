const isAdmin = (req, res, next) => {
  const body = req.body;

  const usuario = DB.find((user) => user.email === body.email);

  if (!usuario) return res.status(400).json({ status: "failure", message: "El usuario no existe" });

  if (usuario.admin) {
    console.log(`El usuario ${body.email} es ADMIN, puede continuar `);
    next();
  } else {
    console.log(`El usuario ${body.email} no es ADMIN, y no puede continuar `);
    res.status(401).json({ status: "failure", message: "El usuario no es adminisitrador" });
  }
};

const DB = [
  {
    email: "giulianodv97@gmail.com",
    password: "1234",
    admin: true,
  },
  {
    email: "giulianoodv97@gmail.com",
    password: "12345",
    admin: false,
  },
];

module.exports = { isAdmin };
